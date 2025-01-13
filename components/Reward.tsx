import Image from "next/image";
import { FC } from "react";
import firstImage from "@/assets/first-icon.png";

const Reward: FC = () => {
  return (
    <div className="flex items-center gap-4 px-4 rounded-lg border border-[#F97316]">
      <Image src={firstImage} alt="first-image" width={32} />
      <p className="text-[#F97316] text-lg">#1 <span className="font-medium">in Jhansi</span></p>
    </div>
  );
};

export default Reward;
