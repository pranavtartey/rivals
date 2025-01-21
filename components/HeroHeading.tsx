"use client";
import { FC } from "react";
import { motion } from "motion/react";

const varients = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3,
    },
  },
};

const HeroHeading: FC = () => {
  return (
    <motion.h2
      className="py-4 mb-4 font-playfair text-4xl sm:text-6xl text-center text-neutral-900 relative"
      variants={varients}
      initial="hidden"
      animate="visible"
    >
      {"Eat Play Repeat".split(" ").map((st) => (
        <motion.span key={st} variants={varients}>
          {st}&nbsp;
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default HeroHeading;
