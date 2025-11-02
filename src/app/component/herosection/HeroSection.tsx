import style from "./Hero.module.css";
const HeroSection = () => {
  return (
    <section className="lg:container lg:m-auto">
      <div
        className={`${style.heroSection} w-[100dvw] h-[100dvh] flex items-end justify-center`}
      >
        <h1
          className={`${style.heading}  text-[125px] leading-[1] max-sm:absolute max-sm:text-5xl flex flex-col font-bold items-center max-sm:top-[380px] `}
        >
          <span className="text-[#b7ab98]">THE BEST</span>
          <span className="text-[#f0694afd]">PHOTOSHOOT</span>
          <span className="text-[#b7ab98]"> STUDIO</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
