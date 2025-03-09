"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: "Corporate Parcel Management Solution for Fortune 500",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088",
      description: "Implemented an enterprise-level smart locker system across 50 corporate offices, reducing package handling time by 75% and improving security protocols. The solution integrated with existing building management systems and provided real-time tracking capabilities.",
      fullDescription: "Complete end-to-end implementation of smart locker systems across multiple corporate locations, featuring biometric authentication, AI-powered sorting, and predictive analytics for capacity management."
    },
    {
      id: 2,
      title: "University Campus Package Distribution Network",
      image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3",
      description: "Revolutionized package delivery for 25,000 students across 5 campus locations using smart lockers. Reduced wait times by 90% and eliminated lost packages through automated notification system.",
      fullDescription: "Comprehensive campus-wide deployment of intelligent locker systems with mobile app integration, contactless pickup, and advanced security features."
    },
    {
      id: 3,
      title: "Residential Complex Smart Locker Integration",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      description: "Designed and deployed a network of smart lockers across 15 luxury residential complexes, serving 5000+ residents. Implemented 24/7 access with facial recognition and mobile app control.",
      fullDescription: "State-of-the-art residential package management solution featuring climate-controlled lockers, oversized item handling, and seamless property management integration."
    },
    {
      id: 4,
      title: "Retail Click & Collect Innovation",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0",
      description: "Transformed click & collect experience for major retail chain with 100+ locations. Reduced pickup time to under 60 seconds and increased customer satisfaction by 95%.",
      fullDescription: "Revolutionary retail pickup solution combining smart lockers with inventory management and customer analytics."
    },
    {
      id: 5,
      title: "Airport Luggage Storage Revolution",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
      description: "Modernized luggage storage at international airport handling 50M+ passengers annually. Implemented AI-powered space optimization and blockchain-based security system.",
      fullDescription: "Next-generation airport storage solution with advanced security features, dynamic pricing, and seamless integration with flight information systems."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600">Discover what is happening in the world of locker solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="relative">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {study.description}
                </p>
                <button
                  onClick={() => setSelectedCase(study)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  Read More <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedCase && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedCase.title}</h2>
                <p className="text-gray-600 mb-6">{selectedCase.fullDescription}</p>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudies;