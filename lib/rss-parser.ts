import Parser from "rss-parser";
import { NewsItem } from "@/types/news";
import { findCompaniesInText, getSP500Companies } from "./sp500-companies";
import { categorizeNews } from "./news-categorizer";

const parser = new Parser();

export interface RSSFeedSource {
  url: string;
  name: string;
}

// RSS feed sources for financial news
export const RSS_FEEDS: RSSFeedSource[] = [
  {
    url: "https://feeds.finance.yahoo.com/rss/2.0/headline",
    name: "Yahoo Finance",
  },
  {
    url: "https://www.marketwatch.com/rss/topstories",
    name: "MarketWatch",
  },
  {
    url: "https://feeds.reuters.com/reuters/businessNews",
    name: "Reuters Business",
  },
  {
    url: "https://www.cnbc.com/id/100003114/device/rss/rss.html",
    name: "CNBC",
  },
];

export async function fetchNewsFromRSS(): Promise<NewsItem[]> {
  const companies = await getSP500Companies();
  const allNewsItems: NewsItem[] = [];

  // Fetch from all RSS feeds in parallel
  const feedPromises = RSS_FEEDS.map(async (feed) => {
    try {
      const feedData = await parser.parseURL(feed.url);
      const items = feedData.items || [];

      return items.map((item): NewsItem => {
        const title = item.title || "";
        const description = item.contentSnippet || item.content || "";
        const combinedText = `${title} ${description}`;

        // Find mentioned companies
        const mentionedCompanies = findCompaniesInText(combinedText, companies);

        // Categorize the news
        const category = categorizeNews(title, description);

        return {
          id: item.guid || item.link || `${feed.name}-${Date.now()}-${Math.random()}`,
          title,
          description: description.substring(0, 300), // Limit description length
          link: item.link || "",
          pubDate: item.pubDate ? new Date(item.pubDate) : new Date(),
          source: feed.name,
          companies: mentionedCompanies,
          category,
        };
      });
    } catch (error) {
      console.error(`Error fetching RSS feed from ${feed.name}:`, error);
      return [];
    }
  });

  const results = await Promise.all(feedPromises);
  const flatItems = results.flat();

  // Filter to only include news that mentions at least one of our companies
  const filteredItems = flatItems.filter(
    (item) => item.companies.length > 0
  );

  // Sort by date (newest first)
  filteredItems.sort(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime()
  );

  // Remove duplicates based on title similarity
  const uniqueItems = removeDuplicates(filteredItems);

  return uniqueItems;
}

function removeDuplicates(items: NewsItem[]): NewsItem[] {
  const seen = new Set<string>();
  const unique: NewsItem[] = [];

  for (const item of items) {
    const normalizedTitle = item.title.toLowerCase().trim();
    if (!seen.has(normalizedTitle)) {
      seen.add(normalizedTitle);
      unique.push(item);
    }
  }

  return unique;
}

