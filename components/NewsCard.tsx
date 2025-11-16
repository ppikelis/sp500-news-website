import { NewsItem } from "@/types/news";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

interface NewsCardProps {
  news: NewsItem;
}

const categoryColors: Record<string, string> = {
  Earnings: "bg-blue-100 text-blue-800",
  "M&A": "bg-purple-100 text-purple-800",
  Guidance: "bg-green-100 text-green-800",
  Dividends: "bg-yellow-100 text-yellow-800",
  IPOs: "bg-pink-100 text-pink-800",
  General: "bg-gray-100 text-gray-800",
};

export default function NewsCard({ news }: NewsCardProps) {
  const timeAgo = formatDistanceToNow(news.pubDate, { addSuffix: true });

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg hover:border-blue-300 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                categoryColors[news.category] || categoryColors.General
              }`}
            >
              {news.category}
            </span>
            <span className="text-xs text-gray-500 font-medium">{news.source}</span>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs text-gray-400">{timeAgo}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight hover:text-blue-600 transition-colors">
            <Link 
              href={news.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              {news.title}
            </Link>
          </h3>
          {news.description && (
            <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
              {news.description}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-gray-100">
        <div className="flex flex-wrap gap-1.5">
          {news.companies.map((ticker) => (
            <span
              key={ticker}
              className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-semibold hover:bg-blue-100 transition-colors"
            >
              {ticker}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

