"use client";
import Ratings from "@/components/Ratings";
import Reward from "@/components/Reward";
import Image from "next/image";
import { FC } from "react";
import controllerPng from "@/assets/controller-png.png";
import { motion } from "motion/react";

const varients = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const Hero: FC = () => {
  return (
    <div className="container">
      <div className="py-[20dvh] sm:py-[15dvh] h-[300vh]">
        <div className="flex flex-col justify-start items-center gap-4">
          <Reward />
          <Ratings />
        </div>
        <div className="mt-10 flex items-center justify-center">
          <Image
            src={controllerPng}
            alt="controller-image"
            className="w-10 sm:w-16"
          />
        </div>
        <motion.h2
          className="py-4 mb-4 font-playfair text-4xl sm:text-6xl text-center text-neutral-900"
          variants={varients}
          initial="hidden"
          animate="visible"
        >
          {"Eat.Play.Repeat".split(".").map((st) => (
            <motion.span key={st} variants={varients}>
              {st}.
            </motion.span>
          ))}
        </motion.h2>
        <p className="text-center text-sm sm:text-base max-w-lg mx-auto">
          Your go-to spot for solo or group gaming. Enjoy the latest titles with
          stunning graphics on PS5, VR, PC, or the Logitech Driving
          Simulator—and refuel at our cafe for endless fun.
        </p>
      </div>
    </div>
  );
};

export default Hero;
