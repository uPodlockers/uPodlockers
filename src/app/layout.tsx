import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import { Footer } from "@/sections/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "upod smart lockers",
  description:
    "Solving last-mile delivery issues by making affordable smart parcel lockers",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        <Navbar /> {/* Global Navbar */}
        <main>{children}</main> {/* The content of the current page */}
        <Footer /> {/* Global Footer */}
      </body>
    </html>
  );
}
