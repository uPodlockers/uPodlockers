import { Header } from "@/sections/Header"
import { Hero } from "@/sections/Hero"
import { LogoTicker } from "@/sections/LogoTicker"
import { ProductShowcase } from "@/sections/ProductShowcase"
import { Footer } from "@/sections/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Footer />
    </>
  );
}
