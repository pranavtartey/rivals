"use client";
import Ratings from "@/components/Ratings";
import Reward from "@/components/Reward";
import Image from "next/image";
import { FC } from "react";
import controllerPng from "@/assets/controller-png.png";
import floatingComputer from "@/assets/floating-pc-png.png";
import floatingBurger from "@/assets/floating-burger-png.png";
import floatingVR from "@/assets/floating-vr-png.png";
import floatingDrive from "@/assets/floating-steering-png.png";
import floatingJointPath from "@/assets/floating-joint-path.png";
import floatingJointPath_right from "@/assets/floating-joint-path-right.png";
import { motion } from "motion/react";
import HeroHeading from "@/components/HeroHeading";
import { IconArrowDown, IconArrowUpRight } from "@tabler/icons-react";
import Button from "@/components/Button";
import AnimatedHeroButton from "@/components/AnimatedHeroButton";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

const Hero: FC = () => {
  return (
    <div className="container">
      <div className="py-[15dvh] sm:py-[10dvh] h-[300vh]">
        <div className="min-h-[100dvh] overflow-hidden relative ">
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
              <div className="absolute lg:-left-32 lg:-top-14 xl:-left-40 xl:-top-20 ">
                <div className="absolute -top-8 -left-14 bg-neutral-100/30 backdrop-blur-xl rounded-xl border border-black w-14 h-14 flex items-center justify-center -rotate-6 hover:rotate-0 hover:scale-105 transition shadow-lg">
                  <Image
                    src={floatingComputer}
                    alt="floating-computer"
                    width={40}
                  />
                </div>
                <div className="absolute -bottom-14 -left-8 bg-neutral-100/30 backdrop-blur-xl rounded-xl border border-black w-14 h-14 flex items-center justify-center -rotate-6 hover:rotate-0 hover:scale-105 transition shadow-lg">
                  <Image src={floatingVR} alt="floating-vr" width={40} />
                </div>
                <Image
                  className="lg:w-32 xl:w-40"
                  src={floatingJointPath}
                  alt="floating-joint-path"
                />
              </div>
              <div className="absolute lg:-right-40 lg:-top-20 xl:-right-48 xl:-top-24">
                <div className="absolute -top-14 right-0 bg-neutral-100/30 backdrop-blur-xl rounded-xl border border-black w-14 h-14 flex items-center justify-center rotate-12 hover:rotate-0 hover:scale-105 transition shadow-lg">
                  <Image
                    src={floatingDrive}
                    alt="floating car-drive"
                    width={40}
                  />
                </div>
                <div className="absolute -bottom-14 right-0 -rotate-6 border border-black rounded-xl h-14 w-14 flex items-center justify-center bg-neutral-100/30 backdrop-blur-xl hover:rotate-0 hover:scale-105 transition shadow-lg">
                  <Image
                    src={floatingBurger}
                    alt="floating-birger"
                    width={45}
                  />
                </div>
                <Image
                  className="lg:w-40 xl:w-48"
                  src={floatingJointPath_right}
                  alt="floating-joint-path"
                />
              </div>
            </div>
            <HeroHeading />
            <p className="text-center text-sm sm:text-base max-w-lg mx-auto relative text-textBlack">
              Your go-to spot for solo or group gaming. Enjoy the latest titles
              with stunning graphics on PS5, VR, PC, or the Logitech Driving
              Simulator—and refuel at our cafe for endless fun.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <AnimatedHeroButton />
            <button className="border border-black px-4 py-1 rounded-full hover:scale-105 transition backdrop-blur-lg">
              Contact Us
            </button>
          </div>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] -z-10"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
