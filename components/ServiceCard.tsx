import Image, { StaticImageData } from "next/image";
import { FC } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
};

const ServiceCard: FC<ServiceCardProps> = ({ description, title, image }) => {
  return (
    <div className="bg-textBlack max-w-sm p-10 rounded-2xl relative">
      <Image
        src={image}
        alt="service-card-image"
        width={64}
        className="absolute -translate-y-1/2 top-0"
      />
      <h3 className="text-2xl font-semibold text-neutral-300 tracking-wide mb-4">
        {" "}
        {title}
      </h3>
      <p className="text-neutral-400 text-lg">{description}</p>
    </div>
  );
};

export default ServiceCard;
