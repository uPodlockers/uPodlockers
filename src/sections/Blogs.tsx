"use client";
import React, { useState, useEffect } from "react";
import { FaShare, FaSearch } from "react-icons/fa";
import { format } from "date-fns";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const mockBlogs = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in Modern Business",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      excerpt: "Explore how AI is transforming the business landscape and what it means for future innovations.",
      author: "John Doe",
      date: new Date(2024, 0, 15),
      category: "Technology"
    },
    {
      id: 2,
      title: "Sustainable Development in Urban Architecture",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      excerpt: "Discovering new approaches to sustainable urban development and green architecture.",
      author: "Jane Smith",
      date: new Date(2024, 0, 10),
      category: "Architecture"
    },
    {
      id: 3,
      title: "Digital Marketing Trends for 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      excerpt: "Stay ahead of the curve with these emerging digital marketing strategies and trends.",
      author: "Mike Johnson",
      date: new Date(2024, 0, 5),
      category: "Marketing"
    }
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setBlogs(mockBlogs);
      setLoading(false);
    }, 1500);
  }, []);

  const categories = ["all", ...new Set(mockBlogs.map(blog => blog.category))];

  const filteredBlogs = blogs
    .filter(blog => selectedCategory === "all" || blog.category === selectedCategory)
    .filter(blog =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleShare = (blogId) => {
    const blogUrl = `${window.location.href}/${blogId}`;
    navigator.clipboard.writeText(blogUrl);
    alert("Blog link copied to clipboard!");
  };

  const BlogCard = ({ blog }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="relative pb-[56.25%] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64";
          }}
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">{format(blog.date, "MMM dd, yyyy")}</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">{blog.category}</span>
        </div>
        <h2 className="text-xl font-bold mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
          {blog.title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={() => handleShare(blog.id)}
            className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
            aria-label="Share blog"
          >
            <FaShare />
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
            onClick={() => console.log(`Reading blog: ${blog.id}`)}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );

  const Skeleton = () => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
      <div className="pb-[56.25%] bg-gray-200"></div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="w-24 h-4 bg-gray-200 rounded"></div>
          <div className="w-20 h-6 bg-gray-200 rounded-full"></div>
        </div>
        <div className="w-full h-6 bg-gray-200 rounded mb-3"></div>
        <div className="w-3/4 h-4 bg-gray-200 rounded mb-4"></div>
        <div className="flex justify-between items-center">
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
          <div className="w-24 h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Company Blog</h1>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search blogs..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(n => (
              <Skeleton key={n} />
            ))}
          </div>
        ) : filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No blogs found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;