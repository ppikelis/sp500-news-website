import { NewsCategory } from "@/types/news";

export function categorizeNews(title: string, description: string): NewsCategory {
  const text = `${title} ${description}`.toLowerCase();

  // Earnings keywords
  if (
    /\b(earnings|eps|revenue|quarterly results|q[1-4]|fiscal year|fy\d{4})\b/i.test(
      text
    ) ||
    /\b(beat|miss|surpass|exceed)\b.*\b(expectations|estimates|forecast)\b/i.test(
      text
    )
  ) {
    return "Earnings";
  }

  // M&A keywords
  if (
    /\b(merger|acquisition|buyout|deal|takeover|consolidation|merge|acquire|purchase)\b/i.test(
      text
    ) ||
    /\b(m&a|m and a)\b/i.test(text)
  ) {
    return "M&A";
  }

  // Guidance keywords
  if (
    /\b(forecast|outlook|guidance|projection|expects|anticipates|predicts)\b/i.test(
      text
    ) ||
    /\b(raises|lowers|maintains|updates)\b.*\b(guidance|outlook|forecast)\b/i.test(
      text
    )
  ) {
    return "Guidance";
  }

  // Dividends keywords
  if (
    /\b(dividend|payout|yield|dividend increase|dividend cut|ex-dividend)\b/i.test(
      text
    )
  ) {
    return "Dividends";
  }

  // IPO keywords
  if (
    /\b(ipo|initial public offering|goes public|public offering|listing)\b/i.test(
      text
    )
  ) {
    return "IPOs";
  }

  return "General";
}

