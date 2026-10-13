import { useState } from "react";
import dubaiImage from "../../assets/home-assets/AL-burjh.jpg";
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
    <div className="w-full px-6 py-10 md:px-15">
      <div className="bg-white shadow-md rounded-xl flex gap-12">
        <div className="flex-[50%] ">
          <img
            className="bg-cover bg-center w-full h-full rounded-l-xl"
            src={dubaiImage}
          />
        </div>
        <div className="flex-[50%] p-8 md:p-12 lg:p-14 flex flex-col gap-5">
          <p className="text-md font-semibold tracking-widest">
            A GLOBAL DESTINATION
          </p>
          <h3 className="text-6xl font-medium font-serif max-w-2xl leading-18">
            Why Dubai Stands Unrivalled?
          </h3>
          <div>
            {dubaiFeatures.map((item) => (
              <div
                key={item.idx}
                className="flex mt-14 items-center gap-14 border border-[#E8E2D8] px-2 py-2 rounded-lg"
              >
                <div className="border rounded-full w-20 h-20 flex items-center justify-center bg-[#F4ECE1]">
                  icon
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
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
