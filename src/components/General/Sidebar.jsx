import React from "react";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const shouldHighlightNumber = (pathname, number) => {
    if (
      (pathname === "/setupOne" && number === 1) ||
      (pathname === "/setupTwo" && number === 2) ||
      (pathname === "/setupThree" && number === 3)
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="bg-gray-100 lg:w-1/3 p-4 lg:h-screen flex items-center justify-center flex-col">
      <div className="h-12 my-4">
        <img src="/lg-white.png" alt="GeniusGrid" className="h-full" />
      </div>
      <div className="mt-8">
        <div className="flex items-center justify-left mb-6">
          <div
            className={`bg-white rounded-full border-2 border-gray-300 w-8 h-8 flex items-center justify-center mr-4 ${
              shouldHighlightNumber(location.pathname, 1)
                ? "bg-gray-700 text-white"
                : ""
            }`}
          >
            1
          </div>
          <div>
            <h3 className="font-semibold">Goal Setting</h3>
            <p className="text-gray-500">Charting your course forward</p>
          </div>
        </div>
        <div className="flex items-center justify-left mb-6">
          <div
            className={`bg-white rounded-full border-2 border-gray-300 w-8 h-8 flex items-center justify-center mr-4 ${
              shouldHighlightNumber(location.pathname, 2)
                ? "bg-gray-700 text-white"
                : ""
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
              shouldHighlightNumber(location.pathname, 3)
                ? "bg-gray-700 text-white"
                : ""
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
  );
}

export default Sidebar;
