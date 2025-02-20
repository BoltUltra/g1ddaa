import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

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

  const ProductCard = ({ product }: { product: any }) => {
    const isImageBottom = product.layout === "imageBottom";

    return (
      <div
        className={`card-shadow rounded-3xl overflow-hidden border-2 border-green-800 ${product.bgColor || "bg-white"}`}
      >
        <div
          className={`flex flex-col ${isImageBottom ? "h-full" : "lg:flex-row"}`}
        >
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <div className="flex flex-wrap gap-4 mt-auto">
              <button className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors flex items-center">
                {product.primaryButton.text}
                <BsFillArrowUpRightCircleFill size={22} className="ml-2" />
              </button>
              {product.secondaryButton && (
                <button className="border-2 border-green-800 text-green-800 px-6 py-2 rounded-full hover:bg-green-50 transition-colors">
                  {product.secondaryButton.text}
                </button>
              )}
            </div>
          </div>
          <div
            className={`${isImageBottom ? "w-full h-64" : "w-full h-[300px]"} relative min-h-[200px]`}
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="section py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-800 milik">Products</h2>
        <div className="h-1 bg-primary w-24 rounded-full mx-auto mb-5" />
        <p className="text-gray-600 max-w-sm mx-auto">
          Get started with one of our carefully crafted products & services.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
