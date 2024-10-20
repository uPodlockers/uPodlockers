import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logo-upod-white.png';
import Image from "next/image";
import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  return (
    <header className="sticky top-0 z-20">
      <div className="flex justify-center items-center py-1 bg-[#eaeefe] text-black text-small">
        <div className="inline-flex gap-1 items-center">
          <p>24*7 Accessible Parcel Lockers at your Service</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div>
        <div className="py-2 bg-black">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src={Logo} alt="uPOD Logo" height={120} width={120} />
                {/* <span className="font-bold text-lg">upod</span> */}
              </div>
              <MenuIcon className="h-5 w-5 md:hidden text-white" />          
              <nav className="hidden md:flex gap-6 font-semibold text-white/100 items-center">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Solutions</a>
                <a href="#">Company</a>
                {/* <a href="#">Resources</a> */}
                <a href="#">Contact Us</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
