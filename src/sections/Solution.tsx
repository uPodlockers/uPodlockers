"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png"; // Add more avatars as needed
import avatar4 from "@/assets/avatar-4.png"; // Add more avatars as needed
import avatar5 from "@/assets/avatar-5.png"; // Add more avatars as needed
import avatar6 from "@/assets/avatar-6.png"; // Add more avatars as needed
import Image from "next/image";
import { motion } from "framer-motion";

const solutions = [
  {
    text: "Stress-free package delivery",
    imageSrc: avatar2.src,
    name: "Residential Settings",
    avatarImg: avatar2,
  },
  {
    text: "Secure and reliable package reception",
    imageSrc: avatar1.src,
    name: "Universities",
    avatarImg: avatar1,
  },
  {
    text: "Streamlined package management for employees",
    imageSrc: avatar3.src,
    name: "Corporate Offices",
    avatarImg: avatar3,
  },
  {
    text: "Efficient in-store pickup and returns",
    imageSrc: avatar4.src,
    name: "Retail Stores",
    avatarImg: avatar4,
  },
  {
    text: "Seamless order fulfillment and returns",
    imageSrc: avatar5.src,
    name: "E-commerce Solutions",
    avatarImg: avatar5,
  },
  {
    text: "Hassle-free parcel collection at events",
    imageSrc: avatar6.src,
    name: "Events & Festivals",
    avatarImg: avatar6,
  },
];

export const SolutionComponent = () => {
  return (
    <section id="solutions" className="py-10 md:py-12">
        <h2 className="text-5xl font-bold tracking-tight text-[#010D3E] text-center mb-8">
          Solutions
        </h2>
      <div className="container">
        {/* <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-bold text-[#010D3E]">Solutions</h2> */}
        <p className="text-black text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
          Here we present possible use cases of our smart parcel lockers.
        </p>
        <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_80%,transparent)]">
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0",
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 15, // Set a fixed duration for the animation
            }}
            className="flex gap-5 flex-none"
          >
            {[...solutions, ...solutions].map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-black/1 p-6 md:p-10 rounded-xl max-w-xs md:max-w-md flex-none relative"
                style={{
                  backgroundImage: `url(${testimonial.avatarImg.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "#fff",
                  height: "300px", // Adjust the height as needed
                  width: "250px", // Set a fixed width for images
                }}
              >
                <div className="absolute inset-0 bg-[rgba(140,69,244,0.75)] mix-blend-soft-light rounded-xl" />
                <div className="relative z-10 flex flex-col justify-center h-full">
                  <h3 className="text-2xl font-semibold" style={{
                      textShadow: '0 0 10px rgba(0, 0, 0, 0.9)', // Adds a shadow effect for contrast
                      color: '#fff' // White color for text
                    }}>
                    {testimonial.name}
                  </h3>
                  <div className="mt-4 text-lg tracking-tight" style={{
                      textShadow: '0 0 10px rgba(0, 0, 0, 0.9)', // Adds a shadow effect for contrast
                      color: '#fff' // White color for text
                    }}>
                    {testimonial.text}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
