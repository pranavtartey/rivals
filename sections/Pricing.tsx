import Button from "@/components/Button";
import PricingCard from "@/components/PricingCard";
import { Prices } from "@/constants/Prices";
import { FC } from "react";

const Pricing: FC = () => {
  return (
    <section className="bg-black py-[72px]">
      <div className="container">
        <h2 className="section-heading py-1">Pricing</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12 max-w-7xl mx-auto">
          {Prices.map((price, idx) => (
            <PricingCard key={idx} {...price} />
          ))}
        </div>
        <div className="w-fit mx-auto mt-12">
          <Button varient="secondary" className="">
            Get all prices
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
