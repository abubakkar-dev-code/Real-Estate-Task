import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const OverView = () => {
  const overViewRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: overViewRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".overview-content", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      })
        .from(
          ".overview-eyebrow",
          {
            y: 15,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .from(
          ".overview-heading",
          {
            clipPath: "inset(0 100% 0 0)",
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .from(
          ".overview-description",
          {
            y: 15,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .from(
          ".overview-stat",
          {
            y: 20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .from(
          ".overview-stat-title",
          {
            y: 10,
            opacity: 0,
            duration: 0.2,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .from(
          ".overview-stat-description",
          {
            y: 10,
            opacity: 0,
            duration: 0.2,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.2",
        );

      const counters = gsap.utils.toArray<HTMLElement>(".overview-number");

      counters.forEach((counter) => {
        const value = Number(counter.dataset.value);
        const suffix = counter.dataset.suffix || "";

        const obj = { number: 0 };

        tl.to(
          obj,
          {
            number: value,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              counter.textContent = `${Math.round(obj.number)}${suffix}`;
            },
          },
          "<",
        );
      });
    },
    { scope: overViewRef },
  );
  return (
    <section id="overview" ref={overViewRef} className="w-full py-10 px-6 md:px-15">
      <div className="bg-[#FAF8F5] border border-[#EFECE6] rounded-3xl p-8 md:p-12 lg:p-14 shadow-sm">
        <div className="overview-content flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-10 border-b border-[#E8E2D8]">
          <div className="max-w-xl">
            <p className="overview-eyebrow text-xs md:text-sm font-semibold tracking-[0.25em] text-[#A88253] uppercase mb-4">
              DUBAI AT A GLANCE
            </p>
            <h2 className="overview-heading text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-900 leading-tight">
              A thriving market,
              <br />
              full of opportunities.
            </h2>
          </div>
          <div className="overview-description max-w-md">
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
              Dubai continues to attract global investors, tourists, and
              residents with its strong economy, world-class infrastructure and
              unmatched lifestyle.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y  md:divide-y-0 md:divide-x divide-[#E8E2D8] pt-10 gap-8 md:gap-0">
          <div className="overview-stat flex items-start gap-4 md:pr-8">
            <div className="w-12 h-12 rounded-full bg-[#F4ECE1] flex items-center justify-center shrink-0 text-[#8D683A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className=" overview-stat flex flex-col">
              <span
                data-value="33"
                data-suffix="%"
                className="overview-number text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight"
              >
                0%
              </span>

              <span className="overview-stat-title text-sm font-semibold text-neutral-800 mt-2">
                Tourism
              </span>
              <span className="overview-stat-description text-xs text-neutral-500 mt-0.5">
                International visitors annually
              </span>
            </div>
          </div>
          <div className="overview-stat flex items-start gap-4 md:px-8 pt-6 md:pt-0">
            <div className="w-12 h-12 rounded-full bg-[#F4ECE1] flex items-center justify-center shrink-0 text-[#8D683A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M12 2c1 3 4 5 4 9a6 6 0 0 1-12 0c0-4 3-6 4-9 1 2 2 3 4 0z" />
              </svg>
            </div>
            <div className=" overview-stat flex flex-col">
              <span
                data-value="167"
                data-suffix=""
                className="overview-number text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight"
              >
                0
              </span>

              <span className="overview-stat-title text-sm font-semibold text-neutral-800 mt-2">
                Customer
              </span>
              <span className="overview-stat-description text-xs text-neutral-500 mt-0.5">
                Annual property growth
              </span>
            </div>
          </div>
          <div className="overview-stat flex items-start gap-4 md:pl-8 pt-6 md:pt-0">
            <div className="w-12 h-12 rounded-full bg-[#F4ECE1] flex items-center justify-center shrink-0 text-[#8D683A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 -rotate-45"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                data-value="167"
                data-suffix=""
                className="overview-number text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight"
              >
                0
              </span>

              <span className="overview-stat-title text-sm font-semibold text-neutral-800 mt-2">
                Exclusive Premium
              </span>
              <span className="overview-stat-description text-xs text-neutral-500 mt-0.5">
                Residential properties
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverView;
