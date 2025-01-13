import { FC } from "react";
import starImage from "@/assets/star-image.png";
import Image from "next/image";

const Ratings: FC = () => {
  return (
    <div className="border rounded-full px-4">
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
              <Image key={idx} src={starImage} alt="star-png" width={20} />
            ))}
          </div>
          <p className="text-xs font-light">Loved by 400+ Gammers</p>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
