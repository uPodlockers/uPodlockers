"use client";

import { Header } from "@/sections/Header";
import { SolutionComponent } from "@/sections/Solution";
import { Footer } from "@/sections/Footer";
import SolutionCard from "@/sections/SolutionsList";
import { About } from "@/sections/about";

export default function Solution() {
  return (
    <>
      <About />
      {/* <SolutionComponent /> */}
      <SolutionCard sector="residents" id="residents" />
      <SolutionCard sector="universities" id="universities" />
      <SolutionCard sector="banks" id="banks" />
      <SolutionCard sector="offices" id="offices" />
      <SolutionCard sector="ecommerce" id="ecommerce" />
      <SolutionCard sector="hospitals" id="hospitals" />
    </>
  );
}
