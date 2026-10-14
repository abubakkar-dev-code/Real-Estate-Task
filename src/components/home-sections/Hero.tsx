import heroImg from "../../assets/home-assets/Hero.webp";

const Hero = () => {
  return (
    <div
      className="min-h-145 md:h-190 w-full bg-cover bg-center pt-8 md:pt-15 flex flex-col justify-center md:justify-start"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="z-10 py-10 md:py-18 px-6 md:px-15 flex flex-col gap-4 md:gap-6">
        <p className="text-xs sm:text-sm md:text-lg font-semibold tracking-widest text-slate-100">
          EXPLORE DUBAI REAL ESTATE
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:font-medium font-serif max-w-2xl leading-tight md:leading-20">
          Smart Property Ownership in Dubai
        </h1>
        <p className="max-w-full md:max-w-lg lg:max-w-2/6 tracking-wide md:tracking-widest text-gray-50 mt-2 md:mt-4 font-semibold text-sm md:text-base leading-relaxed">
          Discover premium properties and smarter ways to invest in one of the
          world's fastest-growing real estate markets.
        </p>
        <button className="group cursor-pointer active:scale-95 transition-all px-6 md:px-8 w-full sm:w-fit justify-center sm:justify-start py-3.5 md:py-5 rounded-2xl mt-4 md:mt-7 bg-black text-white flex gap-4 items-center">
          Explore Properties
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 text-lg md:text-xl">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
