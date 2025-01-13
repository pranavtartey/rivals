import Ratings from "@/components/Ratings";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="container">
      <div className="py-[72px] h-[300vh] flex justify-center">
        <Ratings />
      </div>
    </div>
  );
};

export default Hero;
