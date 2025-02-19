"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import Layout from "@/components/Layout.tsx";
import { BsArrowLeft } from "react-icons/bs";
import { GoChevronRight } from "react-icons/go";

interface Country {
  code: string;
  id: string;
  name: string;
  region: string;
  stateCount: number;
}

interface State {
  id: string;
  name: string;
}

interface City {
  id: string;
  name: string;
}

const CreateEstateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cityId: "",
    address: "",
    videoUrl: "",
    ownerType: "DEVELOPER", // Setting a default value
    landmark: "",
    description: "",
    completionStatus: "",
    completionDate: "",
    completionLevel: 0,
    longitude: 0,
    latitude: 0,
    landSize: 0,
    organizationId: "",
    floors: 0,
    features: [
      {
        id: "",
        name: "",
        icon: "",
        hasAmpleParkingSpace: false,
        hasUniformSecurity: false,
        hasCCTVSurveillanceSystem: false,
        hasInverter: false,
        has24HoursElectricity: false,
        hasInternetServices: false,
        hasFiberOptics: false,
        hasReliableWaterSupply: false,
        hasChildernPlayground: false,
        hasEquestrainOrPoloCenter: false,
        hasTennisCourt: false,
        hasGolfCourt: false,
        hasLoungeOrBar: false,
        hasResturant: false,
        hasLakesOrPonds: false,
        hasGazebos: false,
        hasChildcareFacilities: false,
        hasSchool: false,
        hasHospital: false,
        hasShoppingComplex: false,
        hasChurchOrMosque: false,
        hasGreeneryAndOpenGardens: false,
        hasGym: false,
        hasBasketballCourt: false,
        hasFootballPitch: false,
        hasSwimmingPool: false,
        hasClubHouse: false,
        hasBank: false,
        hasCinema: false,
        hasEnsuite: false,
        hasPoPCeiling: false,
        hasWalkInClosets: false,
        hasAirConditioning: false,
        hasSpeedInternet: false,
        hasWineCeller: false,
        hasFurnished: false,
        hasWifi: false,
        hasFibreOptics: false,
        hasSatelliteTV: false,
        hasElevator: false,
        hasBoysQuarters: false,
        hasSmartHomeTechnology: false,
        hasFullyEquippedKitcken: false,
        hasModernAppliances: false,
        hasGraniteCountertops: false,
        hasBreakfastBar: false,
        hasStorageRoom: false,
        hasUpgradedBathroomFeatures: false,
        hasSpaLikeFeatures: false,
        hasTileOrMarbleFeatures: false,
        hasOpenFloorPlan: false,
        hasLargeWindwos: false,
        hasBuiltInHouseTheater: false,
        hasPrivateBackyard: false,
        hasPatioOrDarkSpace: false,
        hasLandscapedGarden: false,
        hasHomeOfficeSpace: false,
        hasBuiltInShelfOrBookSpace: false,
        hasAmpleNaturalLight: false,
        hasSecuritySystem: false,
        hasBulletProofDoors: false,
        hasGatedCompound: false,
        hasReinforcedDoorsAndWindows: false,
        hasGaurdedCommunity: false,
        hasUniformedSecurity: false,
        hasParkingGarage: false,
        hasDriveWaySpace: false,
        hasStreetParkingAvaliability: false,
        hasPrivateParkingSpace: false,
        hasElectricity: false,
        hasBackupGenerator: false,
        hasBorehole: false,
        hasWaterBoard: false,
        hasProximityToSchools: false,
        hasProximityToShoppingMalls: false,
        hasProximityToSupermarkets: false,
        hasNearByPublicTransportation: false,
        hasAccessiblityViaBoltOrUber: false,
        hasFencedBackyard: false,
        hasPetFriendlyNeighbourhood: false,
        hasNearbyWalkingTrailsAndSidewalks: false,
      },
    ],
  });

  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCountry, setselectedCountry] = useState("");
  const [selectedState, setselectedState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://dev-api.giddaa.com/public/country/get-all?pageNumber=1&pageSize=1000",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        setCountries(
          Array.isArray(data.value.value.data) ? data.value.value.data : [],
        );
      } catch (error) {
        console.error("Error fetching countries:", error);
        setError("Failed to load countries. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
      if (!selectedCountry) return;

      setIsLoading(true);
      try {
        const response = await fetch(
          `https://dev-api.giddaa.com/public/state/${selectedCountry}/get-all?pageNumber=1&pageSize=1000`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch states");
        }
        const data = await response.json();
        setStates(
          Array.isArray(data.value.value.data) ? data.value.value.data : [],
        );
        setselectedState(""); // Reset state selection
        setCities([]); // Reset cities
      } catch (error) {
        console.error("Error fetching states:", error);
        setError("Failed to load states. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStates();
  }, [selectedCountry]);

  useEffect(() => {
    const fetchCities = async () => {
      if (!selectedState) return;

      setIsLoading(true);
      try {
        const response = await fetch(
          `https://dev-api.giddaa.com/public/city/${selectedState}/get-all?pageNumber=1&pageSize=1000`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cities");
        }
        const data = await response.json();
        setCities(
          Array.isArray(data.value.value.data) ? data.value.value.data : [],
        );
      } catch (error) {
        console.error("Error fetching cities:", error);
        setError("Failed to load cities. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, [selectedState]);

  const handleinputChange = (
    e: React.ChangeEvent<
      HTMLinputElement | HTMLTextAreaElement | HTMLselectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    console.log(formData);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(
        "https://dev-api.giddaa.com/developer/estate/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create estate");
      }
    } catch (error) {
      console.error("Error creating estate:", error);
      setError(
        error instanceof Error ? error.message : "Failed to create estate",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="py-5 border-b">
        <div className="flex items-center space-x-3">
          <button
            onClick={handleBack}
            className="flex items-center border-2 border-primary space-x-3 px-3 py-2 text-primary rounded-lg"
          >
            <BsArrowLeft />
            <span>Back</span>
          </button>
          <h4 className="milik text-2xl">Creating Estate</h4>
        </div>
        <div className="flex items-center space-x-3 mt-5 text-sm">
          <a href="/estates" className="font-light">
            Estates
          </a>
          <GoChevronRight />
          <span className="font-bold">Create Estate</span>
        </div>
      </div>
      <div className="min-h-screen pb-12">
        <div className="bg-white">
          {error && (
            <div className="mx-6 mt-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              {error}
            </div>
          )}

          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6 pb-20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleinputChange}
                    className="form-input"
                    placeholder="Estate name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <div className="form-input">
                    <select
                      id="country"
                      value={selectedCountry}
                      onChange={(e) => setselectedCountry(e.target.value)}
                      className="bg-transparent w-full"
                      required
                    >
                      <option value="">Select a country</option>
                      {countries?.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="state"
                  >
                    State
                  </label>
                  <div className="form-input">
                    <select
                      id="state"
                      value={selectedState}
                      onChange={(e) => setselectedState(e.target.value)}
                      className="w-full bg-transparent"
                      disabled={!selectedCountry || isLoading}
                      required
                    >
                      <option value="">Select a state</option>
                      {states?.map((state) => (
                        <option key={state.id} value={state.id}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="cityId"
                  >
                    City
                  </label>
                  <div className="form-input">
                    <select
                      id="cityId"
                      name="cityId"
                      value={formData.cityId}
                      onChange={handleinputChange}
                      className="w-full bg-transparent"
                      disabled={!selectedState || isLoading}
                      required
                    >
                      <option value="">Select a city</option>
                      {cities?.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleinputChange}
                    className="form-input"
                    placeholder="Address"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="landmark"
                  >
                    Landmark
                  </label>
                  <input
                    id="landmark"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleinputChange}
                    className="form-input"
                    placeholder="Landmark"
                    required
                  />
                </div>{" "}
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="landSize"
                  >
                    Estate Land (In Hectares){" "}
                  </label>
                  <input
                    id="landSize"
                    name="landSize"
                    type="number"
                    value={formData.landSize}
                    onChange={handleinputChange}
                    className="form-input"
                    placeholder="Land Size"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="completionStatus"
                  >
                    Completion Status
                  </label>
                  <div className="form-input">
                    <select
                      id="completionStatus"
                      name="completionStatus"
                      value={formData.completionStatus}
                      onChange={handleinputChange}
                      className="w-full bg-transparent"
                      required
                    >
                      <option value="">Select status</option>
                      <option value="UNDER_CONSTRUCTION">
                        Under Construction
                      </option>
                      <option value="COMPLETED">Completed</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="completionDate"
                  >
                    Completion Date
                  </label>
                  <div className="form-input">
                    <input
                      id="completionDate"
                      name="completionDate"
                      type="date"
                      value={formData.completionDate}
                      onChange={handleinputChange}
                      className="w-full bg-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="completionLevel"
                  >
                    Completion Level (%)
                  </label>
                  <input
                    id="completionLevel"
                    name="completionLevel"
                    type="number"
                    value={formData.completionLevel}
                    onChange={handleinputChange}
                    className="form-input"
                    min="0"
                    max="100"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="videoUrl"
                  >
                    Video URL
                  </label>
                  <input
                    id="videoUrl"
                    name="videoUrl"
                    value={formData.videoUrl}
                    onChange={handleinputChange}
                    className="form-input"
                    placeholder="Video Url"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="floors"
                  >
                    Number of Floors
                  </label>
                  <input
                    type="number"
                    id="floors"
                    name="floors"
                    value={formData.floors}
                    onChange={handleinputChange}
                    className="form-input"
                    placeholder="Number of Floors"
                    required
                  />
                </div>{" "}
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleinputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    rows={4}
                    required
                  />
                </div>
              </div>

              {/* Features Section */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Features
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.keys(formData.features[0]).map((feature) => {
                    if (typeof formData.features[0][feature] === "boolean") {
                      return (
                        <div
                          key={feature}
                          className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg hover:bg-primary/15 transition-colors"
                        >
                          <input
                            type="checkbox"
                            id={feature}
                            name={`features.0.${feature}`}
                            checked={formData.features[0][feature]}
                            onChange={(e) => {
                              const newFeatures = [...formData.features];
                              newFeatures[0][feature] = e.target.checked;
                              setFormData({
                                ...formData,
                                features: newFeatures,
                              });
                            }}
                            className="w-4 h-4 text-primary rounded focus:ring-primary accent-primary"
                          />
                          <label
                            htmlFor={feature}
                            className="text-sm text-gray-700"
                          >
                            {feature
                              .replace(/^has/, "")
                              .replace(/([A-Z])/g, " $1")
                              .trim()}
                          </label>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>

              {/* Form Actions */}
              <div className="py-6 border-t border-gray-200 flex justify-center space-x-4 fixed bottom-0 w-full left-0 bg-[#F0F0F0]">
                <button
                  type="button"
                  variant="outline"
                  disabled={isLoading}
                  className="px-6 bg-white text-primary border border-primary py-2 rounded-full font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 bg-primary text-white py-2 rounded-full font-semibold border border-primary"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    "Create Estate"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateEstateForm;
