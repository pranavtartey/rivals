"use client";
import Button from "@/components/Button";
import PricingCard from "@/components/PricingCard";
import { AllPrices } from "@/constants/AllPrices";

import { Prices } from "@/constants/Prices";
import { AnimatePresence, motion } from "motion/react";
import { FC, useState } from "react";

const Pricing: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="bg-black py-[72px]" id="pricing-section">
      <div className="container">
        <h2 className="section-heading py-1">Pricing</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12 max-w-7xl mx-auto">
          {Prices.map((price, idx) => (
            <PricingCard key={idx} {...price} />
          ))}
        </div>
        <div className="w-fit mx-auto mt-12" onClick={() => setIsOpen(!isOpen)}>
          <Button varient="secondary" className="">
            Get all prices
          </Button>
        </div>
        {isOpen && (
          <AnimatePresence>
            <motion.div
              className="w-fit mx-auto p-4 border rounded-3xl"
              initial={{
                opacity: 0,
                height: 0,
                marginTop: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                marginTop: 50,
              }}
              exit={{
                opacity: 0,
                height: 0,
                marginTop: 0,
              }}
            >
              <table className="w-[320px] lg:w-[600px]">
                <caption className="text-neutral-300 font-semibold mb-4">
                  All Prices
                </caption>
                <thead>
                  <tr className="text-neutral-300">
                    <th>Price</th>
                    <th>Duration&#40;Hour&#41;</th>
                  </tr>
                </thead>
                <tbody>
                  {AllPrices.map(({ price, duration }, idx) => (
                    <tr
                      key={idx}
                      className="text-center text-neutral-400 even:bg-slate-900"
                    >
                      <td>{price}</td>
                      <td>{duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default Pricing;
