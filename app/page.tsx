"use client";

import { useEffect, useState, useMemo } from "react";
import { NewsItem, NewsCategory, SP500Company } from "@/types/news";
import NewsFeed from "@/components/NewsFeed";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import CategoryFilter from "@/components/CategoryFilter";

export default function Home() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [companies, setCompanies] = useState<SP500Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory | "All">("All");

  // Fetch companies and news on mount
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch companies
        const companiesResponse = await fetch("/sp500-companies.json");
        const companiesData = await companiesResponse.json();
        setCompanies(companiesData);

        // Fetch news
        const newsResponse = await fetch("/api/news");
        const newsData = await newsResponse.json();
        
        // Convert pubDate strings back to Date objects
        const newsWithDates = newsData.map((item: any) => ({
          ...item,
          pubDate: new Date(item.pubDate),
        }));
        
        setNews(newsWithDates);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Filter and search news
  const filteredNews = useMemo(() => {
    let filtered = news;

    // Filter by company
    if (selectedCompany) {
      filtered = filtered.filter((item) =>
        item.companies.includes(selectedCompany)
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.companies.some((ticker) =>
            ticker.toLowerCase().includes(query)
          )
      );
    }

    return filtered;
  }, [news, selectedCompany, selectedCategory, searchQuery]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading news...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Stock Market News
          </h1>
          <p className="text-gray-600 text-lg">
            Latest news about top companies from multiple sources
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 space-y-5 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <FilterBar
              companies={companies}
              selectedCompany={selectedCompany}
              onChange={setSelectedCompany}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Filter by Category
            </label>
            <CategoryFilter
              selectedCategory={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700">
            Showing <span className="font-bold text-gray-900">{filteredNews.length}</span> of{" "}
            <span className="font-bold text-gray-900">{news.length}</span> articles
          </p>
        </div>

        {/* News Feed */}
        <NewsFeed news={filteredNews} />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            News aggregated from multiple RSS feeds. Data refreshes on each page load.
          </p>
        </div>
      </footer>
    </div>
  );
}

