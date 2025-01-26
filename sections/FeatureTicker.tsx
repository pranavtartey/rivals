"use client";
import Image from "next/image";
import { FC } from "react";
import { motion } from "motion/react";
import battlefield from "@/assets/battle-field.png";
import wukong from "@/assets/Black-Myth-Wukong.png";
import guardiansOfGalaxy from "@/assets/guardians-of-galaxy.png";
import hogwartsLegecy from "@/assets/hogwarts-legecy.png";
import kidsGame from "@/assets/kids-game.png";
import lastOfUs from "@/assets/last-of-us.png";
import residentEvilVillage from "@/assets/resident-evil-village.png";
import spiderMan2 from "@/assets/spider-man-2.png";
import milesMoreles from "@/assets/spiderman-miles-moreles.png";
import tekken8 from "@/assets/tekken-8.png";

const FeatureTicker: FC = () => {
  return (
    <section className="bg-blue-700 py-8 md:py-12">
      <p className="text-center text-xl text-stone-300 tracking-wide mb-10">
        We operate on 100+ games
      </p>
      <div className="container">
        <div className="flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex items-center gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={battlefield}
              alt="battlefield"
              width={500}
              className="w-60 rounded-2xl"
            />
            <Image
              src={wukong}
              alt="wukong"
              width={500}
              className="w-60 rounded-2xl"
            />
            <Image
              src={guardiansOfGalaxy}
              alt="guardiansOfGalaxy"
              width={500}
              className="w-60 rounded-2xl"
            />
            <Image
              src={hogwartsLegecy}
              alt="hogwartsLegecy"
              width={500}
              className="w-60 rounded-2xl"
            />
            <Image
              src={spiderMan2}
              alt="spiderMan2"
              width={500}
              className="w-52 rounded-2xl"
            />
            <Image
              src={kidsGame}
              alt="kidsGame"
              width={500}
              className="w-60 rounded-2xl"
            />
            <Image
              src={lastOfUs}
              alt="lastOfUs"
              width={500}
              className="w-52 rounded-2xl"
            />
            <Image
              src={residentEvilVillage}
              alt="residentEvilVillage"
              width={500}
              className="w-60 rounded-2xl"
            />
            <Image
              src={milesMoreles}
              alt="milesMoreles"
              width={500}
              className="w-56 rounded-2xl"
            />
            <Image
              src={tekken8}
              alt="tekken8"
              width={500}
              className="w-60 rounded-2xl"
            />
            <Image
              src={battlefield}
              alt="battlefield"
              width={500}
              className="w-60 rounded-2xl"
            />
            <Image
              src={wukong}
              alt="wukong"
              width={500}
              className="w-60 rounded-2xl"
            />
            <Image
              src={guardiansOfGalaxy}
              alt="guardiansOfGalaxy"
              width={500}
              className="w-60 rounded-2xl"
            />
            <Image
              src={hogwartsLegecy}
              alt="hogwartsLegecy"
              width={500}
              className="w-60 rounded-2xl"
            />
            <Image
              src={kidsGame}
              alt="kidsGame"
              width={500}
              className="w-60 rounded-2xl"
            />
            <Image
              src={lastOfUs}
              alt="lastOfUs"
              width={500}
              className="w-52 rounded-2xl"
            />
            <Image
              src={residentEvilVillage}
              alt="residentEvilVillage"
              width={500}
              className="w-60 rounded-2xl"
            />
            <Image
              src={spiderMan2}
              alt="spiderMan2"
              width={500}
              className="w-52 rounded-2xl"
            />
            <Image
              src={milesMoreles}
              alt="milesMoreles"
              width={500}
              className="w-56 rounded-2xl"
            />
            <Image
              src={tekken8}
              alt="tekken8"
              width={500}
              className="w-60 rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTicker;
