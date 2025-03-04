import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/about"; // Corrected import for the About component
import { LogoTicker } from "@/sections/LogoTicker";
import { Careers } from "@/sections/Careers";
import { Products } from "@/sections/Products";
import { Testimonials } from "@/sections/Testimonials";
import { ContactUs } from "@/sections/ContactUs";
import { Footer } from "@/sections/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Testimonials />
      {/* <Careers /> */}
      <ContactUs />
      <Footer />
    </>
  );
}
