
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import Tag from "./Tag";

type PricingCardProps = {
  price: string;
  duration: string;
  popular: boolean;
  features: string[];
};

const PricingCard: FC<PricingCardProps> = ({
  duration,
  features,
  popular,
  price,
}) => {
  return (
    <div className={twMerge("border rounded-3xl p-6 relative max-sm:w-[320px] sm:w-[400px] lg:w-[280px] xl:w-[350px] mx-auto", popular && "bg-neutral-100")}>
      {popular && <Tag variant="rainbow" className="absolute right-4 top-2">Popular</Tag>}
      <h2 className={twMerge("mb-2 tracking-wider")}>
        <span className={twMerge(" text-neutral-300 text-3xl font-bold", popular && "text-stone-800")}>
          &#8377;{price}/
        </span>
        <span className={twMerge("text-neutral-300 font-semibold text-lg", popular && "text-stone-800")}>
          {duration}
        </span>
      </h2>
      <hr />
      <div className={twMerge("py-4")}>
        <h3
          className={twMerge(
            "text-neutral-300 text-2xl font-semibold tracking-wider mb-4", popular && "text-stone-800"
          )}
        >
          Features
        </h3>
        <div className="">
          {features.map((feature, idx) => (
            <p key={idx} className={twMerge("text-neutral-300", popular && "text-stone-800")}>
              &#10004;{" "}
              <span className={twMerge("text-lg tracking-wide leading-relaxed")}>
                {feature}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
