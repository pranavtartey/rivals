import Features from "@/sections/Features";
import FeatureTicker from "@/sections/FeatureTicker";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import Services from "@/sections/Services";
import Socials from "@/sections/Socials";
import { Testimonials } from "@/sections/Testimonials";
import USP from "@/sections/USP";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero />
      <USP />
      <Features />
      <FeatureTicker />
      <Services />
      <Pricing />
      <Testimonials />
      <Socials />
      {/* <Footer /> */}
    </main>
  );
}
