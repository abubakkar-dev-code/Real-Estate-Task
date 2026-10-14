import React from "react";
import {
  FaCalendarCheck,
  FaRegMoneyBillAlt,
  // FaArrowRight,
} from "react-icons/fa";
import OwnerShip from "../../assets/home-assets/Ownership.webp";
import { GiNetworkBars } from "react-icons/gi";

const Ownership = () => {
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
    <div className="w-full py-5 md:py-10 px-6 md:px-15">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${OwnerShip})`,
        }}
        className="min-h-150 md:h-185 w-full bg-cover bg-center rounded-3xl -z-10 flex flex-col gap-6 md:gap-10 space-y-8 md:space-y-16 text-white items-center text-center pt-12 pb-12 md:pt-30 md:pb-0 px-4 md:px-0"
      >
        <div className="text-center flex flex-col gap-3 md:gap-5">
          <p className="text-xs md:text-sm font-semibold text-white tracking-[0.25em]">
            THE SMARTER WAY
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-widest">
            Path to Smart Ownership
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 lg:gap-x-14 items-center md:items-start">
          {iconsArray.map((item) => (
            <React.Fragment key={item.idx}>
              <div className="text-center flex flex-col gap-2 md:gap-4 items-center max-w-55">
                <div className="w-14 mt-4 h-14 lg:w-28 lg:h-28 bg-transparent border border-gray-300 rounded-full flex justify-center items-center">
                  {item.icon}
                </div>
                <p className="m-2 md:mt-4">{item.name}</p>
                <p className="text-xs md:tracking-widest md:leading-5">
                  {item.description}
                </p>
              </div>
              {item.idx < iconsArray.length && (
                <div className=" hidden md:flex items-center w-20 md:w-28 mt-14 text-gray-300">
                  <span className="text-xs -mr-1">◀</span>

                  <div className="flex-1 border-t border-gray-300"></div>

                  <span className="text-xs -ml-1">▶</span>
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
