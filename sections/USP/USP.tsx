"use client";
import { USPPhrases } from "@/constants/USPPhrases";
import { FC, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";

const USP: FC = () => {
  const uspRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: uspRef,
    offset: ["start end", "end end"],
  });
  const position = useTransform(scrollYProgress, (progress) =>
    progress > 0 && progress < 1 ? "fixed" : "static"
  );

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.3, 1]);
  const descriptionOpacity = useTransform(scrollYProgress, [0.4, 1], [0, 1]);

  const phraseTranslate = useTransform(scrollYProgress, [0, 0.4], [10, 0]);
  const descriptionTranslate = useTransform(scrollYProgress, [0.4, 1], [10, 0]);

  const phraseTranslateTemplate = useMotionTemplate`translateY(${phraseTranslate}px)`;
  const descriptionTranslateTemplate = useMotionTemplate`translateY(${descriptionTranslate}px)`;

  return (
    <section
      ref={uspRef}
      className="bg-black min-h-screen md:h-screen py-[72px]"
    >
      <motion.div
        className="w-full h-full "
        style={{
          position,
          top: 0,
        }}
      >
        <div className="h-full flex flex-col justify-center gap-10 md:gap-6 overflow-x-hidden">
          {USPPhrases.map(({ description, title }) => (
            <div className="">
              <motion.h2
                className="text-neutral-400 font-montserrat text-4xl text-center font-semibold tracking-tight sm:tracking-wide sm:leading-relaxed px-4"
                style={{
                  opacity,
                  transform: phraseTranslateTemplate,
                }}
              >
                {title}
              </motion.h2>
              <motion.p
                className="text-neutral-500 text-center sm:max-w-sm md:max-w-lg mx-auto sm:text-lg px-4"
                style={{
                  opacity: descriptionOpacity,
                  transform: descriptionTranslateTemplate,
                }}
              >
                {description}
              </motion.p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default USP;
