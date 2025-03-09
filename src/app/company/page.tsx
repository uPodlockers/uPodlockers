import { Header } from "@/sections/Header";
import { Products } from "@/sections/Products";
import { Footer } from "@/sections/Footer";
import BlogsPage from "@/sections/Blogs";
import CaseStudies from "@/sections/CaseStudies";
import AboutPage from "@/sections/AboutUs";
import CompanyNews from "@/sections/News";
import ExecutivesTeam from "@/sections/OurTeam";

export default function Company() {
  return (
    <>
      <AboutPage/>
      <CompanyNews/>

      <BlogsPage />
      <CaseStudies />
      <ExecutivesTeam/>
    </>
  );
}
