"use client";
import { useState } from "react";
import { FaBox, FaBoxOpen, FaWarehouse } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

interface FormData {
  residents: string;
  avgDeliveries: string;
}

interface Errors {
  residents?: string;
  avgDeliveries?: string;
}

interface Results {
  total: number;
  small: number;
  medium: number;
  large: number;
}

const LockerCalculator = () => {
  const [formData, setFormData] = useState<FormData>({
    residents: "",
    avgDeliveries: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [results, setResults] = useState<Results | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.residents || Number(formData.residents) <= 0) {
      newErrors.residents = "Please enter a valid number of residents";
    }
    if (!formData.avgDeliveries || Number(formData.avgDeliveries) < 0) {
      newErrors.avgDeliveries = "Please enter a valid average delivery number";
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

  const calculateLockers = () => {
    if (!validateForm()) return;

    const dailyParcels =
      Number(formData.residents) * Number(formData.avgDeliveries);
    const lockerUtilization = dailyParcels * 0.5;
    const peakDemand = Math.ceil(lockerUtilization * 1.1);

    const results: Results = {
      total: peakDemand,
      small: Math.ceil(peakDemand * 0.6),
      medium: Math.ceil(peakDemand * 0.3),
      large: Math.ceil(peakDemand * 0.1),
    };

    setResults(results);
    setShowResults(true);
  };

  const resetForm = () => {
    setFormData({ residents: "", avgDeliveries: "" });
    setErrors({});
    setResults(null);
    setShowResults(false);
  };

  return (
    <div
      id="calculator"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 flex items-center justify-center"
    >
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">
            Locker Requirement Calculator
          </h1>
          <p className="text-gray-600">
            Calculate optimal locker distribution for your facility
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="residents"
            >
              Number of Residents
            </label>
            <input
              type="number"
              id="residents"
              name="residents"
              value={formData.residents}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.residents ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter total number of residents"
            />
            {errors.residents && (
              <p className="mt-1 text-red-500 text-sm">{errors.residents}</p>
            )}
          </div>

          <div>
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
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={calculateLockers}
              className="flex-1 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Calculate Locker Requirements
            </button>
            <button
              onClick={resetForm}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockerCalculator;
