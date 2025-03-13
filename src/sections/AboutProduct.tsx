"use client";

import React from "react";
import {
  FaTruck,
  FaMobile,
  FaLock,
  FaCheckCircle,
  FaShieldAlt,
  FaThumbsUp,
  FaMobileAlt,
  FaClock,
  FaWarehouse,
} from "react-icons/fa";
import EasyDrop from "@/assets/easy drop.png";
import EasyPickup from "@/assets/easy pickup.png";
import Notified from "@/assets/notfication received.png";

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Courier Drops the Parcel",
      description:
        "The delivery agent places the package in an available locker",
      // icon: <FaTruck className="text-4xl text-black-600 group-hover:text-blue-700" />
      icon: (
        <img
          src={EasyDrop.src}
          alt="Person using UPOD"
          className="object-cover w-full h-full"
          loading="lazy"
        />
      ),
    },
    {
      number: 2,
      title: "Instant Notification",
      description: "The recipient gets an OTP via SMS for secure access",
      // icon: <FaMobile className="text-4xl text-black-600 group-hover:text-blue-700" />
      icon: (
        <img
          src={Notified.src}
          alt="Person using UPOD"
          className="object-cover w-full h-full"
          loading="lazy"
        />
      ),
    },
    {
      number: 3,
      title: "Easy Pickup",
      description:
        "Enter the OTP, unlock the locker, and collect the parcel—anytime!",
      // icon: <FaCheckCircle className="text-4xl text-black-600 group-hover:text-blue-700" />
      icon: (
        <img
          src={EasyPickup.src}
          alt="Person using UPOD"
          className="object-cover w-full h-full"
          loading="lazy"
        />
      ),
    },
  ];

  return (
    <section id="how_it_works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          How It Works?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.number}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUsSection = () => {
  const features = [
    {
      title: "Smart, Secure and Seamless",
      icon: (
        <FaShieldAlt className="text-4xl text-black-600 group-hover:text-blue-700" />
      ),
    },
    {
      title: "Easy to Use",
      icon: (
        <FaThumbsUp className="text-4xl text-black-600 group-hover:text-blue-700" />
      ),
    },
    {
      title: "No Apps Required",
      icon: (
        <FaMobileAlt className="text-4xl text-black-600 group-hover:text-blue-700" />
      ),
    },
    {
      title: "24/7 Convenience",
      icon: (
        <FaClock className="text-4xl text-black-600 group-hover:text-blue-700" />
      ),
    },
    {
      title: "Indoor Outdoor Solutions",
      icon: (
        <FaWarehouse className="text-4xl text-black-600 group-hover:text-blue-700" />
      ),
    },
  ];

  return (
    <section id="why_us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Why UPOD?
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductInfo = () => {
  return (
    <div className="rid grid-cols-1 md:grid-cols-6 gap-6 max-w-8xl mx-6">
      <HowItWorksSection />
      <WhyUsSection />
    </div>
  );
};

export default ProductInfo;
