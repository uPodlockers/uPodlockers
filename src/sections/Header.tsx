"use client";

import { useState } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logo-upod-white.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Manage hover dropdown states
  const [isDropdownOpen, setDropdownOpen] = useState({
    products: false,
    solutions: false,
    company: false,
  });

  // Toggle the mobile menu
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  // Handle mouse enter and leave for dropdowns
  const handleDropdownEnter = (menu: string) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: true,
    }));
  };

  const handleDropdownLeave = (menu: string) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: false,
    }));
  };

  return (
    <header className="sticky top-0 z-20">
      {/* Banner */}
      <div className="flex justify-center items-center py-1 bg-[#eaeefe] text-black text-small">
        <div className="inline-flex gap-1 items-center">
          <p>24*7 Accessible Parcel Lockers at your Service</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      {/* Header with Menu Icon */}
      <div>
        <div className="py-2 bg-black">
          <div className="container">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <Image src={Logo} alt="uPOD Logo" height={120} width={120} />
              </div>

              {/* Menu Icon for Mobile */}
              <MenuIcon
                className="h-5 w-5 md:hidden text-white cursor-pointer"
                onClick={toggleMenu}
              />

              {/* Desktop Navigation Links */}
              <nav className="hidden md:flex gap-6 font-semibold text-white items-center">
                <a
                  href="/"
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  Home
                </a>

                {/* Products Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter("products")}
                  onMouseLeave={() => handleDropdownLeave("products")}
                >
                  <Link
                    href="/product"
                    className="hover:text-blue-300 transition-colors duration-200"
                  >
                    Products
                  </Link>
                  {isDropdownOpen.products && (
                    <div className="absolute bg-black text-white p-4 rounded shadow-md mt-2 w-40 z-30">
                      <ul>
                        <li>
                          <Link
                            href="/product/1"
                            className="block py-1 hover:text-blue-300"
                          >
                            Product 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/product/2"
                            className="block py-1 hover:text-blue-300"
                          >
                            Product 2
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Solutions Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter("solutions")}
                  onMouseLeave={() => handleDropdownLeave("solutions")}
                >
                  <Link
                    href="/solutions"
                    className="hover:text-blue-300 transition-colors duration-200"
                  >
                    Solutions
                  </Link>
                  {isDropdownOpen.solutions && (
                    <div className="absolute bg-black text-white p-4 rounded shadow-md mt-2 w-40 z-30">
                      <ul>
                        <li>
                          <Link
                            href="/solutions/1"
                            className="block py-1 hover:text-blue-300"
                          >
                            Solution 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/2"
                            className="block py-1 hover:text-blue-300"
                          >
                            Solution 2
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Company Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter("company")}
                  onMouseLeave={() => handleDropdownLeave("company")}
                >
                  <Link
                    href="/company"
                    className="hover:text-blue-300 transition-colors duration-200"
                  >
                    Company
                  </Link>
                  {isDropdownOpen.company && (
                    <div className="absolute bg-black text-white p-4 rounded shadow-md mt-2 w-40 z-30">
                      <ul>
                        <li>
                          <Link
                            href="/company/overview"
                            className="block py-1 hover:text-blue-300"
                          >
                            Overview
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/company/team"
                            className="block py-1 hover:text-blue-300"
                          >
                            Team
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <a
                  href="/contact"
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  Contact Us
                </a>
                <a
                  href="/pricing"
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  Pricing
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Page Dropdown Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-75 z-10"
            onClick={() => setMenuOpen(false)}
          />

          <div className="fixed top-0 left-0 w-full h-full bg-black z-20 flex flex-col items-center justify-center">
            {/* Close Button */}
            <button
              className="absolute top-4 right-6 text-white text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              &times; {/* Close (X) Icon */}
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center gap-6 font-semibold text-white">
              <a
                href="/"
                className="hover:text-blue-300 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>

              <div
                className="relative"
                // onMouseEnter={() => handleDropdownEnter("products")}
                // onMouseLeave={() => handleDropdownLeave("products")}
              >
                <button
                  className="text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Products
                </button>
                {isDropdownOpen.products && (
                  <div className="bg-black text-white p-4 rounded shadow-md mt-2 w-40 z-30">
                    <ul>
                      <li>
                        <Link
                          href="/product/1"
                          className="block py-1 hover:text-blue-300"
                          onClick={() => setMenuOpen(false)}
                        >
                          Product 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/product/2"
                          className="block py-1 hover:text-blue-300"
                          onClick={() => setMenuOpen(false)}
                        >
                          Product 2
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("solutions")}
                onMouseLeave={() => handleDropdownLeave("solutions")}
              >
                <button
                  className="text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Solutions
                </button>
                {isDropdownOpen.solutions && (
                  <div className="bg-black text-white p-4 rounded shadow-md mt-2 w-40 z-30">
                    <ul>
                      <li>
                        <Link
                          href="/solutions/1"
                          className="block py-1 hover:text-blue-300"
                          onClick={() => setMenuOpen(false)}
                        >
                          Solution 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/solutions/2"
                          className="block py-1 hover:text-blue-300"
                          onClick={() => setMenuOpen(false)}
                        >
                          Solution 2
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("company")}
                onMouseLeave={() => handleDropdownLeave("company")}
              >
                <button
                  className="text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Company
                </button>
                {isDropdownOpen.company && (
                  <div className="bg-black text-white p-4 rounded shadow-md mt-2 w-40 z-30">
                    <ul>
                      <li>
                        <Link
                          href="/company/overview"
                          className="block py-1 hover:text-blue-300"
                          onClick={() => setMenuOpen(false)}
                        >
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/company/team"
                          className="block py-1 hover:text-blue-300"
                          onClick={() => setMenuOpen(false)}
                        >
                          Team
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <a
                href="/contact"
                className="hover:text-blue-300 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </a>
              <a
                href="/pricing"
                className="hover:text-blue-300 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
