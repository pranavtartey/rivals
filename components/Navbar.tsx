"use client";
import { NavLinks } from "@/constants/NavLinks";
import Image from "next/image";
import hamburgerIcon from "@/assets/hamburger-icon.png";
import closeIcon from "@/assets/close-icon.png";
import { AnimatePresence, motion } from "motion/react";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed w-full top-2 z-50">
      <>
        <div className="container">
          <div
            className={twMerge(
              "px-4 py-2 bg-black rounded-xl shadow-[0_1px_14px_#DDD]"
            )}
          >
            <div className=" flex items-center justify-between">
              <svg width="80" height="40" fill="none" viewBox="0 0 176 40">
                <path
                  fill="#DDD"
                  fill-rule="evenodd"
                  d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#DDDDDD"
                  d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                ></path>
              </svg>
              <div className="max-sm:hidden">
                {NavLinks.map(({ href, title }) => (
                  <a
                    key={title}
                    href={href}
                    className="font-medium text-neutral-300 hover:text-white tracking-wider mx-4"
                  >
                    {title}
                  </a>
                ))}
              </div>
              <div
                className="sm:hidden border border-neutral-300 p-1 rounded-lg"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <Image src={closeIcon} alt="close-icon" width={24} />
                ) : (
                  <Image src={hamburgerIcon} alt="hamburger-icon" width={24} />
                )}
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                    marginTop: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    marginTop: 16,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    marginTop: 0,
                  }}
                >
                  {NavLinks.map(({ href, title }) => (
                    <a
                      key={title}
                      href={href}
                      className="text-neutral-300 block text-center text-lg my-4 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {title}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </>
    </header>
  );
};

export default Navbar;
