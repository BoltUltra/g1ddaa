import { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { GoEye } from "react-icons/go";
import { FiEdit2 } from "react-icons/fi";
import { BsHouse } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const EstateCard = ({ estate, navigate }: { estate: any; navigate: any }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-xl border-2 shadow  cursor-pointer relative">
      <div className="h-[120px] relative">
        <img
          onClick={() => navigate(`/estate/${estate.id}`)}
          src={
            estate?.images?.length !== 0
              ? estate.images[0]?.document
              : "/images/placeholder.jpg"
          }
          alt=""
          className="h-[120px] w-full object-cover rounded-t-xl"
        />
        {estate.houses.length > 0 ? (
          <span className="bg-[#EAFFEA] absolute top-3 left-5 rounded-full px-3 py-1 border border-primary shadow text-sm font-semibold">
            {estate?.houses?.length} Houses
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="relative">
        <div
          className="text-center pt-4 px-5"
          onClick={() => navigate(`/estate/${estate.id}`)}
        >
          <h2 className="text-xl font-semibold mb-2">{estate.name}</h2>
          <p className="text-gray-600 mb-2">{estate.address}</p>
        </div>
        <div className="flex items-center justify-end m-5 z-20">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-[#98A2B3] rounded-full p-3 bg-[#F0F0F0]"
          >
            <SlOptions />
          </button>
        </div>
      </div>
      {showDetails && (
        <div className="absolute -bottom-44 right-0 border bg-white shadow-lg p-5 rounded-lg flex flex-col gap-5 z-20">
          <a href="/" className="flex items-center space-x-3 whitespace-nowrap">
            <GoEye />
            <span>View House</span>
          </a>
          <a href="/" className="flex items-center space-x-3">
            <FiEdit2 />
            <span>Edit Estate</span>
          </a>
          <a href="/" className="flex items-center space-x-3">
            <BsHouse />
            <span>Add House</span>
          </a>
          <a href="/" className="flex items-center space-x-3 text-[#E40000]">
            <MdOutlineDelete />
            <span>Delete Estate</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default EstateCard;
