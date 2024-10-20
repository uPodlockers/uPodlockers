import logo from '@/assets/logo-upod-white.png'
import Image from "next/image"
import SocialX from '@/assets/social-x.svg'
import SocialInsta from '@/assets/social-insta.svg'
import SocialLinkedIn from '@/assets/social-linkedin.svg'
import SocialYoutube from '@/assets/social-youtube.svg'

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-['']">
          <Image src={logo} height={40} alt="uPOD logo" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Company</a>
          <a href="#">Contact Us</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 uPOD Lockers, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
