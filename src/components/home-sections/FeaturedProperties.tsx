import luxuryVilla from "../../assets/home-assets/villas/Luxury-villa.webp";
import apartment from "../../assets/home-assets/villas/downTown.webp";
import beachfront from "../../assets/home-assets/villas/beach-front.webp";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const FeaturedProperties = () => {
  const featuredRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featuredRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
      tl.from(".featured-content", {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".featured-main-image",
          {
            clipPath: "inset(100% 0% 0% 0%)",
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".featured-main-image img",
          {
            scale: 1.12,
            duration: 1.4,
            ease: "power3.out",
            force3D: true,
          },
          "-=1.0",
        )
        .from(
          ".featured-small-image",
          {
            clipPath: "inset(100% 0% 0% 0%)",
            opacity: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.7",
        )
        .from(
          ".featured-small-image img",
          {
            scale: 1.1,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out",
            force3D: true,
          },
          "-=0.8",
        );
      const images = gsap.utils.toArray<HTMLImageElement>(
        ".featured-image img",
      );
      images.forEach((img) => {
        const wrapper = img.parentElement;
        const enter = () => {
          gsap.to(img, {
            scale: 1.08,
            duration: 0.8,
            ease: "power3.out",
          });
        };
        const leave = () => {
          gsap.to(img, {
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          });
        };
        if (wrapper) {
          wrapper.addEventListener("mouseenter", enter);
          wrapper.addEventListener("mouseleave", leave);
        }
      });
    },
    { scope: featuredRef },
  );
  return (
    <div ref={featuredRef}>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="featured-content lg:flex-[46%] w-full py-10 lg:py-18 px-6 md:px-15 flex flex-col gap-5">
          <p className="text-xs sm:text-sm md:text-lg font-semibold tracking-widest text-slate-800">
            FEATURED PROPERTIES
          </p>
          <h1 className="font-medium font-serif text-3xl sm:text-4xl md:text-6xl leading-tight md:leading-20">
            Luxury Living
            <br /> in the Heart of Dubai
          </h1>
          <p className="font-medium text-gray-600 leading-relaxed w-full text-base md:text-lg">
            From modern apartments to exclusive villas,
            <br />
            find your perfect property in Dubai
          </p>
          <button className="py-3.5 px-6 cursor-pointer transition-all border border-black w-fit mt-2 md:mt-5 rounded-4xl hover:border-blue-500 active:scale-95 text-sm md:text-base font-medium">
            View All Properties
          </button>
        </div>
        <div className="w-full lg:flex-[54%] py-8 lg:py-18 px-6 md:px-15 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="featured-image featured-main-image overflow-hidden group">
            <img
              src={luxuryVilla}
              alt="luxury-villa"
              className="w-full h-72 sm:h-96 md:h-140 object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-6 md:gap-10">
            <div className="featured-image featured-small-image overflow-hidden">
              <img
                className="w-full h-52 sm:h-64 object-cover rounded-lg"
                src={apartment}
                alt="apartment-img"
              />
            </div>
            <div className="featured-image featured-small-image overflow-hidden">
              <img
                className="w-full h-52 sm:h-64 object-cover rounded-lg"
                src={beachfront}
                alt="beachfront-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
