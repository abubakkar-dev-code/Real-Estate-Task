import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sunset from "../../assets/home-assets/sun-set.webp";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".cta-background", {
        scale: 1.08,
        duration: 1.6,
        ease: "power3.out",
      })
        .from(
          ".cta-eyebrow",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=1",
        )
        .from(
          ".cta-heading",
          {
            clipPath: "inset(0 100% 0 0)",
            duration: 1,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .from(
          ".cta-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".cta-button",
          {
            y: 20,
            scale: 0.9,
            opacity: 0,
            duration: 0.7,
            ease: "back.out(1.5)",
          },
          "-=0.2",
        );
    },
    { scope: ctaRef },
  );

  return (
    <div ref={ctaRef} className="w-full px-6 py-10 md:px-15">
      <div
        className="cta-background  cta-container rounded-3xl bg-cover bg-center bg-no-repeat min-h-100 sm:min-h-105 md:h-115 flex items-center p-6 sm:p-10 md:p-16 lg:p-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0) 100%), url(${sunset})`,
        }}
      >
        <div className="flex flex-col gap-4 max-w-lg text-white">
          <p className="cta-eyebrow text-xs md:text-sm font-semibold tracking-[0.25em] text-gray-200 uppercase">
            YOUR NEXT CHAPTER
          </p>

          <h2 className="cta-heading text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            Ready to invest in Dubai?
          </h2>

          <p className=" cta-description text-sm md:text-base text-gray-200 leading-relaxed max-w-md">
            Get in touch with our team and take the first step towards owning
            your dream property.
          </p>
          <button className="cta-button group mt-2 md:mt-4 px-6 md:px-7 py-3 md:py-3.5 bg-white text-neutral-900 rounded-full font-medium text-sm md:text-base flex items-center gap-3 w-fit shadow-md hover:bg-gray-100 active:scale-95 transition cursor-pointer">
            Contact Us
            <span className="inline-block text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
