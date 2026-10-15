import beach from "../../assets/home-assets/properties/beach.webp";
import apartment from "../../assets/home-assets/properties/apartment.webp";
import luxury from "../../assets/home-assets/properties/luxury.webp";
import town from "../../assets/home-assets/properties/Sea.webp";
import golf from "../../assets/home-assets/properties/golf.webp";
import villa from "../../assets/home-assets/properties/beachFront.webp";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Properties = () => {
  const propertyRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: propertyRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".property-eyebrow", {
        y: 15,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      })
        .from(
          ".property-heading",
          {
            clipPath: "inset(0 100% 0 0)",
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .from(
          ".property-card",
          {
            y: 35,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .from(
          ".property-image",
          {
            scale: 1.06,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .from(
          ".property-name",
          {
            y: 10,
            opacity: 0,
            duration: 0.3,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.6",
        )
        .from(
          ".property-button",
          {
            y: 10,
            opacity: 0,
            duration: 0.3,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.4",
        );

      const images = gsap.utils.toArray<HTMLImageElement>(".container-img img");

      images.forEach((img) => {
        const wrapper = img.parentElement;

        if (!wrapper) return;

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

        wrapper.addEventListener("mouseenter", enter);
        wrapper.addEventListener("mouseleave", leave);
      });
    },
    { scope: propertyRef },
  );
  const [images, _setImages] = useState([
    {
      img: beach,
      name: "Beach Front",
    },
    {
      img: apartment,
      name: "Apartment",
    },
    {
      img: luxury,
      name: "Luxury",
    },
    {
      img: town,
      name: "Town",
    },
    {
      img: golf,
      name: "Golf",
    },
    {
      img: villa,
      name: "Villa",
    },
  ]);
  return (
    <div id="properties" ref={propertyRef} className="w-full px-6 py-10 md:px-15 isolate">
      <div>
        <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 md:p-12">
          <div className="flex flex-row justify-between items-center gap-4">
            <div>
              <p className="property-eyebrow text-xs md:text-sm font-semibold text-gray-500 tracking-widest">
                PREMIUM PROPERTIES
              </p>
              <h3 className="property-heading text-2xl sm:text-3xl md:text-4xl font-medium font-serif max-w-2xl leading-tight md:leading-18">
                Explore Our Property Collection
              </h3>
            </div>
            <button className="group w-10 h-10 md:w-11 md:h-11 shrink-0 active:scale-95 flex items-center justify-center bg-black text-white rounded-xl text-base transition-all cursor-pointer">
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 transform-gpu gap-6 md:gap-10 mt-8 md:mt-10">
            {images.map((image, index) => {
              return (
                <div
                  key={image.name}
                  className="container-img property-card relative h-64 overflow-hidden rounded-xl transform-gpu will-change-transform"
                >
                  <img
                    src={image.img}
                    alt={image.name}
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    className="property-image absolute inset-0 h-full w-full object-cover transform-gpu will-change-transform"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />
                  <div className="relative z-10 flex h-full items-end p-8">
                    <div>
                      <p className="property-name text-2xl font-bold text-white">
                        {image.name}
                      </p>
                      <button className="property-button group cursor-pointer text-sm font-semibold text-gray-200">
                        View properties{" "}
                        <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
