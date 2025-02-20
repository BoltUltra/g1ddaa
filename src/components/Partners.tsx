/* eslint-disable */
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const PartnersSection = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof partnersByCategory>("GOVERNMENT");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    "GOVERNMENT",
    "PROPERTY DEVELOPERS",
    "PROPERTY MANAGERS",
    "FINANCIAL INSTITUTIONS",
    "NON-GOVERNMENTAL ORGANIZATIONS",
  ];

  const partnersByCategory = {
    GOVERNMENT: Array(9)
      .fill(null)
      .map((_, index) => ({
        id: `gov-${index + 1}`,
        image: `/api/placeholder/50/50`,
        type: "GOVERNMENT",
      })),
    "PROPERTY DEVELOPERS": Array(9)
      .fill(null)
      .map((_, index) => ({
        id: `dev-${index + 1}`,
        image: `/api/placeholder/50/50`,
        type: "PROPERTY DEVELOPERS",
      })),
    "PROPERTY MANAGERS": Array(9)
      .fill(null)
      .map((_, index) => ({
        id: `man-${index + 1}`,
        image: `/api/placeholder/50/50`,
        type: "PROPERTY MANAGERS",
      })),
    "FINANCIAL INSTITUTIONS": Array(9)
      .fill(null)
      .map((_, index) => ({
        id: `fin-${index + 1}`,
        image: `/api/placeholder/50/50`,
        type: "FINANCIAL INSTITUTIONS",
      })),
    "NON-GOVERNMENTAL ORGANIZATIONS": Array(9)
      .fill(null)
      .map((_, index) => ({
        id: `ngo-${index + 1}`,
        image: `/api/placeholder/50/50`,
        type: "NON-GOVERNMENTAL ORGANIZATIONS",
      })),
  };

  const scroll = (direction: any) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  // @ts-ignore
  return (
    <div className="section py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-900 mb-4 milik">
          Our Partners
          <div className="h-1 w-32 bg-green-900 mx-auto mt-2 rounded-full" />
        </h2>
        <p className="text-gray-600 max-w-sm mx-auto">
          Organizations we've partnered with to make real estate in Nigeria a
          pleasant experience for all.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm transition-all duration-200 whitespace-nowrap
              ${
                activeTab === tab
                  ? "bg-green-900 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-green-900"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="relative mb-12">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 md:hidden bg-white shadow-md rounded-full p-1"
        >
          <ChevronLeft className="w-6 h-6 text-green-900" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex md:grid md:grid-cols-9 gap-8 overflow-x-auto pb-4 scrollbar-hide px-8 md:px-0"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {partnersByCategory[activeTab].map((partner) => (
            <div
              key={partner.id}
              className="w-[100px] md:w-auto flex-shrink-0 aspect-square rounded-full bg-gray-200 overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={partner.image}
                // alt={`Partner ${partner.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 md:hidden bg-white shadow-md rounded-full p-1"
        >
          <ChevronRight className="w-6 h-6 text-green-900" />
        </button>
      </div>

      <div className="text-center mb-10">
        <h3 className="text-4xl font-bold text-gray-300">Over 50 Partners</h3>
      </div>

      <div className="flex justify-center">
        <button className="bg-green-900 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-green-800 transition-colors">
          View All Partners
          <BsFillArrowUpRightCircleFill size={22} />{" "}
        </button>
      </div>
    </div>
  );
};

export default PartnersSection;
