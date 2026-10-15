import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import houseHalf from "../../assets/home-assets/house-half.png";
import houseFull from "../../assets/home-assets/house-full.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const intro = gsap.timeline({
        delay: 0.2,
      });

      intro
        .from(".hero-bg", {
          scale: 1.14,
          duration: 2.6,
          ease: "power1.out",
          force3D: true,
        })
        .from(
          ".hero-eyebrow",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=2",
        )
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
        .from(
          ".hero-button",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2",
        );

      gsap.set(".house-full", {
        clipPath: "inset(100% 0% 0% 0%)",
      });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=1000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
      scrollTl
        .to(
          ".hero-content",
          {
            yPercent: -25,
            opacity: 0,
            ease: "none",
          },
          0,
        )
        .to(
          ".house-full",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            duration: 1,
          },
          0,
        )
        .to(
          ".hero-caption",
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "<",
        )
        .to(
          ".house-half",
          {
            opacity: 0,
            scale: 1.03,
            ease: "none",
            duration: 0.4,
          },
          "-=0.2",
        );
    },
    { scope: heroRef },
  );
  return (
    <div id="hero-section" ref={heroRef} className="relative overflow-hidden h-screen isolate">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative w-full aspect-square">
            <img
              src={houseHalf}
              alt="Half constructed house"
              className="house-half absolute inset-0 w-full h-full object-contain"
            />
            <img
              src={houseFull}
              alt="Completed house"
              className="house-full absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="absolute inset-0 z-20 bg-black/30" />
        <div className="hero-caption absolute z-30 bottom-10 md:bottom-14 left-0 w-full px-6 md:px-15 opacity-0">
          <p className="text-white text-xl md:text-4xl font-serif drop-shadow-lg">
            Your vision. Fully built.
          </p>
        </div>
      </div>
      <div className="relative z-20 min-h-145 md:h-170 w-full pt-8 md:pt-15 flex flex-col justify-center md:justify-start">
        <div className="hero-content py-10 md:py-18 px-6 md:px-15 flex flex-col gap-4 md:gap-6">
          <p className="hero-eyebrow text-xs sm:text-sm md:text-lg font-semibold tracking-widest text-slate-100">
            EXPLORE DUBAI REAL ESTATE
          </p>

          <h1 className="text-white hero-title text-3xl sm:text-5xl md:text-7xl lg:font-medium font-serif max-w-2xl leading-tight md:leading-20">
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
