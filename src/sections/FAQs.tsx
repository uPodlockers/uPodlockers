
"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import LockerMan from "@/assets/locker_faqs.jpg";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How do I get started with your service?",
      answer: "Getting started is easy! Simply create an account, complete your profile, and you'll have immediate access to all our features. Our onboarding process guides you through each step."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment system."
    },
    {
      question: "Can I upgrade or downgrade my subscription?",
      answer: "Yes, you can modify your subscription at any time. Changes will take effect at the start of your next billing cycle. There are no penalties for changing your plan."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee on all our services. If you're not satisfied, contact our support team within 30 days of purchase for a full refund."
    },
    {
      question: "How can I contact customer support?",
      answer: "Our customer support team is available 24/7 via email, live chat, or phone. Premium members get priority support with guaranteed response times."
    },
    {
      question: "Is my data secure with your service?",
      answer: "Yes, we use industry-standard encryption and security protocols to protect your data. All information is stored in secure, encrypted databases with regular backups."
    },
    {
      question: "Do you offer team or enterprise solutions?",
      answer: "Yes, we provide customized enterprise solutions with additional features, dedicated support, and flexible pricing options for teams of all sizes."
    },
    {
      question: "What happens to my data if I cancel my subscription?",
      answer: "You'll have 30 days to download your data after cancellation. After this period, your data will be permanently deleted from our servers."
    },
    {
      question: "Can I try the service before committing?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial."
    },
    {
      question: "Do you provide training or onboarding support?",
      answer: "Yes, we offer comprehensive documentation, video tutorials, and personalized onboarding sessions for new users. Enterprise clients receive dedicated training support."
    }
  ];

  const toggleAccordion = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600">Find answers to common questions about our services</p>
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
                  <span className="font-medium text-gray-900">{faq.question}</span>
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