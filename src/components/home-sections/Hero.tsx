import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroImg from "../../assets/home-assets/Hero.webp";

gsap.registerPlugin(gsap)
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-bg",
        { scale: 1.14, z: 0.1 },
        {
          scale: 1,
          z: 0.1,
          duration: 2.6,
          ease: "power1.out",
          force3D: true,
          delay: 0.05,
        },
      );
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from(".hero-eyebrow", {
        y: 25,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .from(
          ".hero-title",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .fromTo(
          ".hero-button",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2",
        );
    },
    { scope: heroRef },
  );

  return (
    <div ref={heroRef} className="relative overflow-hidden isolate">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={heroImg}
          alt="hero-img"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="hero-bg w-full h-full object-cover object-center will-change-transform backface-hidden transform-gpu"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 min-h-145 md:h-170 w-full pt-8 md:pt-15 flex flex-col justify-center md:justify-start">
        <div className="hero-content py-10 md:py-18 px-6 md:px-15 flex flex-col gap-4 md:gap-6">
          <p className="hero-eyebrow text-xs sm:text-sm md:text-lg font-semibold tracking-widest text-slate-100">
            EXPLORE DUBAI REAL ESTATE
          </p>

          <h1 className="hero-title text-3xl sm:text-5xl md:text-7xl lg:font-medium font-serif max-w-2xl leading-tight md:leading-20">
            Smart Property Ownership in Dubai
          </h1>

          <p className="hero-description max-w-full md:max-w-lg lg:max-w-2/6 tracking-wide md:tracking-widest text-gray-50 mt-2 md:mt-4 font-semibold text-sm md:text-base leading-relaxed">
            Discover premium properties and smarter ways to invest in one of the
            world's fastest-growing real estate markets.
          </p>

          <button className="hero-button group cursor-pointer active:scale-95 transition-transform px-6 md:px-8 w-full sm:w-fit justify-center sm:justify-start py-3.5 md:py-5 rounded-2xl mt-4 md:mt-7 bg-black text-white flex gap-4 items-center">
            Explore Properties
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 text-lg md:text-xl">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
