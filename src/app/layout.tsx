import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home • Pokédex",
  description: "Pokédex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex bg-zinc-100 dark:bg-zinc-950 transition-colors px-10 py-8 gap-10`}
      >
        {children}
      </body>
    </html>
  );
}
