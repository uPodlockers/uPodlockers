"use client";
import React, { useEffect, useState } from "react";
import { FaGavel, FaPrint, FaClipboard } from "react-icons/fa";
import parse from "html-react-parser";

const TermsOfUse = () => {
  const terms = [
    {
      title: "Eligibility & Acceptance",
      description:
        "If you access the Website or lockers on behalf of a company or organization, you represent that you have the authority to bind them to these terms",
    },
    {
      title: "Use of Services",
      description: `You agree NOT to:- Misuse our lockers (e.g., store illegal, dangerous, or prohibited items).
      <ul style="list-style-type:none;">
          <li>- Tamper with or damage our lockers.</li>
          <li>- Attempt unauthorized access to any locker.</li>
          <li>- Use the Website for fraudulent or illegal activities</li>
      </ul>
      We reserve the right to suspend or terminate access to users violating these rules.`,
    },
    {
      title: "Parcel Responsibility & Liability",
      description: `We are NOT responsible for:
        <ul style="list-style-type:none;">
            <li>- Lost, stolen, or damaged parcels once they are deposited in or retrieved from the 
            locker.  </li>
            <li>- Delayed deliveries by courier services.</li>               
            <li>- Items stored beyond the designated pick-up time.</li>
        We will provide any available evidence (such as locker access logs) to assist in 
        investigations, but we assume no liability for missing or damaged items</ul>`,
    },
    {
      title: "Account Registration & Security",
      description: `
        Some features may require you to register an account. You are responsible for:
        <ul style="list-style-type:none;">
          <li>- Providing accurate information.</li>
          <li>- Keeping your login credentials secure.</li>
          <li>- Any activities under your account.</li>
        </ul>
        We reserve the right to disable accounts found engaging in suspicious activities
      `,
    },
    {
      title: "Payments & Fees (If Applicable)",
      description:
        "Users must pay applicable fees for locker usage as per the selected plan. Failure to make payments may result in account suspension. Fees are non-refundable unless explicitly stated",
    },
    {
      title: "Intellectual Property Rights",
      description:
        "All content on our Website, including text, graphics, logos, and software, is owned or licensed by Edelbox Solutions Pvt Ltd. <br>Users may not copy, modify, distribute, or commercially exploit any content without written permission",
    },
    {
      title: "Disclaimer of Warranties",
      description:
        "Our Website and lockers are provided “as is” and “as available” without warranties of any kind. We do not guarantee uninterrupted or error-free services. <br>We disclaim all warranties, including merchantability, fitness for a particular purpose, and non-infringement to the fullest extent allowed by law.",
    },
    {
      title: "Limitation of Liability",
      description: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE WILL NOT BE LIABLE FOR: <br>
        <ul style="list-style-type:none;">
          <li>Any direct, indirect, incidental, special, or consequential damages arising from the use of our services.</li>  
          <li>Loss of data, parcels, revenue, or business opportunities.</li> 
          <li>Our total liability, if any, shall not exceed the amount paid by you for locker usage 
          in the last 3 months.</li>
        </ul>`,
    },
    {
      title: "Indemnification",
      description: `You agree to defend, indemnify, and hold us harmless from any claims, damages, or expenses arising from:
       <ul style="list-style-type:none;">
          <li>Your use of the Website or lockers.</li>
          <li>Your violation of these Terms.</li>
          <li>Any dispute with third parties (e.g., couriers, delivery services).</li>
        </ul>`,
    },
    {
      title: "Termination of Services",
      description: `We may suspend or terminate your access to our Website or lockers at any time if:
         <ul style="list-style-type:none;">
          <li>You violate these Terms.</li>
          <li>We discontinue our services.</li>
          <li>We suspect fraudulent or illegal activities.</li>
          <li>No refunds will be issued upon termination due to a policy violation.</li>
        </ul>`,
    },
    {
      title: "Contact Us",
      description: `For any queries or concerns regarding this Privacy Policy or your data, please contact us at info@upodlockers.com",`,
    },
  ];
  const [termsContent, setTermsContent] = useState("");

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    const content = document.getElementById("terms-content")?.innerText;
    if (content) {
      setTermsContent(content);
    }
  }, []);

  const handleCopyToClipboard = () => {
    if (termsContent) {
      navigator.clipboard.writeText(termsContent);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <FaGavel className="text-gray-600 text-3xl mr-4" />
            <h1 className="text-3xl font-bold text-gray-800">Terms of Use</h1>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handlePrint}
              className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              aria-label="Print terms"
            >
              <FaPrint className="mr-2" /> Print
            </button>
            <button
              onClick={handleCopyToClipboard}
              className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              aria-label="Copy to clipboard"
            >
              <FaClipboard className="mr-2" /> Copy
            </button>
          </div>
        </div>

        <div id="terms-content" className="space-y-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to Edelbox Solutions Pvt Ltd (“Company,” “we,” “us,” or
            “our”). These Terms of Use govern your use of our website
            www.upodlockers.com & our smart parcel locker services. By accessing
            or using our Website and services, you agree to comply with these
            terms. If you do not agree, please do not use our services
          </p>

          <div className="space-y-6">
            {terms.map((term, index) => (
              <div
                key={index}
                className="flex flex-col group p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  {index + 1}. {term.title}
                </h3>
                <div className="text-gray-700 leading-relaxed">
                  {parse(term.description)}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              If you have any questions about these Terms of Use, please contact
              us.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
