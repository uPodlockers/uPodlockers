import { Header } from "@/sections/Header"
import { Hero } from "@/sections/Hero"
import { LogoTicker } from "@/sections/LogoTicker"
import { Careers } from "@/sections/Careers"
import { Products } from "@/sections/Products"
import { Testimonials } from "@/sections/Testimonials"
import { ContactUs } from "@/sections/ContactUs"
import { Footer } from "@/sections/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <LogoTicker /> */}
      <Products />
      <Testimonials />
      <Careers />
      <ContactUs />
      <Footer />
    </>
  );
}
