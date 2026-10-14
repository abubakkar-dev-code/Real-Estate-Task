import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import {
  FaCalendarCheck,
  FaRegMoneyBillAlt,
  // FaArrowRight,
} from "react-icons/fa";
import OwnerShip from "../../assets/home-assets/Ownership.webp";
import { GiNetworkBars } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);
const Ownership = () => {
  const ownershipRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ownershipRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
      tl.from(".ownership-bg", {
        scale: 1.08,
        duration: 1.8,
        ease: "power2.out",
      })
        .from(
          ".ownership-eyebrow",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=1.2",
        )
        .from(
          ".ownership-title",
          {
            clipPath: "inset(0 100% 0 0)",
            duration: 1,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .from(
          ".ownership-step:nth-child(1) .ownership-icon",
          {
            scale: 0,
            opacity: 0,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "-=0.2",
        )
        .from(".ownership-connector:nth-child(2) .ownership-line", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.6,
          ease: "power2.out",
        })
        .from(
          ".ownership-step:nth-child(3) .ownership-icon",
          {
            scale: 0,
            opacity: 0,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "-=0.2",
        )
        .from(".ownership-connector:nth-child(4) .ownership-line", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.6,
          ease: "power2.out",
        })
        .from(
          ".ownership-step:nth-child(5) .ownership-icon",
          {
            scale: 0,
            opacity: 0,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "-=0.2",
        )
        .from(".ownership-connector-inner", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".ownership-name",
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.3",
        )

        .from(
          ".ownership-description",
          {
            y: 10,
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.3",
        );
    },
    { scope: ownershipRef },
  );
  const iconsArray = [
    {
      idx: 1,
      name: "Low initial payment",
      description: "Start your property journey with flexible entry point.",
      icon: <FaRegMoneyBillAlt className="text-3xl lg:text-5xl" />,
    },
    {
      idx: 2,
      name: "Flexible Installments",
      description:
        "Choose a payment structure designed around your investment.",
      icon: <FaCalendarCheck className="text-3xl lg:text-5xl" />,
    },
    {
      idx: 3,
      name: "Rental Income",
      description: "Build long‑term value through Dubai’s property market.",
      icon: <GiNetworkBars className="text-3xl lg:text-5xl" />,
    },
  ];
  return (
    <div ref={ownershipRef} className="w-full py-5 md:py-10 px-6 md:px-15">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${OwnerShip})`,
        }}
        className="min-h-150 md:h-185 w-full bg-cover bg-center rounded-3xl -z-10 flex flex-col gap-6 md:gap-10 space-y-8 md:space-y-16 text-white items-center text-center pt-12 pb-12 md:pt-30 md:pb-0 px-4 md:px-0"
      >
        <div className="ownership-heading text-center flex flex-col gap-3 md:gap-5">
          <p className="ownership-eyebrow text-xs md:text-sm font-semibold text-white tracking-[0.25em]">
            THE SMARTER WAY
          </p>
          <h3 className="ownership-title text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-widest">
            Path to Smart Ownership
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 lg:gap-x-14 items-center md:items-start">
          {iconsArray.map((item) => (
            <React.Fragment key={item.idx}>
              <div className="ownership-step  text-center flex flex-col gap-2 md:gap-4 items-center max-w-55">
                <div className="ownership-icon w-14 mt-4 h-14 lg:w-28 lg:h-28 bg-transparent border border-gray-300 rounded-full flex justify-center items-center">
                  {item.icon}
                </div>
                <p className="ownership-name m-2 md:mt-4">{item.name}</p>
                <p className="ownership-description text-xs md:tracking-widest md:leading-5">
                  {item.description}
                </p>
              </div>
              {item.idx < iconsArray.length && (
                <div className="ownership-connector hidden md:flex items-center w-20 md:w-28 mt-14 text-gray-300 overflow-hidden">
                  <div className="ownership-connector-inner flex items-center w-full">
                    <span className="text-xs -mr-1">◀</span>

                    <div className="ownership-line flex-1 border-t border-gray-300"></div>

                    <span className="text-xs -ml-1">▶</span>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ownership;
