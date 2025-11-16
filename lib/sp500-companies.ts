import { SP500Company } from "@/types/news";
import { readFileSync } from "fs";
import { join } from "path";

let companiesCache: SP500Company[] | null = null;

export async function getSP500Companies(): Promise<SP500Company[]> {
  if (companiesCache) {
    return companiesCache;
  }

  try {
    // Read from file system (works in server-side contexts)
    const filePath = join(process.cwd(), "public", "sp500-companies.json");
    const fileContents = readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents) as SP500Company[];
    companiesCache = data;
    return data;
  } catch (error) {
    console.error("Error loading S&P 500 companies:", error);
    return [];
  }
}

export function findCompaniesInText(
  text: string,
  companies: SP500Company[]
): string[] {
  const foundTickers: string[] = [];
  const lowerText = text.toLowerCase();

  for (const company of companies) {
    const ticker = company.ticker.toLowerCase();
    const name = company.name.toLowerCase();

    // Check for ticker symbol (with word boundaries)
    const tickerRegex = new RegExp(`\\b${ticker.replace(".", "\\.")}\\b`, "i");
    if (tickerRegex.test(lowerText)) {
      if (!foundTickers.includes(company.ticker)) {
        foundTickers.push(company.ticker);
      }
    }

    // Check for company name (check for key words from company name)
    const nameWords = name.split(" ").filter((word) => word.length > 3);
    if (nameWords.length > 0) {
      const nameMatch = nameWords.some((word) => lowerText.includes(word));
      if (nameMatch && !foundTickers.includes(company.ticker)) {
        foundTickers.push(company.ticker);
      }
    }
  }

  return foundTickers;
}

