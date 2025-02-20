import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Loader2 } from "lucide-react";
import EstateImageUpload from "./EstateImageUpload";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Slider from "react-slick";
import { settings } from "@/lib/slider-settings.ts";
import ExpandableDescription from "@/components/ExpandableDescription.tsx";
import { BsArrowLeft, BsHouseAdd } from "react-icons/bs";
import { GoChevronRight } from "react-icons/go";
import { VscEdit } from "react-icons/vsc";
import { MdOutlineDelete } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { LuQrCode } from "react-icons/lu";
import { RiShareForwardLine } from "react-icons/ri";
import toast from "react-hot-toast";

interface Estate {
  features: any;
  landmark: string;
  city: any;
  videoUrl: string | undefined;
  id: string;
  name: string;
  address: string;
  completionStatus: string;
  completionDate: string;
  completionLevel: number;
  description: string;
  landSize: number;
  floors: number;
  longitude: number;
  latitude: number;
  images: {
    type: string;
    name: any;
    document: string;
  }[];
}

const categories = [
  { name: "Details" },
  { name: "Properties" },
  { name: "Allocation" },
  { name: "Prospects" },
  { name: "Analysis" },
  { name: "Activity" },
];
const EstatePage = () => {
  const { id } = useParams<{ id: string }>();
  const [estate, setEstate] = useState<Estate | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const navigate = useNavigate();

  const fetchEstateDetails = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(
        `https://dev-api.giddaa.com/developer/estate/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.ok) {
        const data = await response.json();
        setEstate(data.value.value);
      } else {
        throw new Error("Failed to fetch estate details");
      }
    } catch (error) {
      setError("Error fetching estate details. Please try again.");
      toast.error("Error fetching estate details. Please try again.");
      console.error("Error fetching estate details:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchEstateDetails();
  }, [id]);

  const handleImageUploaded = () => {
    setIsLoading(true);
    setError(null);
    fetchEstateDetails();
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return (
      <Layout>
        <div></div>
        <div></div>
        <div className="flex justify-center items-center h-screen">
          <Loader2 className="h-16 w-16 animate-spin" />
        </div>
      </Layout>
    );
  }

  if (error || !estate) {
    return (
      <Layout>
        <div className="text-red-500 text-center mt-10">
          {error || "Failed to load estate details"}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-5 border-b">
        <div className="md:flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={handleBack}
              className="flex items-center border-2 border-primary space-x-3 px-3 py-2 text-primary rounded-lg"
            >
              <BsArrowLeft />
              <span>Back</span>
            </button>
            <h4 className="milik text-2xl">{estate.name}</h4>
          </div>
          <div className="flex relative items-center md:space-x-3 md:justify-normal justify-between">
            <button
              onClick={() => navigate("/")}
              className="bg-primary px-4 text-white md:py-3 py-2 rounded-full flex items-center space-x-2 justify-center md:mt-0 mt-6"
            >
              <VscEdit />
              <span>Edit Estate</span>
            </button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-[#98A2B3] rounded-full p-3 bg-[#F0F0F0]"
            >
              <SlOptionsVertical />
            </button>
            {showDetails && (
              <div className="absolute -bottom-52 right-0 border bg-white shadow-lg p-5 rounded-lg flex flex-col gap-5 z-20">
                <a
                  href="/"
                  className="flex items-center space-x-3 whitespace-nowrap"
                >
                  <BsHouseAdd />
                  <span>Add House</span>
                </a>
                <a href="/" className="flex items-center space-x-3">
                  <RiShareForwardLine />
                  <span>Share Estate</span>
                </a>
                <a href="/" className="flex items-center space-x-3">
                  <LuQrCode />
                  <span>QR Code</span>
                </a>
                <a
                  href="/"
                  className="flex items-center space-x-3 text-[#E40000]"
                >
                  <MdOutlineDelete />
                  <span>Delete Estate</span>
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-3 mt-5 text-sm">
          <a href="/estates" className="font-light">
            Estates
          </a>
          <GoChevronRight />
          <span className="font-bold">{estate.name}</span>
        </div>
      </div>

      <div className="">
        <TabGroup>
          <TabList className="flex gap-4 w-full overflow-hidden overflow-x-auto border-b pb-0">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="py-3 px-3 border-b-2 border-b-transparent text-sm/6 text-[#979797] data-[selected]:text-primary data-[selected]:font-bold focus:outline-none data-[selected]:border-b-primary data-[hover]:bg-primary/5 data-[selected]:data-[hover]:bg-primary/10 data-[focus]:outline-1 data-[focus]:outline-primary"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            <TabPanel className="">
              <div className="container mx-auto px-4 py-8">
                <div className="">
                  <div className="slider-container">
                    {estate.images && estate.images.length > 0 ? (
                      <Slider {...settings} className="">
                        {estate.images.map((image, index) => (
                          <div
                            key={index}
                            className="pr-5 w-[370px] md:h-[280px] h-[250px] relative"
                          >
                            <img
                              src={image.document || "/placeholder.svg"}
                              alt={`${estate.name} - Image ${index + 1}`}
                              className=" object-cover w-full md:h-[280px] h-[250px] rounded-lg"
                            />
                            <div className="absolute bottom-5 left-5 flex flex-col gap-5">
                              {image.name ? (
                                <div>
                                  <span className="bg-white text-primary border border-white rounded-full text-sm py-1.5 px-3 font-bold">
                                    {image.name}
                                  </span>
                                </div>
                              ) : (
                                ""
                              )}
                              {image.type === "ACTUAL_IMAGE" ? (
                                <div>
                                  <span className="bg-primary text-white border border-white rounded-full text-sm py-1.5 px-3">
                                    Actual Image
                                  </span>
                                </div>
                              ) : (
                                ""
                              )}{" "}
                              {image.type === "PROTOTYPE_IMAGE" ? (
                                <div>
                                  <span className="bg-primary text-white border border-white rounded-full text-sm py-1.5 px-3">
                                    Prototype Image
                                  </span>
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        ))}
                      </Slider>
                    ) : (
                      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                        No Image Available
                      </div>
                    )}
                  </div>
                  <div className="mt-10 md:px-5">
                    <div className="flex items-center space-x-2">
                      <h3 className="milik text-2xl whitespace-nowrap">
                        Estate Details
                      </h3>
                      <div className="h-0.5 w-full bg-[#979797]/50"></div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8 mt-10">
                      <div className="space-y-2">
                        <p className="font-bold uppercase">Name</p>
                        <p>{estate.name}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="font-bold uppercase">State</p>
                        <p>{estate.city.stateId}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="font-bold uppercase">City</p>
                        <p>{estate.city.name}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="font-bold uppercase">Address</p>
                        <p>{estate.address}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="font-bold uppercase">Popular Landmark</p>
                        <p>{estate.landmark || "Null"}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="font-bold uppercase">
                          Estate Land (In Hectares)
                        </p>
                        <p>{estate.landSize}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="font-bold uppercase">Completion Status</p>
                        <p>{estate.completionStatus}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="font-bold uppercase">Video Url</p>
                        <a
                          href={estate?.videoUrl || "#"}
                          target={estate?.videoUrl ? "_blank" : "_self"}
                          className={"underline whitespace-pre-line"}
                          aria-disabled={!estate?.videoUrl}
                        >
                          {estate.videoUrl || "Null"}
                        </a>
                      </div>
                      <div className="space-y-2 md:col-span-4">
                        <p className="font-bold uppercase">Number of Floors</p>
                        <p>{estate.floors}</p>
                      </div>
                      <ExpandableDescription description={estate.description} />
                    </div>
                  </div>
                  {estate.features.length > 0 && (
                    <div className="mt-10">
                      <div className="flex items-center space-x-2">
                        <h3 className="milik text-2xl whitespace-nowrap">
                          Specification and Amenities
                        </h3>
                        <div className="h-0.5 w-full bg-[#979797]/50"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Optional: Estate Image Upload */}
                <EstateImageUpload
                  estateId={estate.id}
                  onImageUploaded={handleImageUploaded}
                />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </Layout>
  );
};

export default EstatePage;
