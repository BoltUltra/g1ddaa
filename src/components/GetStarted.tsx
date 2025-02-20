import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const GetStarted = () => {
  const cards = [
    {
      icon: "/icons/buy.svg",
      title: "Buy",
      description:
        "Find homes on various purchase plans; apply to buy them with your account executive.",
    },
    {
      icon: "/icons/shortlets.svg",
      title: "Short Lets",
      description:
        "Explore high quality short lets, with no booking fees and excellent support.",
    },
    {
      icon: "/icons/invest.svg",
      title: "Invest",
      description:
        "Explore high quality short lets, with no booking fees and reserve them",
    },
    {
      icon: "/icons/sell.svg",
      title: "Sell",
      description:
        "Explore high quality short lets, with no booking fees and reserve them",
    },
    {
      icon: "/icons/services.svg",
      title: "Services",
      description:
        "Explore high quality short lets, with no booking fees and reserve them",
    },
    {
      icon: "/icons/enterprise.svg",
      title: "Enterprise",
      description:
        "Explore high quality short lets, with no booking fees and reserve them",
    },
  ];

  return (
    <>
      <div className="pt-12 bg-cream-50">
        <div className="md:rounded-t-[210px] rounded-t-3xl pt-[2px] bg-gradient-to-r from-[#EAA315] to-[#335F32]">
          <div
            className="md:rounded-t-[calc(210px-2px)] rounded-t-3xl md:pt-32 pt-20"
            style={{
              background:
                "linear-gradient(to bottom right, #FFEDCB, #F6FDF4, #F6FDF4, #F6FDF4, #FFFFFB, #FFFFFB, #FFFFFB)",
            }}
          >
            <div className="text-center mb-12 md:px-0 px-10">
              <h2 className="text-3xl font-bold text-primary mb-1 milik">
                Get Started
              </h2>
              <div className="h-1 bg-primary w-24 rounded-full mx-auto mb-5" />
              <p className="text-gray-600 md:max-w-sm mx-auto">
                Made it this far? What are you waiting for? Get started with one
                of our products today!
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20 md:px-0 px-5">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 border-primary shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-4">
                    <img src={card.icon} alt="" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{card.description}</p>
                  <button className="w-full  flex items-center space-x-2 bg-primary text-white py-3 px-6 rounded-full hover:bg-primary transition-colors flex items-center justify-center group">
                    <span>Get Started Now</span>
                    <BsFillArrowUpRightCircleFill size={22} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
