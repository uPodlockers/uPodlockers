"use client";

import { useState } from 'react';

export const Products = () => {
  // Placeholder product data
  const [products] = useState([
    {
      name: "Smart Parcel Locker Model A",
      description: "An innovative solution for secure and efficient parcel delivery.",
      features: ["Contactless access", "Real-time notifications", "Weatherproof design"],
    },
    {
      name: "Smart Parcel Locker Model B",
      description: "A compact design suitable for residential areas.",
      features: ["Mobile app integration", "Customizable sizes", "Energy-efficient"],
    },
    {
      name: "Smart Parcel Locker Model C",
      description: "Designed for businesses with high delivery volumes.",
      features: ["High capacity", "Advanced security features", "Robust construction"],
    },
  ]);

  return (
    <section id="products" className="min-h-screen bg-white py-12 px-4 md:px-16 lg:px-32">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <h2 className="text-5xl font-bold tracking-tight text-center text-[#010D3E] mb-8">
          Our Products
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Discover our range of smart parcel lockers designed to meet your delivery needs.
        </p>

        {/* Product List */}
        <div className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-[#010D3E]">{product.name}</h3>
              <p className="text-gray-700 mt-2">{product.description}</p>
              <ul className="list-disc list-inside mt-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
