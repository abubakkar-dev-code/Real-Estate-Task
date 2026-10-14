import beach from "../../assets/home-assets/properties/beach.webp";
import apartment from "../../assets/home-assets/properties/apartment.webp";
import luxury from "../../assets/home-assets/properties/luxury.webp";
import town from "../../assets/home-assets/properties/Sea.webp";
import golf from "../../assets/home-assets/properties/golf.webp";
import villa from "../../assets/home-assets/properties/beachFront.webp";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
const Properties = () => {
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
    <div className="w-full px-6 py-10 md:px-15 isolate">
      <div className="">
        <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 md:p-12">
          <div className="flex flex-row justify-between items-center gap-4">
            <div>
              <p className="text-xs md:text-sm font-semibold text-gray-500 tracking-widest">
                PREMIUM PROPERTIES
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium font-serif max-w-2xl leading-tight md:leading-18">
                Explore Our Property Collection
              </h3>
            </div>
            <button className="group w-10 h-10 md:w-11 md:h-11 shrink-0 active:scale-95 flex items-center justify-center bg-black text-white rounded-xl text-base transition-all cursor-pointer">
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 transform-gpu gap-6 md:gap-10 mt-8 md:mt-10">
            {images.map((image) => {
              return (
                <div
                  key={image.name}
                  className="relative h-64 overflow-hidden rounded-xl"
                >
                  <img
                    src={image.img}
                    alt={image.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

                  <div className="relative z-10 flex h-full items-end p-8">
                    <div>
                      <p className="text-2xl font-bold text-white">
                        {image.name}
                      </p>

                      <button className="group cursor-pointer text-sm font-semibold text-gray-200">
                        View properties <span className=" inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
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
