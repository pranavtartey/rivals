"use client";
import { MotionValue } from "motion";
import { motion, AnimatePresence } from "motion/react";
import { FC } from "react";

type USPTitleProps = {
  title: string;
  description: string;
  phraseOpacity: MotionValue<number>;
  phraseTranslate: MotionValue<number>;
};

const USPPhrase: FC<USPTitleProps> = ({
  title,
  description,
  phraseOpacity,
  phraseTranslate,
}) => {
  return (
    <div className="">
      <motion.h2
        className="text-neutral-400 font-montserrat text-4xl text-center font-semibold tracking-tight sm:tracking-wide sm:leading-relaxed"
        style={{}}
      >
        {title}
      </motion.h2>
      <p className="text-neutral-500 text-center sm:max-w-sm md:max-w-lg mx-auto sm:text-lg">
        {description}
      </p>
    </div>
  );
};

export default USPPhrase;
