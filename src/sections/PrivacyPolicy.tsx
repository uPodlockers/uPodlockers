"use client";
import React, { useEffect, useState } from "react";
import { FaGavel, FaPrint, FaClipboard } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import parse from "html-react-parser";

const PrivacyPolicy = () => {
  const policies = [
    {
      title: "Cookies",
      description:
        "Are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses",
    },
    {
      title: "Why Information is Collected",
      description: `We may use your information for the following purposes:
      <ul style="list-style-type:disc;">
          <li>To provide, operate, and improve our services.</li>
          <li>To facilitate secure parcel drop-offs and pickups.</li>
          <li>To communicate important updates or service notifications.</li>
          <li>To enhance user experience and service efficiency.</li>
          <li>To comply with legal obligations and prevent fraudulent activities.</li>
      </ul>.`,
    },
    {
      title: "Information We Collect",
      description: `We may collect and process the following types of information:
        <ul style="list-style-type:disc;">
          <li><b>Personal Information:</b> Name, phone number, email address, and any other details you voluntarily provide. </li>
          <li><b>Locker Usage Information:</b> Records of parcel drop-offs and pickups, timestamps, and locker interactions.</li>               
          <li><b>Device & Technical Data:</b> IP address, browser type, device information, and website usage statistics.</li>
          <li><b>Location Data:</b> If enabled, approximate location to assist with service optimization.</li>
       </ul>`,
    },
    {
      title: "User Privacy Controls",
      description: `
        <ol>
          <li>Users can review and update their information by contacting our customer support team.</li>
          <li>Users can opt-out of notifications (e.g., service updates or promotional messages) by contacting customer support.
          <li>Users can request to delete their information or unsubscribe from uPOD services by contacting support at info@upodlockers.com. Requests will be processed within 30 days after verification.</li>
          <li>In cases where data retention is legally required or for operational needs, certain information may be retained for a specified period.</li>
        </ol>
      `,
    },
    {
      title: "Sharing and Disclosures",
      description: `Data Sharing & Disclosure: We do not sell or rent your personal data to third parties. However, we may share information in the following cases:
      <ul style="list-style-type:disc;">
        <li><b>Service Providers:</b> With trusted partners who assist in service delivery, maintenance, and support.</li>
        <li><b>Legal Compliance:</b> When required by law, government authorities, or legal processes.</li>
        <li><b> Business Transfers:</b> In case of a merger, acquisition, or business restructuring</li>
      <ul>`,
    },
    {
      title: "Information Security",
      description: `uPOD employs stringent security measures to protect user information:
      <ul style="list-style-type:none;">
        <li><b>Data Security & Retention: </b> We implement industry-standard security measures to protect your data. However, no system is entirely secure, and we cannot guarantee absolute security. We retain 
          collected data only as long as necessary for legitimate business or legal reasons</li>
        <li><b>User Responsibility: </b>Users must maintain the confidentiality of their locker credentials (e.g., OTPs). Any unauthorized use of these credentials is the user’s responsibility. Contact us 
          immediately if you suspect a breach.</li>
      </ul>`,
    },
    {
      title: "Data Ownership and Control",
      description: `<ul style="list-style-type:none;">
        <li><b>Resident Information</b><br>
          Information provided by residents is used solely for operational purposes and 
          remains the property of the respective Resident Welfare Association (RWA). Only 
          authorized RWA representatives have access to their society’s data as required.</li>
          <li><b>User Rights & Choices</b><br>
          You may have the following rights concerning your data:
          <ul style="list-style-type:disc;">
              <li><b>Access & Correction:</b> Request access to your personal data or corrections if needed.
              <li><b>Opt-Out:</b> Unsubscribe from marketing communications at any time.
              <li><b>Data Deletion:</b> Request the deletion of personal data where applicable</li>
          </ul>
        </ul`,
    },
    {
      title: "Limitations of Liability",
      description: `We are not responsible for any loss, theft, or misuse of parcels stored in our lockers.
        Users are solely responsible for securing their parcels and using the service as 
        intended.
        While uPOD implements robust security measures, no system is completely immune
        to vulnerabilities. We are not liable for: <br>
        <ul style="list-style-type:disc;">
          <li>Data loss or breaches due to transmission errors or unauthorized third-party access.</li>  
          <li>Actions resulting from user negligence in securing credentials.</li> 
        </ul>`,
    },
    {
      title: "Links to Other Websites",
      description: `Our Service may contain links to other websites that are not operated by Us. If You click on a third-party link, you will be directed to that third party’s site. We strongly 
        advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.`,
    },
    {
      title: "Changes to This Privacy Policy",
      description: `We may update Our Privacy Policy from time to time. We reserve the right to update this policy at any time. Any significant changes will be notified via our website or other communication channels.`,
    },
    {
      title: "Contact Us",
      description: `For any queries or concerns regarding this Privacy Policy or your data, please contact us at info@upodlockers.com",`,
    },
  ];
  const [policiesContent, setPoliciesContent] = useState("");

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    const content = document.getElementById("policies-content")?.innerText;
    if (content) {
      setPoliciesContent(content);
    }
  }, []);

  const handleCopyToClipboard = () => {
    if (policiesContent) {
      navigator.clipboard.writeText(policiesContent);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <RiSecurePaymentLine className="text-gray-600 text-3xl mr-4" />
            <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handlePrint}
              className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              aria-label="Print Privacy policy"
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

        <div id="policies-content" className="space-y-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            This Privacy Policy explains our policies and practices regarding
            the collection, use, and disclosure of your information when you use
            our Smart Parcel Locker Service. It also outlines your privacy
            rights and how applicable laws protect you. We use your personal
            data to deliver and enhance the Service. By accessing or using the
            Service, you consent to the collection, use, and processing of your
            information as described in this Privacy Policy. If you do not
            agree, please do not use our services
          </p>

          <div className="space-y-6">
            {policies.map((term, index) => (
              <div
                key={index}
                className="flex flex-col group p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  {term.title}
                </h3>

                <div className="text-gray-700 leading-relaxed">
                  {parse(term.description)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
