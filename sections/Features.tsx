"use client";
import { FC, useRef } from "react";
import Image from "next/image";
import god_of_war_image from "@/assets/god_of_war_ss.png";
import ps5_controller from "@/assets/PS5-Controller-PNG-Image.png";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";

const Features: FC = () => {
  const featureRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: featureRef,
    offset: ["start center", "start 0.15"],
  });

  const borderOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  const gowTranslateZValue = useTransform(scrollYProgress, [0, 1], [500, 0]);

  const gowImageTemplate = useMotionTemplate`translateZ(${gowTranslateZValue}px)`;

  return (
    <section ref={featureRef} className="bg-textBlack overflow-hidden">
      <div className="container py-[72px]">
        <div className="">
          <h2 className="section-heading">
            <span>Click Click</span>
            <br />
            <span>Tap Tap...</span>
          </h2>
          <p className="section-description mb-8">
            Challenge your teammates for a fun match or go solo all in.
          </p>
          <motion.div className="rounded-3xl mx-auto w-[320px] sm:w-[520px] lg:w-[620px] h-40 sm:h-60 lg:h-72 relative [perspective:1200px] [perspective-origin:bottom] [transform-style:preserve-3d]">
            <motion.div
              className="absolute inset-0 border-4 border-black rounded-3xl"
              style={{
                opacity: borderOpacity,
              }}
            />
            <motion.div
              className="absolute -inset-1  border-2 rounded-3xl"
              style={{
                opacity: borderOpacity,
              }}
            />
            <motion.div
              className=" relative w-3/4 h-full mx-auto"
              style={{
                transform: gowImageTemplate,
              }}
            >
              <Image
                src={god_of_war_image}
                alt="god-of-war"
                width={1144}
                className="w-56 sm:w-72 lg:w-96 mx-auto [mask-image:linear-gradient(to_bottom,black,transparent_95%)]"
              />
              <Image
                src={ps5_controller}
                alt="controller-png"
                className="w-20 sm:w-32 absolute -bottom-6 -right-4"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
