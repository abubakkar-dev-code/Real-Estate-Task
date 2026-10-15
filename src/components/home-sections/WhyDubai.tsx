import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dubaiImage from "../../assets/home-assets/AL-burjh.png";

gsap.registerPlugin(ScrollTrigger);
const WhyDubai = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
      tl.from(".dubai-image", {
        clipPath: "inset(0 100% 0 0)",
        scale: 1.12,
        duration: 1.4,
        ease: "power3.out",
      })
        .from(
          ".dubai-eyebrow",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .from(
          ".dubai-heading",
          {
            clipPath: "inset(0 100% 0 0)",
            duration: 1,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .from(
          ".dubai-feature",
          {
            x: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".dubai-feature-icon",
          {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "back.out(1.7)",
          },
          "-=0.5",
        )
        .from(
          ".dubai-feature-name",
          {
            x: 15,
            opacity: 0,
            duration: 0.4,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .from(
          ".dubai-feature-description",
          {
            y: 8,
            opacity: 0,
            duration: 0.4,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.3",
        );
      const image = document.querySelector(".dubai-image") as HTMLElement;
      const wrapper = image.parentElement;
      if (image && wrapper) {
        wrapper.addEventListener("mouseenter", () => {
          gsap.to(image, {
            scale: 1.08,
            duration: 0.8,
            ease: "power3.out",
          });
        });

        wrapper.addEventListener("mouseleave", () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          });
        });
      }
    },
    { scope: containerRef },
  );
  const [dubaiFeatures, _setDubaiFeatures] = useState([
    {
      idx: 1,
      name: "World-class lifestyle",
      description: "Luxury, culture and endless experiences.",
    },
    {
      idx: 2,
      name: "Strategic location",
      description: "Gateway between Europe, Asia and Africa.",
    },
    {
      idx: 3,
      name: "Tax advanteages",
      description: "No personal income tax.",
    },
    {
      idx: 4,
      name: "Strong economy",
      description: "A stable and investor-friendly market.",
    },
  ]);
  return (
    <div ref={containerRef} className="w-full px-6 py-10 md:px-15 sm:w-full">
      <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="conatiner-img w-full md:w-1/2 md:flex-[50%]">
          <img
            className="dubai-image w-full h-64 sm:h-80 md:h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
            src={dubaiImage}
            loading="lazy"
            decoding="async"
            alt="Dubai Skyline"
          />
        </div>
        <div className="w-full md:w-1/2 md:flex-[50%] p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col gap-4 md:gap-5">
          <p className="dubai-eyebrow text-xs sm:text-sm font-semibold tracking-widest text-slate-500">
            A GLOBAL DESTINATION
          </p>
          <h3 className="dubai-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-serif max-w-2xl leading-tight md:leading-18">
            Why Dubai Stands Unrivalled?
          </h3>
          <div className="flex flex-col gap-4 md:gap-6 mt-4">
            {dubaiFeatures.map((item) => (
              <div
                key={item.idx}
                className="dubai-feature flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 border border-[#E8E2D8] p-4 rounded-lg"
              >
                <div className="dubai-feature-icon border rounded-full w-14 h-14 md:w-16 md:h-16 shrink-0 flex items-center justify-center bg-[#F4ECE1] text-xs font-semibold text-slate-700">
                  icon
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="dubai-feature-name font-semibold text-slate-900 text-base">
                    {item.name}
                  </h3>
                  <p className="dubai-feature-description text-sm text-slate-500 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDubai;
