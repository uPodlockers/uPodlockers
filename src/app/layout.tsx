'use client';

import { DM_Sans } from "next/font/google"; // Import font
import clsx from "clsx"; // clsx for conditionally combining class names
import Navbar from "@/components/Navbar"; // Import global Navbar
import { Footer } from "@/sections/Footer"; // Import global Footer
import "./globals.css"; // Global styles

import { Metadata } from 'next'

// Applying the DM_Sans font with latin subset
const dmSans = DM_Sans({ subsets: ["latin"] });

// Define the page metadata, used for SEO, title, etc.
export const metadata: Metadata = {
  title: "upod smart lockers",
  description:
    "Solving last-mile delivery issues by making affordable smart parcel lockers",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="relative">
      <head>
        {/* Here you can inject head tags dynamically, e.g., title */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        <Navbar /> {/* Global Navbar */}
        <main>{children}</main> {/* Content of the current page */}
        <Footer /> {/* Global Footer */}
      </body>
    </html>
  );
}
