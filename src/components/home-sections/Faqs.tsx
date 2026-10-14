import { useState } from "react";
import resort from "../../assets/home-assets/Resort.webp";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Faqs = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const [dubaiFeatures, _setDubaiFeatures] = useState([
    {
      idx: 1,
      question: "What are the benefits of investing in Dubai real estate?",
      answer:
        "Dubai offers high rental yields, tax advantages, world-class infrastructure and a growing economy.",
    },
    {
      idx: 2,
      question: "Can foreigners buy property in Dubai?",
      answer:
        "Yes, foreigners can buy property in Dubai in designated freehold areas.",
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
    <div className="w-full px-4 py-8 sm:px-6 sm:py-10 md:px-15">
      <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row gap-0">
        <div
          className="
            w-full md:w-2/5
            min-h-105
            sm:min-h-112.5
            md:min-h-137.5
            bg-cover bg-center
            rounded-t-xl md:rounded-l-xl md:rounded-t-none
            flex flex-col justify-end
            px-5 sm:px-8 md:px-10
            pb-8 sm:pb-10 md:pb-12
            text-white
          "
          style={{
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(0,0,0,0.25),
              rgba(0,0,0,0.55)
            ), url(${resort})`,
          }}
        >
          <div className="flex flex-col gap-3 sm:gap-4">
            <p className="text-[10px] sm:text-xs md:text-sm max-w-sm text-gray-300 font-semibold tracking-[0.2em]">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h3
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-serif
                max-w-sm
                leading-tight
              "
            >
              Find answers to your questions
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 font-semibold tracking-wide max-w-sm leading-relaxed">
              Everything you need to know about investing in Dubai real estate.
            </p>
          </div>
        </div>
        <div
          className="
            w-full md:w-3/5
            p-4
            sm:p-6
            md:p-8
            lg:p-12
            flex flex-col
          "
        >
          <div className="w-full">
            {dubaiFeatures.map((item) => (
              <div
                key={item.idx}
                className="
                  bg-white
                  py-5
                  sm:py-6
                  md:py-8
                  px-4
                  sm:px-5
                  md:px-6
                  shadow-md
                  rounded-xl
                  mt-4
                  sm:mt-5
                  cursor-pointer
                "
                onClick={() => setOpenId(openId === item.idx ? null : item.idx)}
              >
                {/* Question */}
                <div className="flex justify-between items-center gap-4">
                  <div
                    className="
                      text-sm
                      sm:text-base
                      md:text-lg
                      font-medium
                      leading-relaxed
                    "
                  >
                    {item.question}
                  </div>

                  <IoIosArrowDropdownCircle
                    className="
                      text-2xl
                      sm:text-3xl
                      shrink-0
                    "
                  />
                </div>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    openId === item.idx
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4">
                      <span className="inline-block w-full border-t border-gray-200"></span>

                      <p
                        className="
                          text-xs
                          sm:text-sm
                          px-1
                          sm:px-2
                          mt-3
                          text-gray-600
                          leading-relaxed
                        "
                      >
                        {item.answer}
                      </p>
                    </div>
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
