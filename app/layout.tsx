import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "S&P 500 News",
  description: "Latest news about S&P 500 companies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

