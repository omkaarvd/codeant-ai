import { Sidebar } from "@/components/sidebar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CodeAnt AI",
  description: "AI-powered code review and analysis platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-inter antialiased", font.variable)}>
        <div className="flex min-h-screen bg-gray-100">
          <Sidebar />
          <main className="flex-1 mt-12 md:ml-[17rem] md:m-4 md:rounded-lg md:border bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
