"use client";
import { NavLinks } from "@/constants/NavLinks";
import Image from "next/image";
import Link from "next/link";
import hamburgerIcon from "@/assets/hamburger-icon.png";
import closeIcon from "@/assets/close-icon.png";
import { FC, useState } from "react";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed w-full top-2 z-50">
  <div
    className="flex items-center justify-end sm:hidden relative z-50"
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? (
      <Image src={closeIcon} alt="close-icon" width={24} />
    ) : (
      <Image src={hamburgerIcon} alt="hamburger-menu" width={24} />
    )}
  </div>
  {isOpen && (
    <div className="h-[100dvh] bg-[rgba(209,213,219,0.9)] backdrop-blur-sm fixed w-full top-0 py-[72px] flex flex-col items-center justify-center gap-24 sm:hidden z-40">
      {NavLinks.map((link) => (
        <Link key={link.title} href={link.href} className="text-4xl font-medium py-1 px-4 rounded-full hover:bg-neutral-300 transition">
          {link.title}
        </Link>
      ))}
    </div>
  )}
  <div className="bg-neutral-100/60 backdrop-blur-sm w-fit mx-auto py-4 px-4 space-x-8 rounded-full shadow-lg max-sm:hidden">
    {NavLinks.map((link) => (
      <Link
        key={link.title}
        href={link.href}
        className="py-1 px-2 hover:bg-neutral-300 transition rounded-xl"
      >
        {link.title}
      </Link>
    ))}
  </div>
</header>

  );
};

export default Navbar;
