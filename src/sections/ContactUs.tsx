// ContactUs.tsx

"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your Service ID
        "YOUR_TEMPLATE_ID", // Replace with your Template ID
        formData,
        "YOUR_USER_ID" // Replace with your User ID (public key)
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send message. Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center bg-[] bg-cover bg-center py-12 px-4 md:px-16 lg:px-32"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl font-bold tracking-tight text-[#010D3E] text-center mb-8">
          Contact Us
        </h2>
        <p className="text-lg text-center text-[#010D3E] mb-12">
          Have questions? or want to get a quote? We&apos;re here to help!
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#010D3E]"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#010D3E] rounded-md shadow-sm focus:ring-[#001E80] focus:border-[#001E80] p-2"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#010D3E]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#010D3E] rounded-md shadow-sm focus:ring-[#001E80] focus:border-[#001E80] p-2"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#010D3E]"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-[#010D3E] rounded-md shadow-sm focus:ring-[#001E80] focus:border-[#001E80] p-2"
              rows={4}
              placeholder="Your Message"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#000000] text-white font-semibold rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-[#001E80] focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
