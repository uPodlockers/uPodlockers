import logo from "@/assets/logo-upod-white.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section - Subscribe Input and Links */}
        <div className="flex flex-col w-full md:w-1/4 gap-3">
          <div className="flex gap-3 flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full bg-[#2a2a2a] text-white border-none rounded-lg focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col justify-between mt-1">
            <a href="/" className="hover:text-blue-500">
              Privacy Policy
            </a>
            <a href="/" className="hover:text-blue-500">
              Terms of Use
            </a>
          </div>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="flex flex-col md:flex-row w-full md:w-2/4 gap-6 justify-center items-center">
          <div className="flex flex-col w-full md:w-1/3">
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
            <div>
              <a href="/product" className="hover:text-blue-500">
                Product
              </a>
              <div className="ml-4">
                <a
                  href="/product/how-it-works"
                  className="hover:text-blue-500 block"
                >
                  How it Works?
                </a>
                <a href="/product/why-us" className="hover:text-blue-500 block">
                  Why Us?
                </a>
                <a href="/product/models" className="hover:text-blue-500 block">
                  Our Models
                </a>
                <a
                  href="/product/calculator"
                  className="hover:text-blue-500 block"
                >
                  Capacity Calculator
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-1/3">
            <div>
              <a href="/solutions" className="hover:text-blue-500">
                Solutions
              </a>
              <div className="ml-4">
                <a
                  href="/solutions/how-it-works"
                  className="hover:text-blue-500 block"
                >
                  How it Works?
                </a>
        
              </div>
            </div>
            <div>
              <a href="/company" className="hover:text-blue-500">
                Company
              </a>
              <div className="ml-4">
                <a href="/company/#us" className="hover:text-blue-500 block">
                  About Us
                </a>
                <a href="/company/#blogs" className="hover:text-blue-500 block">
                  Blogs
                </a>
                {/* 
                <a href="/company/#news" className="hover:text-blue-500 block">
                  News
                </a>
                <a href="/company/#case_studies" className="hover:text-blue-500 block">
                  Case Studies
                </a>
                <a href="/company/#team" className="hover:text-blue-500 block">
                  Our Team
                </a>
                <a
                  href="/company/careers"
                  className="hover:text-blue-500 block"
                >
                  Careers
                </a> */}
              </div>
            </div>

            <a href="/contact" className="hover:text-blue-500">
              Contact Us
            </a>
            {/* <a href="/pricing" className="hover:text-blue-500">
              Pricing
            </a> */}
          </div>
        </div>

        {/* Right Section - Social Media Icons and Contact Info */}
        <div className="flex flex-col items-start w-full md:w-1/4 gap-6 justify-center items-center">
          <div className="flex gap-6">
            {/* <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialX className="cursor-pointer" />
            </a> */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialInsta className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialLinkedIn className="cursor-pointer" />
            </a>
            {/* <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialYoutube className="cursor-pointer" />
            </a> */}
          </div>
          <div className="mt-6">
            <p>New Delhi, India</p>
            <p>Phone: +91 9599 161 160</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm">
        <p>
          &copy; 2024 uPOD Lockers | Edelbox Solutions Pvt. Ltd. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
