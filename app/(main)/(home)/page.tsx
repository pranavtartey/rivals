import Fake from "@/sections/Fake";
import Features from "@/sections/Features";
import FeatureTicker from "@/sections/FeatureTicker";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import USP from "@/sections/USP";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero />
      <USP />
      <Features />
      <FeatureTicker />
      <Pricing />
      <Fake />
      {/* <Footer /> */}
    </main>
  );
}
