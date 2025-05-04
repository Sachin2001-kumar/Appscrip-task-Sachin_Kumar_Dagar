import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import styles from "./layout.module.css";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script"; // 👈 import Script

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | eCommerce Showcase",
    default: "eCommerce Showcase",
  },
  description: "Browse our amazing collection of products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${styles.html} dark`}>
      <body className={`${inter.className} ${styles.body}`}>
        {/* 👇 Font Awesome Kit Script */}
        <Script
          src="https://kit.fontawesome.com/9bb1864201.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Header />
        <main className={styles.main}>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
