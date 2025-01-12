import { NavLinks } from "@/constants/NavLinks";
import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <header className="sticky top-2">
      <div className="bg-neutral-100/60 w-fit mx-auto py-4 px-4 space-x-8 rounded-full backdrop-blur-md shadow-lg">
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
