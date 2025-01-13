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
    <header className="sticky top-2">
      <div
        className="flex items-center justify-end sm:hidden relative z-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <Image src={closeIcon} alt="close-icon" width={24} />
        ) : (
          <Image src={hamburgerIcon} alt="hamburger-menu" width={24} />
        )}
      </div>
      {isOpen && (
        <div className="h-[100dvh] bg-neutral-300/90 backdrop-blur-lg fixed w-full top-0 py-[72px] flex flex-col items-center justify-center gap-24 transition">
          {NavLinks.map((link) => (
            <Link key={link.title} href={link.href} className="text-4xl font-medium py-1 px-4 rounded-full hover:bg-neutral-300 transition">
              {link.title}
            </Link>
          ))}
        </div>
      )}
      <div className="bg-neutral-100/60 w-fit mx-auto py-4 px-4 space-x-8 rounded-full backdrop-blur-md shadow-lg max-sm:hidden">
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
