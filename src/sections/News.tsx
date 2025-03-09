"use client";
import React, { useState } from "react";
import { FaShareAlt, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaClock } from "react-icons/fa";

const CompanyNews = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const newsData = [
    {
      id: 1,
      title: "Revolutionizing Technology: The Next Big Innovation in Tech Industry",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      description: "Exploring the latest technological breakthroughs and their impact on the future of digital transformation in the corporate world.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Technology"
    },
    {
      id: 2,
      title: "Sustainable Business Practices: A Guide to Green Operations",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
      description: "Companies are increasingly adopting eco-friendly practices to reduce their carbon footprint and promote sustainability.",
      date: "2024-01-14",
      readTime: "4 min read",
      category: "Sustainability"
    },
    {
      id: 3,
      title: "Global Market Trends: Analyzing Economic Shifts",
      imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
      description: "Understanding the current market dynamics and preparing for future economic challenges in the global business landscape.",
      date: "2024-01-13",
      readTime: "6 min read",
      category: "Finance"
    },
    {
      id: 4,
      title: "Remote Work Revolution: Adapting to the New Normal",
      imageUrl: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555",
      description: "How companies are embracing remote work culture and implementing effective strategies for virtual collaboration.",
      date: "2024-01-12",
      readTime: "3 min read",
      category: "Workplace"
    }
  ];

  const ShareModal = ({ article, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h3 className="text-xl font-bold mb-4">Share Article</h3>
        <div className="flex justify-around mb-4">
          <button
            aria-label="Share on LinkedIn"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaLinkedin className="text-2xl text-blue-600" />
          </button>
          <button
            aria-label="Share on Twitter"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaTwitter className="text-2xl text-blue-400" />
          </button>
          <button
            aria-label="Share on Facebook"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaFacebook className="text-2xl text-blue-800" />
          </button>
          <button
            aria-label="Share via Email"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaEnvelope className="text-2xl text-gray-600" />
          </button>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );

  const NewsCard = React.memo(({ article }) => (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:transform hover:scale-[1.02]">
      <div className="relative pb-[56.25%]">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1584824486509-112e4181ff6b";
          }}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm text-gray-500">{article.date}</span>
          <div className="flex items-center text-sm text-gray-500">
            <FaClock className="mr-1" />
            {article.readTime}
          </div>
        </div>
        <h2 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">
          {article.title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={() => setSelectedArticle(article)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Read More
          </button>
          <button
            onClick={() => {
              setSelectedArticle(article);
              setShowShareModal(true);
            }}
            aria-label="Share article"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaShareAlt className="text-gray-600" />
          </button>
        </div>
      </div>
    </article>
  ));

  return (
    <div id="news" className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">News</h1>
        {newsData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No news articles available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newsData.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
      {showShareModal && selectedArticle && (
        <ShareModal
          article={selectedArticle}
          onClose={() => {
            setShowShareModal(false);
            setSelectedArticle(null);
          }}
        />
      )}
    </div>
  );
};

export default CompanyNews;
