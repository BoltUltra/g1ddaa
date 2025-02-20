import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { MdOutlineWavingHand } from "react-icons/md";

const Hero = () => {
  return (
    <section className="section relative">
      <div className="rounded-3xl p-[2px] bg-gradient-to-r from-[#EAA315] to-[#335F32] absolute top-16 right-10 md:block hidden w-72 text-sm">
        <div
          className="rounded-[calc(1.5rem-2px)] p-5 flex items-start gap-3"
          style={{
            background:
              "linear-gradient(to bottom right, #FFEDCB, #F6FDF4, #F6FDF4, #F6FDF4, #FFFFFB, #FFFFFB, #FFFFFB)",
          }}
        >
          <span className="">
            <MdOutlineWavingHand size={26} />
          </span>
          <div>
            <h3 className="font-bold mb-1">
              You’re Now on Giddaa <span className="text-primary">Buy</span>
            </h3>
            <p>Find and buy your dream home on various purchase plans.</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        {/* Top Banner */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col sm:flex-row md:gap-3 justify-between items-center mb-12 text-sm bg-cream-50 rounded-full px-6 py-3 mx-auto border bg-gradient-to-r from-[#FFFFFB] via-[#F6FDF4] to-[#FFEDCB]">
            <p className="font-medium">WE SERVE NIGERIANS ACROSS THE GLOBE</p>
            <div className="py-5 w-0.5 bg-gray-200 md:block hidden"></div>
            <div className="flex items-center mt-2 sm:mt-0 gap-2">
              <span>👀</span>
              <p>10,000 PEOPLE HAVE SEEN THIS</p>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl mx-auto milik md:leading-snug">
            Find a Home to Buy In Nigeria On Various{" "}
            <span className="text-primary">Purchase Plans.</span>
          </h1>

          <p className="text-lg mb-4 max-w-3xl mx-auto md:leading-loose">
            We have taken real estate beyond
            <span className="underline font-black underline-offset-4 mx-1">
              mere listings
            </span>
            . Conduct secure real estate transactions on our platform trusted by
            more than
            <span className="font-black mx-1">
              4,000 customers, and 30+ companies
            </span>
          </p>

          <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary transition-colors flex items-center mx-auto">
            Explore Our Products
            <BsFillArrowDownCircleFill size={22} className="ml-2" />
          </button>
        </div>

        {/* Image Gallery */}
        <div className="md:grid md:flex-none flex items-center overflow-x-auto grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="rounded-3xl overflow-hidden h-64 md:h-80">
            <img
              src="/images/hero1.webp"
              alt="Modern kitchen interior"
              className="md:w-full h-[300px] w-[300px] md:h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden h-64 md:h-80">
            <img
              src="/images/hero2.webp"
              alt="Cozy living room"
              className="md:w-full h-[300px] w-[300px] md:h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden h-64 md:h-80">
            <img
              src="/images/hero3.webp"
              alt="Bright dining area"
              className="md:w-full h-[300px] w-[300px] md:h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
