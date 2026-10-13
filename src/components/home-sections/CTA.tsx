import sunset from "../../assets/home-assets/sun-set.png";

const CTA = () => {
  return (
    <div className="w-full px-6 py-10 md:px-15">
      <div
        className="rounded-3xl bg-cover bg-center bg-no-repeat min-h-[420px] md:h-[460px] flex items-center p-8 md:p-16 lg:p-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0) 100%), url(${sunset})`,
        }}
      >
        <div className="flex flex-col gap-4 max-w-lg text-white">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-gray-200 uppercase">
            YOUR NEXT CHAPTER
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            Ready to invest in Dubai?
          </h2>

          <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-md">
            Get in touch with our team and take the first step towards owning
            your dream property.
          </p>
          <button className="mt-4 px-7 py-3.5 bg-white text-neutral-900 rounded-full font-medium text-sm md:text-base flex items-center gap-3 w-fit shadow-md hover:bg-gray-100 transition cursor-pointer">
            Contact Us
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
