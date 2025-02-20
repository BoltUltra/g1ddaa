"use client";

import type React from "react";
import { useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

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
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      if (!name) {
        setName(e.target.files[0].name);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file to upload");
      setError("Please select a file to upload");
      return;
    }

    if (!name.trim() || name.trim().split(" ").length !== 2) {
      toast.error("Please enter a name with exactly 2 words");
      setError("Please enter a name with exactly 2 words");
      return;
    }

    setError(null);
    setIsUploading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const reader = new FileReader();

      reader.onload = async () => {
        const base64 = reader.result?.toString().split(",")[1];

        if (!base64) {
          throw new Error("Failed to convert file to base64");
        }

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
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          throw new Error(errorData?.message || "Failed to upload image");
        }

        toast.success("Image uploaded successfully");
        onImageUploaded();
        setShowModal(false);
        resetForm();
      };

      reader.onerror = () => {
        throw new Error("Failed to read file");
      };

      reader.readAsDataURL(file);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error uploading image";
      setError(errorMessage);
      toast.error(errorMessage);
      console.error("Error uploading image:", error);
    } finally {
      setIsUploading(false);
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
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-8 right-8 h-16 w-16 rounded-full bg-primary/40 shadow-primary animate-pulse flex items-center justify-center"
      >
        <ImagePlus className="h-8 w-8" />
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Upload Estate Image</h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="mb-1">Image File</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full border rounded p-2"
                />
              </div>

              <div>
                <p className="mb-1">Image Name</p>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Side View, Corner View, etc"
                  className="w-full border rounded p-2"
                />
              </div>

              <div>
                <p className="mb-1">Description</p>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter image description"
                  className="w-full border rounded p-2"
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                onClick={handleUpload}
                disabled={isUploading || !file}
                className="w-full px-6 bg-primary text-white py-2 rounded-full font-semibold border border-primary disabled:opacity-50 flex items-center justify-center gap-2" // added gap-2
              >
                {isUploading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />{" "}
                    {/* adjusted size and removed mr-2 */}
                    <span>Uploading...</span>
                  </>
                ) : (
                  "Upload Image"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EstateImageUpload;
