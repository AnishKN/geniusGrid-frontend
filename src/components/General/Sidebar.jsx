import React from "react";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const shouldHighlightNumber = (pathname, number) => {
    if (
      (pathname === '/setupOne' && number === 1) ||
      (pathname === '/setupTwo' && number === 2) ||
      (pathname === '/setupThree' && number === 3)
    ) {
      return true; 
    }
    return false;
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center py-10 bg-gray-100 h-screen w-full md:w-1/3">
        <h1 className="text-4xl font-bold text-black text-center md:text-left">
          GeniusGrid
        </h1>
        <div className="mt-10">
          <div className="flex items-center justify-left mb-6">
          <div
              className={`bg-white rounded-full border-2 border-gray-300 w-8 h-8 flex items-center justify-center mr-4 ${
                shouldHighlightNumber(location.pathname, 1) ? "bg-black text-white" : ""
              }`}
            >1
            </div>
            <div>
              <h3 className="font-semibold">Goal Setting</h3>
              <p className="text-gray-500">Charting your course forward</p>
            </div>
          </div>
          <div className="flex items-center justify-left mb-6">
          <div
              className={`bg-white rounded-full border-2 border-gray-300 w-8 h-8 flex items-center justify-center mr-4 ${
                shouldHighlightNumber(location.pathname, 2) ? "bg-black text-white" : ""
              }`}
            >
             2
            </div>
            <div>
              <h3 className="font-semibold">Study Environment</h3>
              <p className="text-gray-500">Tailoring surroundings for focus</p>
            </div>
          </div>
          <div className="flex items-center justify-left mb-6">
            <div
              className={`bg-white rounded-full border-2 border-gray-300 w-8 h-8 flex items-center justify-center mr-4 ${
                shouldHighlightNumber(location.pathname, 3) ? "bg-black text-white" : ""
              }`}
            >
              3
            </div>
            <div>
              <h3 className="font-semibold">Learning Style</h3>
              <p className="text-gray-500">Harnessing personal strengths</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
