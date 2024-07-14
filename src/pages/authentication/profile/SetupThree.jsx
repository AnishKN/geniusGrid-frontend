import React, { useState } from "react";
import Sidebar from "../../../components/General/Sidebar";
import { Waveform } from "@uiball/loaders";
import { useNavigate } from "react-router-dom";

function SetupThree() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);

  const handleClick1 = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/setupTwo");
      setIsLoading(false);
    }, 1000);
  };

  const handleClick2 = () => {
    setIsLoading1(true);
    setTimeout(() => {
      navigate("/dashboard");
      setIsLoading1(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="w-full bg-white lg:h-screen flex items-center justify-center">
        <div className="lg:p-12 md:p-8 sm:p-6 p-4 lg:w-7/12">
          <div className="mb-4">
            <label htmlFor="learningStyle" className="block text-gray-700">
              Learning Style
            </label>
            <input
              type="text"
              id="learningStyle"
              name="learningStyle"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="learningPace" className="block text-gray-700">
              Learning Pace
            </label>
            <input
              type="text"
              id="learningPace"
              name="learningPace"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="progressTracking" className="block text-gray-700">
              Progress Tracking
            </label>
            <input
              type="text"
              id="progressTracking"
              name="progressTracking"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="additionalInfo" className="block text-gray-700">
              Additional Info
            </label>
            <input
              type="text"
              id="additionalInfo"
              name="additionalInfo"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
              autoComplete="off"
            />
          </div>

          <div className="w-full flex gap-2">
            <div className="w-full">
              <button
                type="button"
                onClick={handleClick1}
                className="flex items-center justify-center bg-blue-700 hover:bg-blue-900 text-white font-semibold rounded-md py-2 px-4 w-full"
              >
                {isLoading && (
                  <Waveform color="white" size={25} stroke={3.5} speed={1} />
                )}
                {!isLoading && "Back"}
              </button>
            </div>
            <div className="w-full lg:w-auto">
              <button
                type="button"
                onClick={handleClick2}
                className="flex items-center justify-center bg-blue-700 hover:bg-blue-900 text-white font-semibold rounded-md py-2 px-4 w-full"
              >
                {isLoading1 && (
                  <Waveform color="white" size={25} stroke={3.5} speed={1} />
                )}
                {!isLoading1 && "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetupThree;
