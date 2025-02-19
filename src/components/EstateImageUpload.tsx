"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImagePlus, Loader2 } from "lucide-react";

interface EstateImageUploadProps {
  estateId: string;
  onImageUploaded: () => void;
}

const EstateImageUpload: React.FC<EstateImageUploadProps> = ({
  estateId,
  onImageUploaded,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      // Set default name from file if not already set
      if (!name) {
        setName(e.target.files[0].name);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload");
      return;
    }

    if (!name.trim() || name.trim().split(" ").length !== 2) {
      setError("Please enter a name with exactly 2 words");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const base64 = reader.result?.toString().split(",")[1];

        const response = await fetch(
          `https://dev-api.giddaa.com/developer/estate/${estateId}/upload-document`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              base64: base64,
              ownerId: estateId,
              optionId: "ESTATE_IMAGE",
              type: "ACTUAL_IMAGE",
              extension: file.name.split(".").pop(),
              description: description,
              name: name,
              extraProperties: null,
              revisionId: null,
            }),
          },
        );

        if (response.ok) {
          onImageUploaded();
          setShowModal(false);
          resetForm();
        } else {
          throw new Error("Failed to upload image");
        }
      };
    } catch (error) {
      setError("Error uploading image. Please try again.");
      console.error("Error uploading image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFile(null);
    setName("");
    setDescription("");
    setError(null);
  };

  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        className="fixed bottom-8 right-8 h-16 w-16 rounded-full bg-primary/40 shadow-primary animate-pulse"
      >
        <ImagePlus className="h-8 w-8" />
      </Button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Upload Estate Image</h3>
              <Button onClick={() => setShowModal(false)} className="p-2">
                ×
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="mb-1">Image File</p>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full"
                />
              </div>

              <div>
                <p className="mb-1">Image Name</p>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Side View, Corner View, etc"
                  className="w-full"
                />
              </div>

              <div>
                <p className="mb-1">Description</p>
                <Input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter image description"
                  className="w-full"
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button
                onClick={handleUpload}
                disabled={isLoading || !file}
                className="w-full"
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Upload Image
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EstateImageUpload;
