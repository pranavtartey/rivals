import ServiceCard from "@/components/ServiceCard";
import { Services } from "@/constants/Services";
import { FC } from "react";

const ServicesOffer: FC = () => {
  return (
    <section className="bg-black py-[72px]">
      <div className="container">
        <h2 className="section-heading">Services</h2>
        <p className="section-description">
          We offer a wide variety of services
        </p>
        <div className="mt-20 w-[95%] mx-auto flex max-lg:flex-col items-center justify-center gap-16 lg:gap-4 ">
          {Services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOffer;
