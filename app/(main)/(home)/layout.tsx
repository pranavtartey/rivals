import Footer from "@/sections/Footer";
import Navbar from "@/components/Navbar";
import { FC } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
        <p className="py-2 mb-2 max-sm:text-xs text-sm text-center tracking-widest font-medium mix-blend-multiply bg-[linear-gradient(to_right,#F89C9C,#EAD07A_38%,#78EDE3_66%,#E682EF_99%)]">Witness the evolution of gaming in Jhansi</p>
      <Navbar />
      <div className="min-h-[100dvh] grid grid-rows-[1fr_auto]">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout
