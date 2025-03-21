"use client";
import { useState } from "react";
import { FaBox, FaBoxOpen, FaWarehouse } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

interface FormData {
  flats: string;
}

interface Errors {
  flats?: string;
}

interface Results {
  total: number;
  bestLockerSystem: number;
  small: number;
  medium: number;
  large: number;
}

const LockerCalculatorV2: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    flats: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [results, setResults] = useState<Results | null>(null);
  const [showResults, setShowResults] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.flats || Number(formData.flats) <= 0) {
      newErrors.flats = "Please enter a valid number of flats";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getClosestRange = (x: number): number => {
    if (x >= 54) return 54;
    else if (x >= 48 && x < 54) return 54;
    else if (x >= 36 && x < 48) return 48;
    else if (x >= 24 && x < 36) return 36;
    else if (x >= 18 && x < 24) return 24;
    else return 18;
  };

  const calculateLockers = () => {
    if (!validateForm()) return;

    const dailyParcels = Math.floor((Number(formData.flats) * 1) / 7);
    const closest = getClosestRange(dailyParcels);

    const calculatedResults: Results = {
      total: dailyParcels,
      bestLockerSystem: closest,
      small: Math.ceil(closest * 0.3),
      medium: Math.ceil(closest * 0.5),
      large: Math.ceil(closest * 0.2),
    };

    setResults(calculatedResults);
    setShowResults(true);
  };

  const resetForm = () => {
    setFormData({ flats: "" });
    setErrors({});
    setResults(null);
    setShowResults(false);
  };

  return (
    <div id="calculator" className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">
            Locker Requirement Calculator
          </h1>
          <p className="text-gray-600">
            Calculate optimal locker distribution for your facility
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="flats"
            >
              Number of flats
            </label>
            <input
              type="number"
              id="flats"
              name="flats"
              value={formData.flats}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.flats ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter total number of flats"
            />
            {errors.flats && (
              <p className="mt-1 text-red-500 text-sm">{errors.flats}</p>
            )}
          </div>

          {/* <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="avgDeliveries"
            >
              Average Deliveries per Resident
              <div className="group relative inline-block">
                <BsInfoCircle className="inline ml-2 text-blue-500 cursor-pointer" />
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded px-2 py-1">
                  Daily average of packages per resident
                </div>
              </div>
            </label>
            <input
              type="number"
              id="avgDeliveries"
              name="avgDeliveries"
              value={formData.avgDeliveries}
              onChange={handleChange}
              step="0.1"
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.avgDeliveries ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter average deliveries (e.g., 0.5)"
            />
            {errors.avgDeliveries && (
              <p className="mt-1 text-red-500 text-sm">
                {errors.avgDeliveries}
              </p>
            )}
          </div> */}

          <div className="flex space-x-4">
            <button
              onClick={calculateLockers}
              className="flex-1 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Calculate Locker Requirements
            </button>
            <button
              onClick={resetForm}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Reset
            </button>
          </div>
        </div>

        {showResults && results && (
          <div className="animate-fade-in space-y-6 mt-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Recommended Locker Distribution
            </h2>

         
            {/* <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Total Lockers Required
              </h3>
              <p className="text-4xl font-bold text-blue-600">
                {results.total}
              </p>

            </div> */}
            <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Best locker-system for your use-case:
              </h3>
              <p className="text-4xl font-bold text-blue-600">
                {results.bestLockerSystem} Unit Locker-system  
              </p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-3 mb-2">
                  <FaBox className="text-blue-500 text-xl" />
                  <h3 className="text-lg font-semibold">Small Lockers</h3>
                </div>
                <p className="text-3xl font-bold text-blue-600">
                  {results.small}
                </p>
                <p className="text-gray-600 text-sm">30% of total capacity</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-3 mb-2">
                  <FaBoxOpen className="text-blue-500 text-xl" />
                  <h3 className="text-lg font-semibold">Medium Lockers</h3>
                </div>
                <p className="text-3xl font-bold text-blue-600">
                  {results.medium}
                </p>
                <p className="text-gray-600 text-sm">50% of total capacity</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-3 mb-2">
                  <FaWarehouse className="text-blue-500 text-xl" />
                  <h3 className="text-lg font-semibold">Large Lockers</h3>
                </div>
                <p className="text-3xl font-bold text-blue-600">
                  {results.large}
                </p>
                <p className="text-gray-600 text-sm">20% of total capacity</p>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default LockerCalculatorV2;
