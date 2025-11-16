"use client";

import { SP500Company } from "@/types/news";

interface FilterBarProps {
  companies: SP500Company[];
  selectedCompany: string;
  onChange: (ticker: string) => void;
}

export default function FilterBar({
  companies,
  selectedCompany,
  onChange,
}: FilterBarProps) {
  return (
    <div>
      <label htmlFor="company-filter" className="block text-sm font-medium text-gray-700 mb-2">
        Filter by Company
      </label>
      <select
        id="company-filter"
        value={selectedCompany}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">All Companies</option>
        {companies.map((company) => (
          <option key={company.ticker} value={company.ticker}>
            {company.ticker} - {company.name}
          </option>
        ))}
      </select>
    </div>
  );
}

