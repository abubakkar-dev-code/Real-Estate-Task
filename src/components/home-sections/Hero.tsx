import heroImg from "../../assets/home-assets/Hero.png";

const Hero = () => {
  return (
    <div
      className="h-190 w-full bg-cover pt-15"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="z-10 py-18 px-15 flex flex-col gap-6">
        <p className="text-lg font-semibold tracking-widest">
          EXPLORE DUBAI REAL ESTATE
        </p>
        <h1 className="text-7xl font-medium font-serif max-w-2xl  leading-20">
          Smart Property Ownership in Dubai
        </h1>
        <p className="max-w-2/6  tracking-widest text-gray-50 mt-4 font-semibold">
          Discover premium properties and smarter ways to invest in one of the
          world's fastest-growing real estate markets.
        </p>
        <button className="px-8 w-fit py-5 rounded-3xl mt-7 bg-black text-white flex gap-8 items-center">
          Explore Properties<span>---</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
