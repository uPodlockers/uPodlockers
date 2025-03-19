"use client";

import { Header } from "@/sections/Header";
import { Products } from "@/sections/Products";
import { Footer } from "@/sections/Footer";
import ProductInfo from "@/sections/AboutProduct";
import LockerModels from "@/sections/Models";
import { About } from "@/sections/about";
import LockerCalculatorV2 from "@/sections/CalculatorV2";

export default function Product() {
  return (
    <>
      {/* <Products /> */}
      {/* <About/> */}
      <ProductInfo />
      <LockerModels/>
      <LockerCalculatorV2/>
    </>
  );
}
