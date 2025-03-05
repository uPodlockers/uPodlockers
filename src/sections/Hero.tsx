"use client";
import heroImage from "@/assets/hero-image.jpg"; // Keep your import path for the image

export const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row relative items-start justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage.src})`, // Use the .src property of the imported image
      }}
    >
      {/* Overlay for styling */}
      <div className="absolute inset-0 bg-[rgba(140,69,244,0.6)] mix-blend-soft-light z-0"></div>

      {/* Left Side: Text Content */}
      <div
        className="flex-1 flex flex-col justify-start 
          mt-24 md:mt-30 lg:mt-36
          pl-12 md:pl-24 lg:pl-32 xl:pl-40
          relative z-10 max-w-lg text-left"
      >
        {/* Badge */}
        {/* <div
          className="text-small inline-flex border border-white/20 px-3 py-1 rounded-lg tracking-tight text-white"
          style={{
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.4)", // Shadow for badge
          }}
        >
          Now available nationwide!
        </div> */}

        {/* Main Heading */}
        <h1
          className="text-4xl md:text-5xl font-black tracking-tighter 
            bg-gradient-to-b from-white to-white text-transparent bg-clip-text 
            mt-4 md:mt-6"
          style={{
            textShadow: "2px 2px 10px rgba(185, 168, 168, 0.4)", // Strong shadow for main heading
          }}
        >
          Building India&apos;s First Agnostic Smart Parcel Locker Network
        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-xl text-white tracking-tight mt-4 md:mt-6"
          style={{
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)", // Shadow for description text
          }}
        >
          Designed for businesses, communities, and individuals looking for a
          hassle-free parcel solution.
        </p>
        <a href="#contact">
          <button className="bg-blue-500 text-white px-9 py-2 rounded-lg hover:bg-blue-600">
            Contact Us
          </button>
        </a>
      </div>
    </section>
  );
};
