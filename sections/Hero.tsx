import Ratings from "@/components/Ratings";
import Reward from "@/components/Reward";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="container">
      <div className="py-[72px] h-[300vh] flex justify-center items-start">
        <Ratings />
        <Reward />
      </div>
    </div>
  );
};

export default Hero;
