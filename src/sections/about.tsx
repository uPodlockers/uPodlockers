"use client";
import customizable from "@/assets/customizable_1.png";
import twofour from "@/assets/twofour.png";
import notification from "@/assets/notification.png";
import security from "@/assets/security.png";
import intuitive from "@/assets/intuitive.png";

export const About = () => {
  return (
    <section className="py-12 px-4 md:px-16 lg:px-32 bg-white">
       <h2 className="text-5xl font-bold tracking-tight text-[#010D3E] text-center mb-8">
          What We Solve ?
        </h2>
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#010D3E] mb-4">
          Drop | Store | Pickup : Simplified.
        </h1>
        <p className="text-lg text-gray-800">
          uPOD smart parcels lockers that work for you, wherever you are - ensuring secure, contactless deliveries and pickup of your parcels, no matter your schedule.
        </p>
      </div>

      {/* Subtitle */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#010D3E]">
          Simplifying Last Mile Deliveries
        </h2>
      </div>

      {/* Four Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Box 1 */}
        <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-50">
          <img
            src={twofour.src} // Replace with your image path
            alt="24*7 Access"
            className="w-12 h-12 mb-4"
          />
          <h3 className="text-l font-semibold text-[#010D3E] text-center">24*7 Access</h3>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-50">
          <img
            src={customizable.src} // Correct usage for Next.js images
            alt="Customizable Locker Sizes"
            className="w-12 h-12 mb-4"
          />
          <h3 className="text-l font-semibold text-[#010D3E] text-center">Customizable Locker Sizes</h3>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-50">
          <img
            src={intuitive.src} // Replace with your image path
            alt="Simple and Intuitive"
            className="w-12 h-12 mb-4"
          />
          <h3 className="text-l font-semibold text-[#010D3E] text-center">Simple and Intuitive</h3>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-50">
          <img
            src={security.src} // Replace with your image path
            alt="Storage Security"
            className="w-12 h-12 mb-4"
          />
          <h3 className="text-l font-semibold text-[#010D3E] text-center">Storage Security</h3>
        </div>
      </div>
    </section>
  );
};
