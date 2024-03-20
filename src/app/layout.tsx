import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const roboto = JetBrains_Mono({
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Anton Sukhorada | Software Engineer",
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
        <body className={roboto.className}>{children}</body>
        </html>
    );
}