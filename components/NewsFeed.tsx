"use client";

import { NewsItem } from "@/types/news";
import NewsCard from "./NewsCard";

interface NewsFeedProps {
  news: NewsItem[];
}

export default function NewsFeed({ news }: NewsFeedProps) {
  if (news.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No news found matching your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
}

