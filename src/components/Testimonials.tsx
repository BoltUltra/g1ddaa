import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

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
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide, testimonials.length]);

  const nowPlaying = () => {
    toast.success("Playing video");
  };

  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 1000 : -1000, // Changed from x to y
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0, // Changed from x to y
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction < 0 ? 1000 : -1000, // Changed from x to y
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <h1 className="text-center text-4xl font-bold text-[#2B5741] mb-1 milik">
        People Talk
      </h1>
      <div className="h-1 bg-primary w-24 rounded-full mx-auto mb-5" />

      <p className="text-center text-lg mb-12">
        What our customers and partners think about us.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm transition-colors ${
              activeTab === tab
                ? "bg-[#2B5741] text-white"
                : "border border-[#2B5741] text-[#2B5741] hover:bg-[#2B5741]/10"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* Testimonial Container */}
      <div className="relative flex">
        <motion.div
          className="rounded-3xl overflow-hidden border-4 border-primary"
          style={{
            background:
              "linear-gradient(to bottom right, #FFEDCB, #F6FDF4, #FFFFFB)",
          }}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              className="grid md:grid-cols-2 gap-8 md:h-[36rem]"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 }, // Changed from x to y
                opacity: { duration: 0.2 },
              }}
              drag="y" // Changed from "x" to "y"
              dragConstraints={{ top: 0, bottom: 0 }} // Changed from left/right to top/bottom
              dragElastic={1}
              onDragEnd={(_e, { offset, velocity }) => {
                const swipe = swipePower(offset.y, velocity.y); // Changed from offset.x to offset.y

                if (swipe < -swipeConfidenceThreshold) {
                  setCurrentSlide(
                    currentSlide === testimonials.length - 1
                      ? 0
                      : currentSlide + 1
                  );
                } else if (swipe > swipeConfidenceThreshold) {
                  setCurrentSlide(
                    currentSlide === 0
                      ? testimonials.length - 1
                      : currentSlide - 1
                  );
                }
              }}
            >
              <motion.div
                className="sm:p-12 p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.img
                  src={testimonials[currentSlide].img}
                  alt=""
                  className="h-[215px] md:w-[226px] w-full object-cover rounded-2xl mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-3">
                    {testimonials[currentSlide].name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentSlide].position}
                  </p>
                </motion.div>
                <motion.p
                  className="text-gray-800 leading-relaxed h-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {testimonials[currentSlide].text}
                </motion.p>
              </motion.div>

              <div className="relative h-full">
                <motion.img
                  src={testimonials[currentSlide].video}
                  alt="testimonial"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                />
                <motion.button
                  onClick={nowPlaying}
                  className="absolute h-full w-full top-0 left-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src="/icons/play.svg" alt="" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Progress Indicator */}
        <div className="hidden lg:flex flex-col items-center justify-center ml-8">
          {testimonials.map((_, index) => (
            <React.Fragment key={index}>
              <motion.button
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  currentSlide >= index
                    ? "bg-[#2B5741] text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {index + 1}
              </motion.button>
              {index < testimonials.length - 1 && (
                <motion.div
                  className={`w-0.5 h-16 transition-all duration-300 ${
                    currentSlide > index ? "bg-[#2B5741]" : "bg-gray-200"
                  }`}
                  initial={{ height: 0 }}
                  animate={{ height: 64 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialSlider;
