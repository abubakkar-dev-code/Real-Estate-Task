import React from "react";
import luxuryVilla from "../../assets/home-assets/villas/Luxury-villa.jpg";
import apartment from "../../assets/home-assets/villas/downTown.jpg";
import beachfront from "../../assets/home-assets/villas/beach-front.jpg";

const FeaturedProperties = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex-[46%] py-18 px-15 flex flex-col gap-5">
          <p className="text-lg font-semibold tracking-widest">
            FEATURED PROPERTIES
          </p>
          <h1 className="font-medium font-serif text-6xl leading-20">
            Luxury Living
            <br /> in the Heart of Dubai
          </h1>
          <p className="font-medium text-gray-600 leading-7 w-full text-lg">
            From modern apartments to exclusive villas,
            <br />
            find your perfect property in Dubai
          </p>
          <button className="py-4 px-6 border border-black w-fit mt-5 rounded-4xl">
            View All Properties
          </button>
        </div>
        <div className="flex-[54%]  py-18 px-15 grid grid-cols-2 gap-8">
          <div>
            <img
              src={luxuryVilla}
              alt="luxury-villa"
              className="w-full h-140 object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <img
                className="w-full h-64 object-cover rounded-lg"
                src={apartment}
                alt="apartment-img"
              />
            </div>
            <div>
              <img
                className="w-full h-64 object-cover rounded-lg"
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
