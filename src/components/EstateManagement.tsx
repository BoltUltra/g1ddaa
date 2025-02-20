import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EstateDetails from "./EstateDetails";
import { Button } from "@/components/ui/button";
import { Loader2, PlusIcon } from "lucide-react";
import Layout from "@/components/Layout.tsx";
import HistoryNavigation from "@/components/NavigationButton.tsx";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { FaRegBell } from "react-icons/fa";
import { LuClock2, LuMonitorPlay } from "react-icons/lu";
import { RiShareForwardLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { SlDirections } from "react-icons/sl";
import { GoPlay } from "react-icons/go";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import EstateCard from "@/components/EstateCard.tsx";
import { BsHouseDoor, BsHouses } from "react-icons/bs";

interface Estate {
  id: string;
  name: string;
  address: string;
  completionStatus: string;
  images: {
    document: string;
  }[];
}

const EstateManagement = () => {
  const [estates, setEstates] = useState<Estate[]>([]);
  const [estateNumber, setEstateNumber] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(4);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedEstateId, setSelectedEstateId] = useState<string | null>(null);
  const [display, setDisplay] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchEstates();
  }, [pageNumber, search]);

  const fetchEstates = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }

      const response = await fetch(
        `https://dev-api.giddaa.com/developer/estate/get-all?pageNumber=${pageNumber}&pageSize=${pageSize}&search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.ok) {
        const data = await response.json();
        setEstateNumber(data.value.value.totalRecords);
        setTotalPage(data.value.value.totalPages);
        setEstates(data.value.value.data);
      } else {
        throw new Error("Failed to fetch estates");
      }
    } catch (error) {
      setError("Error fetching estates. Please try again.");
      console.error("Error fetching estates:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const howItWorks = () => {
    setDisplay(!display);
  };

  return (
    <Layout>
      <div className="space-y-5 px-4 py-5 border-b md:block hidden">
        <div className="md:flex hidden items-center justify-between">
          <div className="flex items-center space-x-4">
            <HistoryNavigation />
            <h4 className="milik text-2xl font-bold">My Properties</h4>
          </div>
          <div className="flex items-center space-x-2 rounded-full bg-[#F0F0F0] px-3 py-1">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search estates..."
              className="w-64 py-2 bg-transparent outline-none font-light text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-8">
            <div>
              <div className="relative">
                <button
                  onClick={howItWorks}
                  className="flex items-center justify-between text-primary bg-[#F0F0F0] rounded-full px-3 py-2 cursor-pointer space-x-3 font-bold"
                >
                  <LuMonitorPlay />
                  <span className="text-sm">How It Works</span>
                  <IoMdArrowDropdown />
                </button>
                {display && (
                  <div className="absolute top-10 right-0 border bg-white shadow-lg p-4 rounded-lg flex flex-col gap-3 mt-3">
                    <a
                      href="/"
                      className="flex items-center space-x-3 whitespace-nowrap"
                    >
                      <SlDirections />
                      <span>Product Tour & Guide</span>
                    </a>{" "}
                    <a href="/" className="flex items-center space-x-3">
                      <GoPlay />
                      <span>Video Tutorial</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="h-8 w-8 rounded-full flex items-center justify-center bg-[#F0F0F0] text-primary">
                <FaRegBell />
              </button>
              <button className="h-8 w-8 rounded-full flex items-center justify-center bg-[#F0F0F0] text-primary">
                <LuClock2 />
              </button>
              <button className="h-8 w-8 rounded-full flex items-center justify-center bg-[#F0F0F0] text-primary">
                <RiShareForwardLine />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-5 uppercase text-sm">
          <div className="flex items-center space-x-3">
            <span className="h-10 w-10 bg-[#FAFFFA] border border-[#F0F0F0] rounded-full flex items-center justify-center text-primary">
              <BsHouses />
            </span>
            <span>{estateNumber} Estates</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="h-10 w-10 bg-[#FAFFFA] border border-[#F0F0F0] rounded-full flex items-center justify-center text-primary">
              <BsHouseDoor />
            </span>
            <span>5 Houses</span>
          </div>
          <div className="h-2 w-2 bg-gray-400  rounded-full"></div>
          <p>7 units</p>
        </div>
      </div>
      <div className="space-y-5 px-4 py-5 border-b md:hidden pt-0">
        <div className="md:hidden flex flex-col md:flex-row items-center justify-between pt-0">
          <div className="flex items-center space-x-4 w-full md:w-auto mb-4 md:mb-0">
            <HistoryNavigation />
            <h4 className="milik text-xl md:text-2xl font-bold">
              My Properties
            </h4>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 w-full md:w-auto">
            <div className="flex items-center space-x-2 rounded-full bg-[#F0F0F0] px-3 py-1 w-full md:w-auto">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search estates..."
                className="w-full md:w-64 py-2 bg-transparent outline-none font-light text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="flex items-center w-full md:w-auto space-x-4 md:space-x-8 justify-end">
              <div className="relative">
                <button
                  onClick={howItWorks}
                  className="flex items-center justify-between text-primary bg-[#F0F0F0] rounded-full px-3 py-2 cursor-pointer space-x-3 font-bold text-sm md:text-base"
                >
                  <LuMonitorPlay className="hidden md:inline" />
                  <span>How It Works</span>
                  <IoMdArrowDropdown />
                </button>
                {display && (
                  <div className="absolute top-10 right-0 border bg-white shadow-lg p-4 rounded-lg flex flex-col gap-3 mt-3 z-10">
                    <a
                      href="/"
                      className="flex items-center space-x-3 whitespace-nowrap text-sm md:text-base"
                    >
                      <SlDirections />
                      <span>Product Tour & Guide</span>
                    </a>
                    <a
                      href="/"
                      className="flex items-center space-x-3 text-sm md:text-base"
                    >
                      <GoPlay />
                      <span>Video Tutorial</span>
                    </a>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
                <button className="h-8 w-8 rounded-full flex items-center justify-center bg-[#F0F0F0] text-primary">
                  <FaRegBell />
                </button>
                <button className="h-8 w-8 rounded-full flex items-center justify-center bg-[#F0F0F0] text-primary">
                  <LuClock2 />
                </button>
                <button className="h-8 w-8 rounded-full flex items-center justify-center bg-[#F0F0F0] text-primary">
                  <RiShareForwardLine />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-5 uppercase text-xs">
          <div className="flex items-center space-x-3">
            <span className="h-10 w-10 bg-[#FAFFFA] border border-[#F0F0F0] rounded-full flex items-center justify-center text-primary">
              <BsHouses />
            </span>
            <span>{estateNumber} Estates</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="h-10 w-10 bg-[#FAFFFA] border border-[#F0F0F0] rounded-full flex items-center justify-center text-primary">
              <BsHouseDoor />
            </span>
            <span>5 Houses</span>
          </div>
          <div className="h-2 w-2 bg-gray-400  rounded-full"></div>
          <p>7 units</p>
        </div>
      </div>
      <div className="mx-auto px-4 py-8 mt-10">
        <div className="mb-4 flex md:flex-row flex-col justify-between md:items-center">
          <h1 className="milik text-3xl font-bold">
            Estate Management - {estateNumber}
          </h1>
          <button
            onClick={() => navigate("/create-estate")}
            className="bg-primary px-4 text-white md:py-3 py-2 rounded-full flex items-center space-x-2 justify-center md:mt-0 mt-6"
          >
            <PlusIcon />
            <span>Create Estate</span>
          </button>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="mr-2 h-16 w-16 animate-spin" />
          </div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {estates.map((estate) => (
              <EstateCard key={estate.id} estate={estate} navigate={navigate} />
            ))}
          </div>
        )}
        <div className="text-center space-y-2 pt-5">
          <div className="mt-6 flex items-center space-x-5 justify-center">
            <button
              onClick={() => setPageNumber((prev) => Math.max(1, prev - 1))}
              disabled={pageNumber === 1}
              className="h-10 w-10 flex items-center justify-center bg-primary rounded-xl disabled:bg-[#F0F0F0] text-white disabled:text-[#979797]"
            >
              <FaCaretLeft className="" size={20} />
            </button>
            <Button
              onClick={() => setPageNumber((prev) => prev + 1)}
              disabled={estates.length < pageSize}
              className="h-10 w-10 flex items-center justify-center bg-primary rounded-xl disabled:bg-[#F0F0F0] text-white disabled:text-[#979797]"
            >
              <FaCaretRight size={20} />
            </Button>
          </div>
          <p>
            Page {pageNumber} of {totalPage}
          </p>
        </div>
        {selectedEstateId && (
          <EstateDetails
            estateId={selectedEstateId}
            onClose={() => setSelectedEstateId(null)}
          />
        )}
      </div>
    </Layout>
  );
};

export default EstateManagement;
