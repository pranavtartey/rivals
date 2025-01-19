"use client";
import Ratings from "@/components/Ratings";
import Reward from "@/components/Reward";
import Image from "next/image";
import { FC } from "react";
import controllerPng from "@/assets/controller-png.png";
import floatingController from "@/assets/floating-controller-png.png";
import floatingComputer from "@/assets/floating-pc-png.png";
import floatingBurger from "@/assets/floating-burger-png.png";
import floatingVR from "@/assets/floating-vr-png.png";
import floatingDrive from "@/assets/floating-steering-png.png";
import floatingPath from "@/assets/floating-path-png.png";
import floatingPath_2 from "@/assets/floating-path-2-png.png";
import floatingJointPath from "@/assets/floating-joint-path.png";
import floatingJointPath_right from "@/assets/floating-joint-path-right.png";
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
        <div className="w-fit mx-auto relative">
          <div className="-inset-4 absolute max-lg:hidden">
            <Image
              className="absolute lg:w-32 xl:w-40 lg:-left-32 lg:-top-14 xl:-left-40 xl:-top-20 "
              src={floatingJointPath}
              alt="floating-joint-path"
            />
            {/* <Image className="absolute lg:w-32 xl:w-40 lg:-right-32 lg:-top-14 xl:-right-40 xl:-top-20 rotate-180" src={floatingJointPath} alt="floating-joint-path"/> */}
            <Image
              className="absolute lg:w-40 xl:w-48 lg:-right-40 lg:-top-20 xl:-right-48 xl:-top-24"
              src={floatingJointPath_right}
              alt="floating-joint-path"
            />
          </div>
          <motion.h2
            className="py-4 mb-4 font-playfair text-4xl sm:text-6xl text-center text-neutral-900"
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
          <p className="text-center text-sm sm:text-base max-w-lg mx-auto">
            Your go-to spot for solo or group gaming. Enjoy the latest titles
            with stunning graphics on PS5, VR, PC, or the Logitech Driving
            Simulator—and refuel at our cafe for endless fun.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
