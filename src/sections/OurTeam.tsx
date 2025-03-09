"use client";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const ExecutivesTeam = () => {
  const [selectedExecutive, setSelectedExecutive] = useState(null);

  const executives = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      biography: "Over 20 years of experience in technology leadership, driving innovation and sustainable growth across global markets.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
      linkedInUrl: "https://linkedin.com/in/sarah-johnson"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Chief Technology Officer",
      biography: "Pioneering technological advancement with expertise in AI and cloud architecture, leading teams to deliver cutting-edge solutions.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      linkedInUrl: "https://linkedin.com/in/michael-chen"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      position: "Chief Operations Officer",
      biography: "Strategic leader with proven track record in operational excellence and business transformation across multiple industries.",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
      linkedInUrl: "https://linkedin.com/in/elena-rodriguez"
    },
    {
      id: 4,
      name: "James Wilson",
      position: "Chief Financial Officer",
      biography: "Expert in financial strategy and corporate development with experience in managing global financial operations.",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3",
      linkedInUrl: "https://linkedin.com/in/james-wilson"
    },
    {
      id: 5,
      name: "Amanda Park",
      position: "Chief Marketing Officer",
      biography: "Digital marketing innovator with a passion for building strong brands and driving market expansion strategies.",
      imageUrl: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3",
      linkedInUrl: "https://linkedin.com/in/amanda-park"
    },
    {
      id: 6,
      name: "David Thompson",
      position: "Chief Product Officer",
      biography: "Product visionary focused on user-centric design and agile development methodologies.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      linkedInUrl: "https://linkedin.com/in/david-thompson"
    }
  ];

  const Modal = ({ executive, onClose }) => (
    <div id="team" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full mx-4">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={executive.imageUrl}
              alt={executive.name}
              className="w-24 h-24 rounded-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3";
              }}
            />
            <div>
              <h2 className="text-2xl font-bold">{executive.name}</h2>
              <p className="text-blue-600">{executive.position}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        <p className="text-gray-600 mb-6">{executive.biography}</p>
        <a
          href={executive.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin className="text-xl" />
          <span>Connect on LinkedIn</span>
        </a>
      </div>
    </div>
  );

  return (
    <div id="team" className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Leadership Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated visionaries working together to drive innovation and excellence
            across our organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executives.map((executive) => (
            <div
              key={executive.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => setSelectedExecutive(executive)}
            >
              <div className="p-6">
                <div className="mb-4">
                  <img
                    src={executive.imageUrl}
                    alt={executive.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3";
                    }}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {executive.name}
                  </h3>
                  <p className="text-blue-600 mb-2">{executive.position}</p>
                  <p className="text-gray-600 text-sm mb-4">
                    {executive.biography}
                  </p>
                  <a
                    href={executive.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaLinkedin className="text-xl" />
                    <span>Connect</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedExecutive && (
        <Modal
          executive={selectedExecutive}
          onClose={() => setSelectedExecutive(null)}
        />
      )}
    </div>
  );
};

export default ExecutivesTeam;