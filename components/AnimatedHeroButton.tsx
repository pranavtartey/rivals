"use client";
import { FC } from "react";
import { motion } from "motion/react";
import { IconArrowDown, IconArrowUpRight } from "@tabler/icons-react";
const AnimatedHeroButton: FC = () => {
  return (
    <motion.button
      className="bg-textBlack text-white px-4 py-1 rounded-full hover:bg-[linear-gradient(to_right,)] overflow-hidden flex flex-col relative"
      initial="initial"
      whileHover="hovered"
    >
      <motion.span
        className="inline-flex gap-2"
        variants={{
          initial: {
            y: 0,
          },
          hovered: {
            y: "-100%",
          },
        }}
      >
        Get Services <IconArrowUpRight stroke={1.5} />
      </motion.span>
      <motion.span
        className="inline-flex gap-2 absolute"
        variants={{
          initial: {
            y: "100%",
          },
          hovered: {
            y: 0,
          },
        }}
      >
        Scroll down <IconArrowDown stroke={1.5} />
      </motion.span>
    </motion.button>
  );
};

export default AnimatedHeroButton;
