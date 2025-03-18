"use client";
import React, { useState } from "react";
import Image from "next/image";  // Use Image from next/image
import {
  FaKey,
  FaShieldAlt,
  FaClock,
  FaSun,
  FaUserClock,
  FaBuilding,
} from "react-icons/fa";
import IndoorLocker from "@/assets/indoor_locker2.png";
import OutdoorLocker from "@/assets/outdoor_locker.png";
import type { StaticImageData } from 'next/image';


type ModelType = "indoor" | "outdoor";

interface Feature {
  icon: JSX.Element;
  text: string;
}

interface ModelData {
  quote: string;
  title: string;
  image: StaticImageData;  // Type for imported images
  features: Feature[];
  environments: string[];
  description: string;
}

const LockerModels = () => {
  const [selectedModel, setSelectedModel] = useState<ModelType | null>(null);

  const models: Record<ModelType, ModelData> = {
    indoor: {
      quote:
        "Waiting for a package shouldn’t mean rearranging your entire day. No more asking neighbors for favors or No more leaving parcels with guards.",
      title: "Indoor Smart Parcel Lockers",
      image: IndoorLocker,
      features: [
        { icon: <FaKey />, text: "Secure Access Control" },
        { icon: <FaShieldAlt />, text: "24/7 Surveillance" },
        { icon: <FaClock />, text: "Instant Notifications" },
        { icon: <FaBuilding />, text: "Building Integration" },
      ],
      environments: [
        "Residential Buildings",
        "Corporate Offices",
        "Banks",
        "Hospitals",
        "E-Commerce",
      ],
      description:
        "State-of-the-art indoor parcel lockers designed for convenience and security in controlled environments. Perfect for high-traffic areas with protected settings.",
    },
    outdoor: {
      quote:
        "Out running errands? Stuck in a meeting? Away on vacation ? Your deliveries shouldn’t have to wait for you—or rely on someone else.",
      title: "Outdoor Smart Parcel Lockers",
      image: OutdoorLocker,
      features: [
        { icon: <FaSun />, text: "Weather Resistant" },
        { icon: <FaClock />, text: "Instant Notifications" },
        { icon: <FaUserClock />, text: "24/7 Accessibility" },
      ],
      environments: [
        "Retail stores",
        "Community hubs",
        "Parking lots",
        "University Campuses",
        "E-Commerce",
      ],
      description:
        "Outdoor Smart Parcel Lockers are designed to handle your packages securely and conveniently, no matter where you are. Available 24/7, they ensure your parcels are safe from theft, damage, or prying eyes.",
    },
  };

  const ModelCard = ({ type, data }: { type: ModelType; data: ModelData }) => (
    <div
      className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
        selectedModel === type ? "scale-105" : "hover:scale-102"
      } ${
        type === "indoor"
          ? "bg-gradient-to-br from-blue-50 to-gray-100"
          : "bg-gradient-to-br from-green-50 to-slate-100"
      }`}
      onClick={() => setSelectedModel(type)}
      onKeyDown={(e) => e.key === "Enter" && setSelectedModel(type)}
      tabIndex={0}
      role="button"
      aria-label={`${data.title} details`}
    >
      <div className="relative overflow-hidden rounded-lg mb-6 h-64">
        <Image
          src={data.image}
          alt={data.title}
          layout="fill"
          objectFit="cover"
          className="transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">{data.title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{data.quote}</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {data.features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2 text-gray-700">
            <span
              className={`text-xl ${
                type === "indoor" ? "text-blue-600" : "text-green-600"
              }`}
            >
              {feature.icon}
            </span>
            <span className="text-sm">{feature.text}</span>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-gray-700">Ideal Locations:</h3>
        <div className="flex flex-wrap gap-2">
          {data.environments.map((env, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm ${
                type === "indoor"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {env}
            </span>
          ))}
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">{data.description}</p>
    </div>
  );

  return (
    <div
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      id="models"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Smart Parcel Locker Solutions
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <ModelCard type="indoor" data={models.indoor} />
          <ModelCard type="outdoor" data={models.outdoor} />
        </div>
      </div>
    </div>
  );
};

export default LockerModels;
