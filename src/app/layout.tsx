import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Anton Sukhorada",
    description: "Anton Sukhorada Developer From Kyiv",
    icons: {
        icon: "/icon.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}