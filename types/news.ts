export type NewsCategory =
  | "Earnings"
  | "M&A"
  | "Guidance"
  | "Dividends"
  | "IPOs"
  | "General";

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  link: string;
  pubDate: Date;
  source: string;
  companies: string[]; // Array of ticker symbols
  category: NewsCategory;
}

export interface SP500Company {
  ticker: string;
  name: string;
  sector: string;
}

