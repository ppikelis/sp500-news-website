"use client";

import { NewsCategory } from "@/types/news";

interface CategoryFilterProps {
  selectedCategory: NewsCategory | "All";
  onChange: (category: NewsCategory | "All") => void;
}

const categories: (NewsCategory | "All")[] = [
  "All",
  "Earnings",
  "M&A",
  "Guidance",
  "Dividends",
  "IPOs",
  "General",
];

export default function CategoryFilter({
  selectedCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
            selectedCategory === category
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

