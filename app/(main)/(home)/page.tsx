import Fake from "@/sections/Fake";
import Hero from "@/sections/Hero";
import USP from "@/sections/USP/USP";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero />
      <USP />
      <Fake />
      {/* <Footer /> */}
    </main>
  );
}
