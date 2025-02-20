import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      title: "Buy",
      description:
        "Explore and purchase your home from top developers & vetted property sellers (With land titles) on various purchase plans and long term loan options.",
      primaryButton: { text: "Find a Home to Buy", href: "#" },
      imageUrl: "/images/buy.webp",
      layout: "imageRight",
    },
    {
      title: "Short Lets",
      description:
        "Find your next getaway spot, staycation, or business trip spot. Avoid extra charges, find detailed information, and reserve a short let.",
      primaryButton: { text: "Reserve a Short Let", href: "#" },
      imageUrl: "/images/shortlets.webp",
      layout: "imageRight",
      bgColor: "bg-[##F9F9F0]",
    },
    {
      title: "Invest",
      description:
        "Become a real estate investor without breaking the bank. Invest in real estate assets and grow your portfolio with friends and family (in a private investment group) or with the public (fractionally, like a stock exchange).",
      primaryButton: { text: "Find an Investment", href: "#" },
      secondaryButton: { text: "Learn More", href: "#" },
      imageUrl: "/images/invest.webp",
      layout: "imageBottom",
      bgColor: "bg-[#FFFFE8]",
    },
    {
      title: "Sell",
      description:
        "Sell your property with us, a company and partner you can trust. Our simple process makes it easy for sellers to list their properties and sell their properties on various purchase plans to the 1000's of potential buyers who visit Giddaa monthly.",
      primaryButton: { text: "Sell Your Property", href: "#" },
      secondaryButton: { text: "Talk To Our Team", href: "#" },
      imageUrl: "/images/sell.webp",
      layout: "imageBottom",
    },
    {
      title: "Services",
      description:
        "Explore and purchase homes from top developers & vetted property sellers (With land titles) on various purchase plans.",
      primaryButton: { text: "Find a Home to Buy", href: "#" },
      imageUrl: "/images/services.webp",
      layout: "imageRight",
    },
    {
      title: "Enterprise",
      description:
        "We've built solutions & tools for property developers, and property managers specifically operating in the Nigerian Market - Our solutions fit like a glove.",
      primaryButton: { text: "Learn More", href: "#" },
      imageUrl: "/images/enterprise.webp",
      layout: "imageRight",
      bgColor: "bg-[#FFFDFA]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const ProductCard = ({ product }: { product: any }) => {
    const isImageBottom = product.layout === "imageBottom";

    return (
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className={`card-shadow rounded-3xl overflow-hidden border-2 border-green-800 ${
          product.bgColor || "bg-white"
        }`}
      >
        <div
          className={`flex flex-col ${
            isImageBottom ? "h-full" : "lg:flex-row"
          }`}
        >
          <motion.div
            className="p-8 flex flex-col flex-grow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h3
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {product.title}
            </motion.h3>
            <motion.p
              className="text-gray-700 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {product.description}
            </motion.p>
            <div className="flex flex-wrap gap-4 mt-auto">
              <motion.button
                className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {product.primaryButton.text}
                <motion.div
                  className="ml-2"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <BsFillArrowUpRightCircleFill size={22} />
                </motion.div>
              </motion.button>
              {product.secondaryButton && (
                <motion.button
                  className="border-2 border-green-800 text-green-800 px-6 py-2 rounded-full hover:bg-green-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {product.secondaryButton.text}
                </motion.button>
              )}
            </div>
          </motion.div>
          <motion.div
            className={`${
              isImageBottom ? "w-full h-64" : "w-full h-[300px]"
            } relative min-h-[200px] overflow-hidden`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      className="section py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center mb-12"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-bold text-green-800 milik">Products</h2>
        <motion.div
          className="h-1 bg-primary w-24 rounded-full mx-auto mb-5"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.p
          className="text-gray-600 max-w-sm mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Get started with one of our carefully crafted products & services.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Products;
