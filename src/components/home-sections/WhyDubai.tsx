import { useState } from "react";
import dubaiImage from "../../assets/home-assets/AL-burjh.png";
const WhyDubai = () => {
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
    <div className="w-full px-6 py-10 md:px-15 sm:w-full">
      <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="w-full md:w-1/2 md:flex-[50%]">
          <img
            className="w-full h-64 sm:h-80 md:h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
            src={dubaiImage}
            loading="lazy"
            decoding="async"
            alt="Dubai Skyline"
          />
        </div>
        <div className="w-full md:w-1/2 md:flex-[50%] p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col gap-4 md:gap-5">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-slate-500">
            A GLOBAL DESTINATION
          </p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-serif max-w-2xl leading-tight md:leading-18">
            Why Dubai Stands Unrivalled?
          </h3>
          <div className="flex flex-col gap-4 md:gap-6 mt-4">
            {dubaiFeatures.map((item) => (
              <div
                key={item.idx}
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 border border-[#E8E2D8] p-4 rounded-lg"
              >
                <div className="border rounded-full w-14 h-14 md:w-16 md:h-16 shrink-0 flex items-center justify-center bg-[#F4ECE1] text-xs font-semibold text-slate-700">
                  icon
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-slate-900 text-base">{item.name}</h3>
                  <p className="text-sm text-slate-500 mt-0.5">{item.description}</p>
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
