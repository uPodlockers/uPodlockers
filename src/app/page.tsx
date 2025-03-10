import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/about"; // Corrected import for the About component
import { Products } from "@/sections/Products";
import { ContactUs } from "@/sections/ContactUs";
import FAQSection from "@/sections/FAQs";
import CompanyAffiliations from "@/sections/CompanyAffliations";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Products /> */}
      <FAQSection />
      {/* <CompanyAffiliations /> */}
      <ContactUs />
    </>
  );
}
