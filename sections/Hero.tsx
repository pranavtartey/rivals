import Ratings from "@/components/Ratings";
import Reward from "@/components/Reward";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="container">
      <div className="py-[20dvh] h-[300vh]">
        <div className="flex flex-col justify-start items-center gap-4">
          <Reward />
          <Ratings />
        </div>
        <h2 className="mt-14 sm:mt-10 mb-4 font-playfair text-4xl sm:text-6xl text-center">
          Eat.Play.Repeat
        </h2>
        <p className="text-center text-sm max-w-lg mx-auto">
          Your go-to spot for solo or group gaming. Enjoy the latest titles with
          stunning graphics on PS5, VR, PC, or the Logitech Driving
          Simulator—and refuel at our cafe for endless fun.
        </p>
      </div>
    </div>
  );
};

export default Hero;
