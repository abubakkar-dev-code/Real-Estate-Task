import { useState } from "react";
import resort from "../../assets/home-assets/Resort.png";
import { IoIosArrowDropdownCircle } from "react-icons/io";
const Faqs = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [dubaiFeatures, _setDubaiFeatures] = useState([
    {
      idx: 1,
      question: "What are the benefits of investing in Dubai real estate?",
      answer:
        "Dubai offers high rental yields, tax advantages, world-class infrastructure and a growing economy..",
    },
    {
      idx: 2,
      question: "Can foreigners buy property in Dubai?",
      answer:
        "Yes, foreigners can buy property in Dubai in designated freehold areas..",
    },
    {
      idx: 3,
      question: "What is the payment plan for off-plan properties?",
      answer:
        "Payment plans are flexible, often 50/50 or 30/70 (developer/buyer) over the construction period.",
    },
    {
      idx: 4,
      question: "How much ROI can I expect from Dubai real estate?",
      answer:
        "ROI typically ranges from 5% to 8% depending on the location and type of property.",
    },
    {
      idx: 5,
      question: "What is the process for purchasing a property?",
      answer:
        "The process includes choosing a property, completing due diligence, and registering the title deed.",
    },
    {
      idx: 6,
      question: "Are there any hidden costs?",
      answer:
        "Common costs include service fees (1-3%), DLD fees (4%), and agency fees (2%).",
    },
    {
      idx: 7,
      question: "Can I get residency with my property purchase?",
      answer:
        "Yes, properties above AED 750K typically qualify for a 2-year renewable investor visa.",
    },
  ]);
  return (
    <div className="w-full px-6 py-10 md:px-15">
      <div className="bg-white shadow-md rounded-xl flex gap-2">
        <div
          className="flex-[40%] bg-cover bg-center rounded-l-xl min-h-96 flex flex-col justify-end px-4 gap-2 text-white items-center pb-12"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${resort})`,
          }}
        >
          <div className="flex flex-col gap-4">
            <p className="text-sm max-w-sm text-gray-400 font-semibold tracking-widest">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h3 className="text-5xl  font-serif max-w-sm leading-15">
              Find answers to your questions
            </h3>
            <p className="text-sm text-gray-400 font-semibold tracking-widest  max-w-sm">
              Everything you need to know about investing in Dubai real estate.
            </p>
          </div>
        </div>
        <div className="flex-[60%] p-8 md:p-10 lg:p-12 flex flex-col">
          <div>
            {dubaiFeatures.map((item) => (
              <div
                key={item.idx}
                className="bg-white py-8 px-6 shadow-md rounded-xl mt-5"
              >
                <div className="flex justify-between items-center">
                  <div>{item.question}</div>
                  <IoIosArrowDropdownCircle
                    className="text-2xl"
                    onClick={() =>
                      setOpenId(openId === item.idx ? null : item.idx)
                    }
                  />
                </div>
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openId === item.idx
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <span className="inline-block w-full border-t border-gray-200"></span>
                    <p className="text-sm px-2 mt-3 text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
