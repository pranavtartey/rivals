import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import { FC } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* <p className="z-0 text-center text-xs font-medium py-2 bg-[linear-gradient(to_right,#F89C9C,#EAD07A_38%,#78EDE3_66%,#E682EF_99%)] mix-blend-multiply">
        Witness the evolution of gaming in Jhansi
      </p> */}
      <div className="">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
// min-h-[100dvh] grid grid-rows-[auto_1fr_auto] This class can be used when you have a very less content in your section and there is only one section and your want the looter to pushed at the end of the page but make it visible at the same time. Currently we have content already so we should not use this as it will create problems in your content flow
