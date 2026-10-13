import beach from "../../assets/home-assets/properties/beach.jpg";
import apartment from "../../assets/home-assets/properties/apartment.jpg";
import luxury from "../../assets/home-assets/properties/luxury.jpg";
import town from "../../assets/home-assets/properties/moo-lo_LLbS1rS0-unsplash.jpg";
import golf from "../../assets/home-assets/properties/golf.jpg";
import villa from "../../assets/home-assets/properties/beachFront.jpg";
import { useState } from "react";
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
    <div className="pw-full px-6 py-10 md:px-15">
      <div className="">
        <div className="bg-white shadow-lg rounded-xl p-8 md:p-12 lg:p-12">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-md font-semibold text-gray-500 tracking-widest">
                PREMIUM PROPERTIES
              </p>
              <h3 className="text-4xl font-medium font-serif max-w-2xl leading-18">
                Explore Our Property Collection
              </h3>
            </div>
            <p className="text-2xl font-extrabold">→</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-14 mt-10">
            {images.map((image) => {
              return (
                <div
                  key={image.name}
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0) 100%), url(${image.img})`,
                  }}
                  className="h-60 bg-cover bg-center rounded-xl p-8 flex items-end"
                >
                  <div>
                    <p className="text-white text-2xl font-bold">
                      {image.name}
                    </p>
                    <p className="text-gray-200 font-semibold text-sm ">
                      View properties <span className="ml-2">→</span>
                    </p>
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
