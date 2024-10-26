"use client";
import Image from "next/image";
import heroImage from "@/assets/hero-image.jpg"; // Replace with your actual image import

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row relative">
      {/* Left Side: Text Content */}
      <div className="flex-1 flex flex-col justify-center p-8 relative z-10">
        {/* Badge */}
        <div className="text-small inline-flex border border-color-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
          Now available nationwide!
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
          Building India&apos;s First Agnostic Smart Parcel Locker Network
        </h1>
        
        {/* Description */}
        <p className="text-xl text-[#010D3E] tracking-tight mt-6">
          Designed for businesses, communities, and individuals looking for a hassle-free parcel solution.
        </p>
      </div>

      {/* Right Side: Image with Overlay */}
      <div className="flex-1 relative flex items-center justify-center p-8 md:p-0">
        <div className="relative">
          <Image 
            src={heroImage} // Your image imported above
            alt="Smart Parcel Locker"
            layout="intrinsic" // Change to intrinsic to control size
            objectFit="cover" // Maintain aspect ratio and cover the area
            className="rounded-lg" // Add rounded corners
            width={400} // Specify width for intrinsic layout
            height={400} // Specify height for intrinsic layout
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[rgba(140,69,244,0.6)] mix-blend-soft-light rounded-lg" /> {/* Dark overlay */}
        </div>
      </div>
    </section>
  );
};
