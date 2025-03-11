"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import LockerMan from "@/assets/locker_faqs.jpg";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How do smart parcel lockers work?",
      answer:
        "Once a package is delivered, the sender or delivery person places it in a locker. The recipient gets an instant notification with a QR or OTP to retrieve the package.",
    },
    {
      question: "Who can use smart parcel lockers?",
      answer:
        "Anyone! Residents, businesses, and delivery personnel can use these lockers for secure and hassle-free parcel management.",
    },
    {
      question: "Are smart parcel lockers secure?",
      answer:
        "Yes, they are highly secure. Access is granted only through unique codes or OTPs, ensuring that only authorized individuals can retrieve the packages.",
    },

    {
      question: "Can I use the locker if I’m not home?",
      answer:
        "Absolutely! The lockers are designed to store packages safely until you're ready to pick them up, even if you’re away.",
    },
    {
      question: "What types of parcels can be stored?",
      answer:
        "Smart lockers are designed to accommodate parcels of various sizes, from small packages to larger items.",
    },
    {
      question: "Can delivery services use these lockers?",
      answer:
        "Yes! Delivery personnel can securely deposit packages into the lockers, ensuring smooth and safe handoffs..",
    },
    {
      question: "What happens if I lose my OTP or access code?",
      answer:
        "Don’t worry—our support team is here to help you regain access securely.",
    },
    {
      question: "Where can these lockers be installed?",
      answer:
        "Smart parcel lockers can be installed at residential complexes, offices, gyms, retail spaces, or any location where secure parcel handling is needed.",
    },
    {
      question: "Can I try the service before committing?",
      answer:
        "Yes, we currently offer a 3-month free trial with full access to all features. No payment is required to start your trial.",
    },
    {
      question: "Do you provide training or onboarding support?",
      answer:
        "Yes, we offer comprehensive documentation, video tutorials, and personalized onboarding sessions for new enterprise clients. We also provide training staff for in-person support for the duration of the trial.",
    },
  ];

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50"
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {activeIndex === index ? (
                    <FiChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <FiChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`px-6 py-4 bg-gray-50 transition-all duration-300 ${
                    activeIndex === index ? "block" : "hidden"
                  }`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-[700px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={LockerMan.src}
              alt="Person using UPOD"
              className="object-cover w-full h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
