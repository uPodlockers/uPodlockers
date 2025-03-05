"use client";

import { useState } from 'react';

export const Products = () => {
  // Single product data for housing societies and residential areas
  const [products] = useState([
    {
      name: "Residential Smart Parcel Locker",
      description: "A secure and compact smart parcel locker designed specifically for housing societies and residential areas.",
      features: ["Contactless access", "Customizable sizes", "Energy-efficient"],
    },
  ]);

  return (
    <section id="products" className="bg-white py-12 px-4 md:px-16 lg:px-32">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <h2 className="text-5xl font-bold tracking-tight text-center text-[#010D3E] mb-8">
          Our Product
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Discover our smart parcel locker, designed for secure and efficient delivery in residential areas.
        </p>

        {/* Product Display */}
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
