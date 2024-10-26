// Careers.tsx

"use client";

import { useState } from 'react';

export const Careers = () => {
  // This can hold available job positions; for now, we're using placeholder data.
  const [positions] = useState([
    {
      title: "Jr. Software Engineer",
      description:
        "Join our backend team and help build scalable systems for our smart parcel lockers.",
      location: "Remote / India",
      type: "Full-Time",
    },
  ]);

  return (
    <section id="careers" className="min-h-[60vh] bg-white py-8 px-4 md:px-16 lg:px-32"> {/* Adjusted min-h and padding */}
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <h2 className="text-5xl font-bold tracking-tight text-center text-[#010D3E] mb-8">
          Careers at uPOD
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          We&aposre building the future of parcel delivery. Join us on this journey. Email us your interest at info@upodlockers.com.
        </p>

        {/* Job Positions List */}
        <div className="space-y-8">
          {positions.map((position, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-[#010D3E]">{position.title}</h3>
              <p className="text-gray-700 mt-2">{position.description}</p>
              <p className="text-sm text-gray-500 mt-4">
                <strong>Location:</strong> {position.location} | <strong>Type:</strong> {position.type}
              </p>
            </div>
          ))}
        </div>

        {/* Placeholder for More Positions */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 font-medium">
            More positions coming soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Careers;
