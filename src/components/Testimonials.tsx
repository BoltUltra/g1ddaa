import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const TestimonialSlider = () => {
  const [activeTab, setActiveTab] = useState("SHORT LETS");
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = [
    "BUY",
    "SHORT LETS",
    "INVEST",
    "SELL",
    "SERVICES",
    "ENTERPRISE",
  ];

  const testimonials = [
    {
      id: 1,
      img: "/images/testimonial-img.png",
      name: "Chima Okereke",
      position: "DIRECTOR OF SALES AT BILAAD REALTY",
      text: "I had an outstanding experience with the short-let booking service! From start to finish, the team made the entire process smooth and easy. I needed help finding the perfect place for my stay, and they went above and beyond to locate a property that fit all my requirements. Once I confirmed and made the payment, they handled the reservation with great efficiency.",
      video: "/images/image.jpeg",
    },
    {
      id: 2,
      img: "/images/testimonial-img.png",
      name: "Jane Doe",
      position: "CEO AT PROPERTY LINK",
      text: "This platform is truly a game-changer! The efficiency and dedication of the team ensured a seamless transaction for my real estate needs.",
      video: "/images/image.jpeg",
    },
    {
      id: 3,
      img: "/images/testimonial-img.png",
      name: "John Smith",
      position: "INVESTMENT ANALYST AT PRIME PROPERTIES",
      text: "I was thoroughly impressed by the professionalism and support I received. The investment opportunities provided were top-notch!",
      video: "/images/image.jpeg",
    },
    {
      id: 4,
      img: "/images/testimonial-img.png",
      name: "Chima Okereke",
      position: "DIRECTOR OF SALES AT BILAAD REALTY",
      text: "I had an outstanding experience with the short-let booking service! From start to finish, the team made the entire process smooth and easy.",
      video: "/images/image.jpeg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide, testimonials.length]);

  const nowPlaying = () => {
    toast.success("Playing video");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-center text-4xl font-bold text-[#2B5741] mb-8">
        People Talk
      </h1>
      <p className="text-center text-lg mb-12">
        What our customers and partners think about us.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm transition-colors ${activeTab === tab ? "bg-[#2B5741] text-white" : "border border-[#2B5741] text-[#2B5741] hover:bg-[#2B5741]/10"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Testimonial Container */}
      <div className="relative flex">
        <div
          className="rounded-3xl overflow-hidden border-4 border-primary"
          style={{
            background:
              "linear-gradient(to bottom right, #FFEDCB, #F6FDF4, #FFFFFB)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 md:h-[36rem]">
            <div className="sm:p-12 p-8">
              <img
                src={testimonials[currentSlide].img}
                alt=""
                className="h-[215px] md:w-[226px] w-full object-cover rounded-2xl mb-4"
              />
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">
                  {testimonials[currentSlide].name}
                </h3>
                <p className="text-sm text-gray-600">
                  {testimonials[currentSlide].position}
                </p>
              </div>
              <p className="text-gray-800 leading-relaxed h-40">
                {testimonials[currentSlide].text}
              </p>
            </div>

            <div className="relative h-full">
              <img
                src={testimonials[currentSlide].video}
                alt="testimonial"
                className="w-full h-full  object-cover"
              />
              <button
                onClick={nowPlaying}
                className="absolute h-full w-full top-0 left-0 flex items-center justify-center"
              >
                <img src="/icons/play.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="hidden lg:flex flex-col items-center justify-center ml-8">
          {testimonials.map((_, index) => (
            <React.Fragment key={index}>
              <button
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${currentSlide >= index ? "bg-[#2B5741] text-white" : "bg-gray-200 text-gray-600"}`}
                onClick={() => setCurrentSlide(index)}
              >
                {index + 1}
              </button>
              {index < testimonials.length - 1 && (
                <div
                  className={`w-0.5 h-16 transition-all duration-300 ${currentSlide > index ? "bg-[#2B5741]" : "bg-gray-200"}`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
