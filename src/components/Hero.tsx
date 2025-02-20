import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { MdOutlineWavingHand } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const waveVariants = {
    wave: {
      rotate: [0, 10, -10, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  return (
    <motion.section
      className="section relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="rounded-3xl p-[2px] bg-gradient-to-r from-[#EAA315] to-[#335F32] absolute top-16 right-10 md:block hidden w-72 text-sm"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.div
          className="rounded-[calc(1.5rem-2px)] p-5 flex items-start gap-3"
          whileHover={{ scale: 1.02 }}
          style={{
            background:
              "linear-gradient(to bottom right, #FFEDCB, #F6FDF4, #F6FDF4, #F6FDF4, #FFFFFB, #FFFFFB, #FFFFFB)",
          }}
        >
          <motion.span variants={waveVariants} animate="wave">
            <MdOutlineWavingHand size={26} />
          </motion.span>
          <div>
            <motion.h3
              className="font-bold mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              You're Now on Giddaa <span className="text-primary">Buy</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Find and buy your dream home on various purchase plans.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <motion.div
          className="flex items-center justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="flex flex-col sm:flex-row md:gap-3 justify-between items-center mb-12 text-sm bg-cream-50 rounded-full px-6 py-3 mx-auto border bg-gradient-to-r from-[#FFFFFB] via-[#F6FDF4] to-[#FFEDCB]"
            whileHover={{ scale: 1.02 }}
          >
            <p className="font-medium">WE SERVE NIGERIANS ACROSS THE GLOBE</p>
            <div className="py-5 w-0.5 bg-gray-200 md:block hidden"></div>
            <motion.div
              className="flex items-center mt-2 sm:mt-0 gap-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span>👀</span>
              <p>10,000 PEOPLE HAVE SEEN THIS</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl mx-auto milik md:leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find a Home to Buy In Nigeria On Various{" "}
            <motion.span
              className="text-primary"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Purchase Plans.
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg mb-4 max-w-3xl mx-auto md:leading-loose"
            variants={itemVariants}
          >
            We have taken real estate beyond
            <motion.span
              className="underline font-black underline-offset-4 mx-1"
              whileHover={{ scale: 1.1 }}
            >
              mere listings
            </motion.span>
            . Conduct secure real estate transactions on our platform trusted by
            more than
            <motion.span
              className="font-black mx-1"
              whileHover={{ scale: 1.1 }}
            >
              4,000 customers, and 30+ companies
            </motion.span>
          </motion.p>

          <motion.button
            className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary transition-colors flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Products
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <BsFillArrowDownCircleFill size={22} className="ml-2" />
            </motion.span>
          </motion.button>
        </motion.div>

        <motion.div
          className="md:grid md:flex-none flex items-center overflow-x-auto grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
          variants={containerVariants}
        >
          {[
            "/images/hero1.webp",
            "/images/hero2.webp",
            "/images/hero3.webp",
          ].map((src, index) => (
            <motion.div
              key={index}
              className="rounded-3xl overflow-hidden h-64 md:h-80"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={src}
                alt={`Hero image ${index + 1}`}
                className="md:w-full h-[300px] w-[300px] md:h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
