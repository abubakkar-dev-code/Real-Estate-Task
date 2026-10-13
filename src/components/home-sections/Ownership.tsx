import React from "react";
import {
  FaCalendarCheck,
  FaRegMoneyBillAlt,
  FaArrowRight,
} from "react-icons/fa";
import OwnerShip from "../../assets/home-assets/Ownership.jpg";
import { GiNetworkBars } from "react-icons/gi";

const Ownership = () => {
  const iconsArray = [
    {
      idx: 1,
      name: "Low initial payment",
      description: "Start your property journey with flexible entry point.",
      icon: <FaRegMoneyBillAlt className="text-5xl" />,
    },
    {
      idx: 2,
      name: "Flexible Installments",
      description:
        "Choose a payment structure designed around your investment.",
      icon: <FaCalendarCheck className="text-5xl" />,
    },
    {
      idx: 3,
      name: "Rental Income",
      description: "Build long‑term value through Dubai’s property market.",
      icon: <GiNetworkBars className="text-5xl" />,
    },
  ];
  return (
    <div className="w-full py-10 px-6 md:px-15">
      <div
        style={{
          backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${OwnerShip})`,
        }}
        className="h-185 w-full bg-cover bg-center  rounded-3xl -z-10 flex flex-col gap-10 space-y-16 text-white items-center text-center  pt-30"
      >
        <div className="text-center flex flex-col gap-5">
          <p className="text-sm font-semibold text-white tracking-[0.25em]">
            THE SMARTER WAY
          </p>
          <h3 className="text-4xl font-serif text-white tracking-widest">
            Path to Smart Ownership
          </h3>
        </div>
        <div className="flex gap-x-14 items-start">
          {iconsArray.map((item) => (
            <React.Fragment key={item.idx}>
              <div className="text-center flex flex-col gap-4 items-center max-w-55">
                <div className="w-28 h-28 bg-transparent border border-gray-300 rounded-full flex justify-center items-center">
                  {item.icon}
                </div>
                <p className="mt-4">{item.name}</p>
                <p className="text-xs tracking-widest leading-5">
                  {item.description}
                </p>
              </div>
              {item.idx < iconsArray.length && (
                <div className="flex items-center w-20 md:w-28 mt-14 text-gray-300">
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
