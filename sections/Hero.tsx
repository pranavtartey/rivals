"use client";
import Image from "next/image";
import { FC, MouseEvent, useRef } from "react";
import { IconArrowDown, IconArrowUpRight } from "@tabler/icons-react";
import controllerPng from "@/assets/controller-png.png";
import floatingComputer from "@/assets/floating-pc-png.png";
import floatingBurger from "@/assets/floating-burger-png.png";
import floatingVR from "@/assets/floating-vr-png.png";
import floatingDrive from "@/assets/floating-steering-png.png";
import floatingJointPath from "@/assets/floating-joint-path.png";
import floatingJointPath_right from "@/assets/floating-joint-path-right.png";
import firstImage from "@/assets/first-icon.png";
import starImage from "@/assets/star-image.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

const Hero: FC = () => {
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);

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

  const mouseOverHandler = (e: MouseEvent) => {
    mouseX.set(e.pageX);
    mouseY.set(e.pageY);
  };

  const imageXTranslate = useTransform(mouseX, [0, 1200], [0, 15]);
  const imageSpringXTranslate = useSpring(imageXTranslate);
  const imageYTranslate = useTransform(mouseY, [0, 720], [0, 15]);
  const imageSpringYTranslate = useSpring(imageYTranslate);

  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["0.1 start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);
  const floatingImageContainerScale = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1, 1.3]
  );
  const floatingImageContainerOpacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1, 0]
  );

  const translateZControllerImage = useTransform(
    scrollYProgress,
    [0.3, 0.95],
    [0, 799]
  );

  const translateZControllerTemplate = useMotionTemplate`translateZ(${translateZControllerImage}px)`;

  return (
    <div className="" ref={heroRef}>
      <div className="h-[300vh]">
        <motion.div
          className="min-h-[100dvh] py-[15dvh] sm:py-[10dvh] overflow-hidden sticky top-0"
          onMouseMove={mouseOverHandler}
        >
          <div className="flex flex-col justify-start items-center gap-4">
            <motion.div
              className="flex items-center gap-4 px-4 rounded-lg border border-[#F97316]"
              style={{
                opacity,
                scale,
              }}
            >
              <Image src={firstImage} alt="first-image" width={32} />
              <p className="text-[#F97316] text-lg">
                #1 <span className="font-medium">in Jhansi</span>
              </p>
            </motion.div>
            <motion.div
              className="border rounded-full px-4"
              style={{
                opacity,
                scale,
              }}
            >
              <div className="flex items-center">
                <div className="">
                  <p className="bg-[#4322FF] text-white rounded-full w-5 text-sm text-center inline-block">
                    A
                  </p>
                  <p className="bg-[#FF22F8] text-white rounded-full w-5 text-sm text-center inline-block relative right-[10%]">
                    T
                  </p>
                  <p className="bg-[#78E57C] text-white rounded-full w-5 text-sm text-center inline-block relative right-[20%]">
                    K
                  </p>
                </div>
                <div>
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, idx) => (
                      <Image
                        key={idx}
                        src={starImage}
                        alt="star-png"
                        width={20}
                      />
                    ))}
                  </div>
                  <p className="text-xs font-light">Loved by 400+ Gamers</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-10 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
            <motion.div
              className="w-10 sm:w-16"
              style={{
                transform: translateZControllerTemplate,
              }}
            >
              <Image src={controllerPng} alt="controller-image" />
            </motion.div>
          </div>
          <div className="w-fit mx-auto relative">
            <motion.div
              className="max-lg:hidden absolute -inset-4"
              style={{
                scale: floatingImageContainerScale,
                opacity: floatingImageContainerOpacity,
              }}
            >
              <motion.div
                className="absolute lg:-left-32 lg:-top-14 xl:-left-40 xl:-top-20 "
                style={{
                  translateX: imageSpringXTranslate,
                  translateY: imageSpringYTranslate,
                }}
              >
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
              </motion.div>
              <motion.div
                className="absolute lg:-right-40 lg:-top-20 xl:-right-48 xl:-top-24"
                style={{
                  translateX: imageSpringXTranslate,
                  translateY: imageSpringYTranslate,
                }}
              >
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
              </motion.div>
            </motion.div>
            <motion.h2
              className="py-4 mb-4 font-playfair text-4xl sm:text-6xl text-center text-textBlack relative"
              variants={varients}
              initial="hidden"
              animate="visible"
              style={{
                opacity,
                scale,
              }}
            >
              {"Eat Play Repeat".split(" ").map((st) => (
                <motion.span key={st} variants={varients}>
                  {st}&nbsp;
                </motion.span>
              ))}
            </motion.h2>
            <motion.p
              className="text-center text-sm sm:text-base max-w-lg mx-auto relative text-textBlack"
              style={{
                opacity,
                scale,
              }}
            >
              Your go-to spot for solo or group gaming. Enjoy the latest titles
              with stunning graphics on PS5, VR, PC, or the Logitech Driving
              Simulator—and refuel at our cafe for endless fun.
            </motion.p>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.div
              style={{
                opacity,
                scale,
              }}
            >
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
            </motion.div>
            <motion.div
              style={{
                opacity,
                scale,
              }}
            >
              <button className="border border-black px-4 py-1 rounded-full hover:scale-105 transition backdrop-blur-lg">
                Contact Us
              </button>
            </motion.div>
          </div>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] -z-10"
            )}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
