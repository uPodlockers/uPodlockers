"use client";
import React, { memo } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface SectorData {
  title: string;
  quote: string;
  description: string;
  benefits: string[];
  epilogue: string;
  image: string;
  bgColor: string;
  accentColor: string;
}

interface SolutionCardProps {
  sector: string;
  id: string;
}

const sectorData: Record<string, SectorData> = {
  universities: {
    title: "Smart Parcel Lockers for Universities",
    quote:
      "Why leave class or rush out of the library to collect a package ? With smart parcel lockers, you don’t have to.",
    description:
      "Placed conveniently outside hostels, libraries, or key campus spots, these lockers allow students to focus on what matters—studying, attending lectures, or enjoying campus life—while their parcels are safely delivered and stored.",
    benefits: [
      "No disruption to students’ schedules.",
      "Secure storage for packages until students are ready to collect.",
      "Reduces package handling chaos in hostels or mailrooms.",
      "Perfect for 24/7 accessibility, no matter how busy student life gets.",
    ],
    epilogue:
      "Let students prioritize their education while we handle their deliveries.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    bgColor: "bg-blue-50",
    accentColor: "text-blue-600",
  },
  offices: {
    title: "Smart Parcel Lockers for Offices",
    quote:
      "Say goodbye to missed parcels and delivery disruptions during office hours.",
    description:
      "Office smart parcel lockers provide a secure, convenient solution for receiving, storing, and managing packages—whether it's business supplies, employee deliveries, or asset transfers. With 24/7 access, employees can pick up their parcels whenever it suits them, without interrupting their workday.",
    benefits: [
      "Secure handling of business-critical items and documents.",
      "Efficient asset transfer management: Easily store and track company assets with controlled access.",
      "No package pile-ups or interruptions: Employees stay focused and productive, and office managers don’t have to worry about coordinating handoffs.",
    ],
    epilogue:
      "Upgrade your office with a smarter, more organized approach to parcel management and asset transfers.",
    image:
      "https://plus.unsplash.com/premium_photo-1670315264879-59cc6b15db5f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-gray-50",
    accentColor: "text-gray-600",
  },
  hospitals: {
    title: "Hospitals: Secure, Efficient, and Contactless Deliveries",
    quote: "In a fast-paced environment like a hospital, every second counts.",
    description:
      "Smart parcel lockers provide a streamlined solution for handling deliveries, medical supplies, and internal asset transfers. With contactless, secure storage, these lockers reduce manual coordination and ensure critical items are always accessible when needed.",
    benefits: [
      "Efficient handling of medical supplies: Securely store and distribute equipment, documents, and pharmaceuticals.",
      "Reduce disruptions: Deliveries can be dropped off and picked up without interrupting medical staff or patient care.",
      "Improved internal transfers: Easily manage the movement of assets like lab samples, reports, or uniforms between departments.",
      "24/7 accessibility: Critical deliveries are available anytime, ensuring smooth operations around the clock.",
      "Enhanced safety and hygiene: Contactless handling minimizes risks in sensitive healthcare settings.",
    ],
    epilogue:
      "A smarter, faster, and more reliable way to manage deliveries in hospitals, so healthcare professionals can focus on saving lives.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
    bgColor: "bg-green-50",
    accentColor: "text-green-600",
  },
  residents: {
    title: "Residential Community Solutions",
    quote: "Missed deliveries? Awkward favors from neighbors ? Not anymore.",
    description:
      "With Residential Smart Parcel Lockers, your packages are delivered securely—no matter where you are. Whether you’re at work, out with friends, or simply relaxing, these lockers ensure your parcels are safe, private, and ready for pickup whenever it suits you.",
    benefits: [
      "No interruptions to your day.",
      "No strangers knocking on your door.",
      "No more missed deliveries or misplaced packages.",
    ],
    epilogue:
      "Because home should feel effortless—even when it comes to deliveries.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    bgColor: "bg-yellow-50",
    accentColor: "text-yellow-600",
  },
  ecommerce: {
    title: "E-Commerce: Revolutionizing Last-Mile Delivery",
    quote: "Missed deliveries and customer frustration? Not anymore.",
    description:
      "Smart parcel lockers are a game-changer for e-commerce companies, ensuring secure, reliable, and efficient deliveries while transforming the last-mile experience. These lockers provide a consolidated, contactless solution for package drop-offs, reducing failed deliveries and improving customer satisfaction.",
    benefits: [
      "Reduce failed deliveries: Packages are securely stored, ready for pickup at the customer’s convenience.",
      "Streamlined last-mile delivery: Drivers can consolidate multiple deliveries in a single trip, saving time and costs.",
      "Improved operational efficiency: Fewer delivery attempts mean lower costs and faster order fulfillment.",
      "Enhanced customer experience: Buyers enjoy hassle-free, secure pickup with real-time notifications.",
    ],
    epilogue:
      "Deliver smarter, faster, and better—elevate your logistics with smart parcel lockers.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    bgColor: "bg-purple-50",
    accentColor: "text-purple-600",
  },
  banks: {
    title: "Secure, Convenient, and Efficient Banking Solution",
    quote:
      "Why deal with manual parcel handoffs when you can have a smarter, more secure solution?",
    description:
      "Bank smart parcel lockers offer a safe, contactless way to manage deliveries for customers and staff—without disrupting your operations. Whether it's secure documents, business supplies, or customer packages, these lockers streamline the process, providing 24/7 access with enhanced security.",
    benefits: [
      "Maximized security for sensitive items and documents.",
      "No waiting in line—customers and staff can pick up parcels on their schedule.",
      "Increased efficiency—reduce manual handling and paperwork.",
    ],
    epilogue:
      "A smart, seamless solution that fits perfectly into the modern banking experience.",
    image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4",
    bgColor: "bg-red-50",
    accentColor: "text-red-600",
  },
};
const SolutionCard: React.FC<SolutionCardProps> = memo(
  ({ sector = "universities", id = "universities" }) => {
    const data = sectorData[sector] || sectorData.universities;

    return (
      <div id={id} className="mx-4 my-8 md:mx-8 lg:mx-12">
        <div
          className={`w-full max-w-7xl mx-auto p-6 rounded-xl shadow-lg ${data.bgColor} transition-all duration-300 hover:shadow-xl flex`}
          role="article"
        >
          {/* Left Image Section */}
          <div className="w-1/3 flex items-center justify-center p-4">
            <img
              src={data.image}
              alt={`${sector} solution illustration`}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa";
              }}
            />
          </div>

          {/* Right Content Section */}
          <div className="w-2/3 p-4 space-y-6">
            <header>
              <h2 className={`text-3xl font-bold ${data.accentColor} mb-2`}>
                {data.title}
              </h2>
              <p className="text-lg italic text-gray-600 font-medium">
                {data.quote}
              </p>
            </header>

            <div className="prose">
              <p className="text-gray-700 leading-relaxed">
                {data.description}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">
                Key Benefits
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.benefits.map((benefit: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  >
                    <FaCheckCircle
                      className={`flex-shrink-0 ${data.accentColor}`}
                    />
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
  }
);

SolutionCard.displayName = "SolutionCard";

export default SolutionCard;
