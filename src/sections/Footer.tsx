import logo from '@/assets/logo-upod-white.png';
import Image from "next/image";
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        {/* <div className="inline-flex relative before:content-['']">
          <Image src={logo} height={40} alt="uPOD logo" />
        </div> */}
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="/" className="hover:text-blue-500">Privacy Policy</a>
          <a href="/" className="hover:text-blue-500">Terms of Service</a>
          <a href="/" className="hover:text-blue-500">Home</a>
          <a href="/product" className="hover:text-blue-500">Product</a>
          <a href="/solutions" className="hover:text-blue-500">Solution</a>
          <a href="/company" className="hover:text-blue-500">Company</a>
          <a href="/contact" className="hover:text-blue-500">Contact Us</a>
          <a href="/pricing" className="hover:text-blue-500">Pricing</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 uPOD Lockers | Edelbox Solutions Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
