import React from "react";

const OverView = () => {
  return (
    <section className="w-full py-10 px-6 md:px-15">
      <div className="bg-[#FAF8F5] border border-[#EFECE6] rounded-3xl p-8 md:p-12 lg:p-14 shadow-sm">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-10 border-b border-[#E8E2D8]">
          <div className="max-w-xl">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#A88253] uppercase mb-4">
              DUBAI AT A GLANCE
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-900 leading-tight">
              A thriving market,
              <br />
              full of opportunities.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
              Dubai continues to attract global investors, tourists, and
              residents with its strong economy, world-class infrastructure and
              unmatched lifestyle.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y  md:divide-y-0 md:divide-x divide-[#E8E2D8] pt-10 gap-8 md:gap-0">
          <div className="flex items-start gap-4 md:pr-8">
            <div className="w-12 h-12 rounded-full bg-[#F4ECE1] flex items-center justify-center shrink-0 text-[#8D683A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">
                33+
              </span>
              <span className="text-sm font-semibold text-neutral-800 mt-2">
                Tourism
              </span>
              <span className="text-xs text-neutral-500 mt-0.5">
                International visitors annually
              </span>
            </div>
          </div>
          <div className="flex items-start gap-4 md:px-8 pt-6 md:pt-0">
            <div className="w-12 h-12 rounded-full bg-[#F4ECE1] flex items-center justify-center shrink-0 text-[#8D683A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M12 2c1 3 4 5 4 9a6 6 0 0 1-12 0c0-4 3-6 4-9 1 2 2 3 4 0z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">
                33%
              </span>
              <span className="text-sm font-semibold text-neutral-800 mt-2">
                Customer
              </span>
              <span className="text-xs text-neutral-500 mt-0.5">
                Annual property growth
              </span>
            </div>
          </div>
          <div className="flex items-start gap-4 md:pl-8 pt-6 md:pt-0">
            <div className="w-12 h-12 rounded-full bg-[#F4ECE1] flex items-center justify-center shrink-0 text-[#8D683A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 -rotate-45"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">
                167
              </span>
              <span className="text-sm font-semibold text-neutral-800 mt-2">
                Exclusive Premium
              </span>
              <span className="text-xs text-neutral-500 mt-0.5">
                Residential properties
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverView;
