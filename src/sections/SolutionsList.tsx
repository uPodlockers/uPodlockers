"use client";
import React, { memo } from "react";
import { FaCheckCircle } from "react-icons/fa";

const sectorData = {
  universities: {
    title: "Higher Education Solutions",
    quote: "Transforming campus management through innovative digital solutions",
    description: "Comprehensive digital infrastructure for modern educational institutions, streamlining administrative processes and enhancing student experiences.",
    benefits: [
      "Streamlined admission process",
      "Digital resource management",
      "Enhanced student engagement",
      "Automated scheduling system"
    ],
    epilogue: "Empower your institution with next-generation education technology",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    bgColor: "bg-blue-50",
    accentColor: "text-blue-600"
  },
  offices: {
    title: "Corporate Office Solutions",
    quote: "Modernizing workspaces for maximum productivity",
    description: "State-of-the-art office management solutions designed to optimize workflow and enhance collaboration.",
    benefits: [
      "Smart workspace management",
      "Meeting room scheduling",
      "Visitor management system",
      "Resource optimization"
    ],
    epilogue: "Transform your office into a hub of efficiency",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    bgColor: "bg-gray-50",
    accentColor: "text-gray-600"
  },
  hospitals: {
    title: "Healthcare Management Solutions",
    quote: "Optimizing patient care through digital innovation",
    description: "Advanced healthcare management systems for improved patient care and streamlined operations.",
    benefits: [
      "Electronic health records",
      "Patient scheduling system",
      "Inventory management",
      "Staff coordination"
    ],
    epilogue: "Elevate your healthcare services with digital excellence",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
    bgColor: "bg-green-50",
    accentColor: "text-green-600"
  },
  residents: {
    title: "Residential Community Solutions",
    quote: "Creating connected and secure living spaces",
    description: "Smart residential management solutions for modern community living and enhanced security.",
    benefits: [
      "Visitor management",
      "Maintenance tracking",
      "Community engagement",
      "Security systems"
    ],
    epilogue: "Build stronger communities with smart solutions",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    bgColor: "bg-yellow-50",
    accentColor: "text-yellow-600"
  },
  ecommerce: {
    title: "E-commerce Platform Solutions",
    quote: "Powering digital retail success",
    description: "Comprehensive e-commerce solutions for businesses looking to thrive in the digital marketplace.",
    benefits: [
      "Inventory management",
      "Order processing",
      "Customer analytics",
      "Payment integration"
    ],
    epilogue: "Scale your online business with powerful tools",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    bgColor: "bg-purple-50",
    accentColor: "text-purple-600"
  },
  banks: {
    title: "Banking Solutions",
    quote: "Securing financial operations with cutting-edge technology",
    description: "Advanced banking solutions for secure transactions and efficient customer service.",
    benefits: [
      "Secure transactions",
      "Customer management",
      "Regulatory compliance",
      "Risk management"
    ],
    epilogue: "Transform banking operations with digital innovation",
    image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4",
    bgColor: "bg-red-50",
    accentColor: "text-red-600"
  }
};

const SolutionCard = memo(({ sector = "universities", id="universities" }) => {
  const data = sectorData[sector] || sectorData.universities;

  return (
    <div id={id} className="mx-4 my-8 md:mx-8 lg:mx-12">
      <div className={`w-full max-w-7xl mx-auto p-6 rounded-xl shadow-lg ${data.bgColor} transition-all duration-300 hover:shadow-xl`} role="article">
        <div className="space-y-6">
          <header className="flex items-start justify-between gap-4">
            <div>
              <h2 className={`text-3xl font-bold ${data.accentColor} mb-2`}>{data.title}</h2>
              <p className="text-lg italic text-gray-600 font-medium">"{data.quote}"</p>
            </div>
            <img 
              src={data.image} 
              alt={`${sector} solution illustration`}
              className="w-24 h-24 rounded-lg object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa";
              }}
            />
          </header>

          <div className="prose">
            <p className="text-gray-700 leading-relaxed">{data.description}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-800">Key Benefits</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.benefits.map((benefit, index) => (
                <li 
                  key={index}
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <FaCheckCircle className={`flex-shrink-0 ${data.accentColor}`} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <footer className="border-t pt-4">
            <p className="text-sm text-gray-600 italic">{data.epilogue}</p>
          </footer>
        </div>
      </div>
    </div>
  );
});

SolutionCard.displayName = "SolutionCard";

export default SolutionCard;