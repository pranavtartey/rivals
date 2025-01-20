import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import { FC } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <p className="z-0 text-center text-xs font-medium py-2 bg-[linear-gradient(to_right,#F89C9C,#EAD07A_38%,#78EDE3_66%,#E682EF_99%)] mix-blend-multiply">
        Witness the evolution of gaming in Jhansi
      </p>
      <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
