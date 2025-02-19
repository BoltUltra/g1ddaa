"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import EstateImageUpload from "./EstateImageUpload";

interface EstateDetailsProps {
  estateId: string;
  onClose: () => void;
}

interface Estate {
  id: string;
  name: string;
  address: string;
  description: string;
  completionStatus: string;
  completionDate: string;
  completionLevel: number;
  longitude: number;
  latitude: number;
  landSize: number;
  floors: number;
  // Add more fields as needed
}

const EstateDetails: React.FC<EstateDetailsProps> = ({ estateId, onClose }) => {
  const [estate, setEstate] = useState<Estate | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEstateDetails();
  }, []);

  const fetchEstateDetails = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(
        `https://dev-api.giddaa.com/developer/estate/${estateId}`,
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
      console.error("Error fetching estate details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUploaded = () => {
    // Refetch estate details to show the new image
    fetchEstateDetails();
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
        <Loader2 className="h-16 w-16 animate-spin text-white" />
      </div>
    );
  }

  if (error || !estate) {
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <p className="text-red-500 mb-4">
            {error || "Failed to load estate details"}
          </p>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-white">
        <h2 className="text-2xl font-bold mb-4">{estate.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p>
              <strong>Address:</strong> {estate.address}
            </p>
            <p>
              <strong>Completion Status:</strong> {estate.completionStatus}
            </p>
            <p>
              <strong>Completion Date:</strong> {estate.completionDate}
            </p>
            <p>
              <strong>Completion Level:</strong> {estate.completionLevel}%
            </p>
          </div>
          <div>
            <p>
              <strong>Land Size:</strong> {estate.landSize} sqm
            </p>
            <p>
              <strong>Floors:</strong> {estate.floors}
            </p>
            <p>
              <strong>Longitude:</strong> {estate.longitude}
            </p>
            <p>
              <strong>Latitude:</strong> {estate.latitude}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Description</h3>
          <p>{estate.description}</p>
        </div>
        <EstateImageUpload
          estateId={estateId}
          onImageUploaded={handleImageUploaded}
        />
        <div className="mt-6 flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
