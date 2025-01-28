import { FC } from "react";

const Socials: FC = () => {
  return (
    <section className="bg-black py-[72px]">
      <div className="container">
        <h3 className="section-heading">Socials</h3>
        <p className="section-description">We are on social media</p>
        <div className="mt-12 rounded-xl py-4 px-2 md:px-8 relative overflow-hidden max-w-5xl mx-auto">
          <div className="absolute bottom-0 lg:-bottom-[25%] right-[25%] translate-y-1/2 translate-x-1/2 h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-[100%] bg-[radial-gradient(closest-side,rgba(255,172,109,0.8)_0%,rgba(226,189,161,0)_100%)] blur-3xl mix-blend-screen" />
          <div className="absolute top-0 -translate-y-1/2 left-[25%] sm:left-0 lg:left-[20%] -translate-x-1/2 h-[400px] w-[400px] md:h[600px] md:w-[600px] rounded-[100%] bg-[radial-gradient(closest-side,rgba(226,165,161,0.7)_0%,rgba(226,165,161,0)_100%)] blur-3xl mix-blend-screen" />
          <div className="flex flex-col sm:flex-row justify-between">
            <h2 className="text-4xl sm:text-3xl md:text-4xl text-neutral-300 font-medium text-center mb-10 relative">
              Let's Connect
            </h2>
            <div className="w-fit max-sm:mx-auto relative">
              <iframe
                src="https://www.youtube.com/embed/EThk_qC9fEM"
                title="Rivals Opening"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
