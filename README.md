# S&P 500 News Website

A Next.js application that aggregates and displays the latest news about top companies from multiple RSS feeds.

## Features

- 📰 Real-time news aggregation from multiple RSS feeds (Yahoo Finance, MarketWatch, Reuters, CNBC)
- 🔍 Search functionality across news titles and descriptions
- 🏢 Filter by company (ticker symbol)
- 📂 Category filtering (Earnings, M&A, Guidance, Dividends, IPOs, General)
- 🎨 Modern, responsive design similar to Seeking Alpha
- ⚡ Fresh data on each page load

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `app/` - Next.js app router pages and API routes
- `components/` - React components (NewsCard, NewsFeed, filters, etc.)
- `lib/` - Utility functions (RSS parsing, company matching, categorization)
- `types/` - TypeScript type definitions
- `public/` - Static assets (company data JSON)

## Technologies

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- rss-parser
- date-fns

