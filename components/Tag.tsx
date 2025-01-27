"use client";
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

type TagProps = {
  className?: string;
  children: ReactNode;
  variant: "background" | "rainbow" | "base";
};

const Tag: FC<TagProps> = ({ className, children, variant }) => {
  return (
    <motion.span
      className={twMerge(
        "border border-black/50 backdrop-blur-md text-center py-0.5 px-2 sm:tracking-widest rounded-full font-medium text-xs",
        variant === "background" && "bg-black text-white",
        variant === "rainbow" &&
          " bg-[linear-gradient(to_right,#f542fe,#f54aae,#f9b93a,#79f54c,#1ad1fa,#f241fb,#fc59b8,#f6bb47,#74fe42,#15d0fa)] [background-size:200%] text-transparent bg-clip-text",
        variant === "base" && "",
        className
      )}
      animate={{
        backgroundPositionX: "100%",
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
    >
      {children}
    </motion.span>
  );
};

export default Tag;
