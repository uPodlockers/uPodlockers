"use client";
import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiTarget, FiUsers, FiAward, FiHeart } from "react-icons/fi";


const AboutPage = () => {
  const values = [
    {
      icon: <FiUsers />,
      title: "Collaboration",
      description: "Working together to achieve extraordinary results",
    },
    {
      icon: <FiTarget />,
      title: "Innovation",
      description: "Pushing boundaries and embracing new ideas",
    },
    {
      icon: <FiAward />,
      title: "Excellence",
      description: "Striving for the highest quality in everything we do",
    },
    {
      icon: <FiHeart />,
      title: "Integrity",
      description: "Maintaining the highest ethical standards",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to transform digital experiences",
    },
    {
      year: "2019",
      title: "First Major Project",
      description: "Successfully delivered our first enterprise solution",
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Opened offices in multiple countries",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple awards for innovation",
    },
  ];

  return (
    <div
      id="us"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            UPOD Locker Solutions
          </h1>
          <p className="text-xl md:text-2xl text-white">
            Your one stop station for Locker solutions!
          </p>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-12 px-4 md-16 lg:px-32 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 dark:text-black">
              Who Are We
            </h2>
            <p className="text-lg text-gray-600 dark:text-black-300">
              We are a passionate team of innovators and developers committed to
              creating an exceptional agnostic Smart parcel Locker Network. We
              aim at transforming parcel deliveries with a convenient solution
              designed for urban and high-density areas worldwide. Our shared
              smart parcel lockers create an open network that enhances customer
              convenience, reduces delivery inefficiencies, and benefits
              consumers, retailers, carriers, and communities alike.
            </p>
          </div>
          {/* <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Our Team"
              className="rounded-lg shadow-xl w-full"
              loading="lazy"
            />
          </div> */}
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-12 px-4 md-16 lg:px-32 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6 dark:text-black">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 dark:text-black-300">
                Our vision is to revolutionize parcel delivery and access by
                promoting a cleaner, greener environment through optimized
                last-mile logistics. We aim to reduce emissions from failed
                deliveries while supporting the Smart Cities initiative to
                create a safe, sustainable, and smart world.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
                alt="Vision"
                className="rounded-lg shadow-xl w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse mt-12 mb-12 items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6 dark:text-black">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-black-300">
                Our mission is to provide innovative, secure, and accessible
                smart parcel lockers in every society, making them essential for
                the growing e-commerce landscape. We aim to enhance delivery
                convenience for consumers and seamlessly integrate with
                e-commerce platforms, ensuring our lockers become a vital
                resource for all online shoppers while improving the efficiency
                of last-mile deliveries across the world.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Mission"
                className="rounded-lg shadow-xl w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      {/* <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl text-blue-600 dark:text-blue-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline Section */}
      {/* <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
            Our Journey
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start gap-4"
              >
                <div className="flex-none w-24 font-bold text-blue-600 dark:text-blue-400">
                  {item.year}
                </div>
                <div className="flex-1 pb-8 border-l-2 border-blue-600 dark:border-blue-400 pl-8 relative">
                  <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-2 top-0"></div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;
