"use client";
import heroImage from "@/assets/hero-image.jpg"; // Keep your import path for the image

export const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row relative items-center justify-start bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage.src})`, // Use the .src property of the imported image
      }}
    >
      {/* Overlay for styling */}
      <div className="absolute inset-0 bg-[rgba(140,69,244,0.6)] mix-blend-soft-light z-0 rounded-lg"></div>

      {/* Left Side: Text Content */}
      <div className="flex-1 flex flex-col justify-center pl-8 md:pl-20 lg:pl-28 xl:pl-48 relative z-10 max-w-lg text-left">
        {/* Badge */}
        <div className="text-small inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight text-white">
          Now available nationwide!
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
          Building India&apos;s First Agnostic Smart Parcel Locker Network
        </h1>

        {/* Description */}
        <p className="text-xl text-white tracking-tight mt-6">
          Designed for businesses, communities, and individuals looking for a hassle-free parcel solution.
        </p>
      </div>

      {/* Blurred Box Behind All Text */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20 z-5 rounded-lg"></div>
    </section>
  );
};
