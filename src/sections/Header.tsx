"use client";

import { useState } from 'react';
import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logo-upod-white.png';
import Image from "next/image";
import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

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
                <a href="#home">Home</a>
                <a href="#products">Products</a>
                <a href="#solutions">Solutions</a>
                <a href="#company">Company</a>
                <a href="#careers">Careers</a>
                <a href="#contact">Contact Us</a>
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
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
              <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
              <a href="#company" onClick={() => setMenuOpen(false)}>Company</a>
              <a href="#careers" onClick={() => setMenuOpen(false)}>Careers</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
