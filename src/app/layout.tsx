import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://antonsukhorada.dev"),
  title: "Anton Sukhorada",
  description: "Anton Sukhorada — senior software engineer from Kyiv.",
  openGraph: {
    title: "Anton Sukhorada",
    description: "Anton Sukhorada — senior software engineer from Kyiv.",
    url: "https://antonsukhorada.dev",
    type: "website",
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.className} min-h-screen dark:bg-neutral-950 transition-colors duration-200`}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
