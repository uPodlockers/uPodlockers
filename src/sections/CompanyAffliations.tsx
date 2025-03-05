"use client";
import React, { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";

const affiliations = [
  {
    id: 1,
    name: "Startup India",
    logo: "https://images.unsplash.com/photo-1551651653-c5186a1fbba2",
    websiteUrl: "https://www.startupindia.gov.in",
    description: "Government of India's flagship initiative",
    year: 2023,
  },
  {
    id: 4,
    name: "India Accelerator",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    websiteUrl: "https://indiaaccelerator.co",
    description: "Startup Acceleration Program",
    year: 2023,
  },
  {
    id: 5,
    name: "Digital India",
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    websiteUrl: "https://www.digitalindia.gov.in",
    description: "Digital Transformation Initiative",
    year: 2022,
  }
];

const AffiliationCard = ({ affiliation }) => {
  const [imgSrc, setImgSrc] = useState(affiliation.logo);

  const handleImageError = () => {
    setImgSrc("https://images.unsplash.com/photo-1572177812156-58036aae439c");
  };

  const handleClick = () => {
    window.open(affiliation.websiteUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      <div className="relative h-48 w-full">
        <img
          src={imgSrc}
          alt={`${affiliation.name} logo`}
          onError={handleImageError}
          className="w-full h-full object-cover transition-opacity duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">
            {affiliation.name}
          </h3>
          <FiExternalLink className="text-blue-600 h-5 w-5" />
        </div>
        <p className="mt-2 text-sm text-gray-600">{affiliation.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-medium text-gray-500">
            Since {affiliation.year}
          </span>
        </div>
      </div>
    </div>
  );
};

const CompanyAffiliations = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Organisations we are affiliated to
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
        {affiliations.map((affiliation) => (
          <AffiliationCard key={affiliation.id} affiliation={affiliation} />
        ))}
      </div>
    </div>
  );
};

export default CompanyAffiliations;
