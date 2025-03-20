'use client';

import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import "./globals.css";

// Applying the DM_Sans font with latin subset
const dmSans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="relative">
      <head>
        {/* Here you can inject head tags dynamically, e.g., title */}
        <title>UPOD smart lockers</title>
        <meta name="description" content="Solving last-mile delivery issues by making affordable smart parcel lockers" />
      </head>
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        <Navbar /> {/* Global Navbar */}
        <main>{children}</main> {/* Content of the current page */}
        <Footer /> {/* Global Footer */}
      </body>
    </html>
  );
}
