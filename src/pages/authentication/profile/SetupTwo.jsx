import React,{ useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { Waveform } from "@uiball/loaders";
import { useNavigate } from "react-router-dom";

function SetupTwo() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);

  const handleClick1 = ()=>{
    setIsLoading(true)
    setTimeout(() => {
      navigate("/SetupOne")
      setIsLoading(false);
    }, 1000);
  }

  const handleClick2 = ()=>{
    setIsLoading1(true)
    setTimeout(() => {
      navigate("/SetupThree")
      setIsLoading1(false);
    }, 1000);
  }

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="m-2 p-2 w-full">
          <div className="bg-white flex justify-center items-center h-full">
            <div className="lg:p-12 md:p-8 sm:p-6 p-2 w-full lg:w-1/2">
              <div className="mb-4">
                <label htmlFor="studyEnvironment" className="block text-gray-950">
                Study Environment
                </label>
                <input
                  type="text"
                  id="studyEnvironment"
                  name="studyEnvironment"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="learningMaterials" className="block text-gray-950">
                Learning Materials
                </label>
                <input
                  type="text"
                  id="learningMaterials"
                  name="learningMaterials"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="availability" className="block text-gray-950">
                Availability
                </label>
                <input
                  type="text"
                  id="availability"
                  name="availability"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="timeConstraints" className="block text-gray-950">
                Time Constraints
                </label>
                <input
                  type="text"
                  id="timeConstraints"
                  name="timeConstraints"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
                  autoComplete="off"
                />
              </div>

              <div className={'w-full flex gap-2'}>
              <div className={'w-full'}>
                <button
                  type="button"
                  onClick={handleClick1}
                  className="flex items-center justify-center bg-gray-950 hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                >
                  {isLoading && <Waveform color="white" size={25} stroke={3.5} speed={1} />}
                  {!isLoading && "Back"}
                </button>  
              </div>
              <div className={'w-full'}>
                <button
                  type="button"
                  onClick={handleClick2}
                  className="flex items-center justify-center bg-gray-950 hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                >
                  {isLoading1 && <Waveform color="white" size={25} stroke={3.5} speed={1} />}
                  {!isLoading1 && "Next"}
                </button>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetupTwo;
