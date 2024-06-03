import React,{ useState } from "react";
import Sidebar from "../../../components/General/Sidebar";
import { Waveform } from "@uiball/loaders";
import { useNavigate } from "react-router-dom";

function SetupOne() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = ()=>{
    setIsLoading(true)
    setTimeout(() => {
      navigate("/setupTwo")
      setIsLoading(false);
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
                <label htmlFor="shortTermGoals" className="block text-gray-950">
                Short Term Goals
                </label>
                <select 
                  id="shortTermGoals"
                  name="shortTermGoals" 
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500">
                  <option value="Finish Homework">Finish Homework</option>
                  <option value="Prepare for exams">Prepare for exams</option>
                  <option value="Learn new skills">Learn new skills</option>
                  <option value="Complete assignments">Complete assignments</option>
                  <option value="Review lecture notes">Review lecture notes</option>
                  <option value="Research for project">Research for project</option>
                  <option value="Practice problem-solving">Practice problem-solving</option>
                  <option value="Participate in study group">Participate in study group</option>
                  <option value="Revise class presentations">Revise class presentations</option>
                  <option value="Attend academic workshop">Attend academic workshop</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="longTermGoals" className="block text-gray-950">
                Long Term Goals
                </label>
                <select 
                  id="longTermGoals"
                  name="longTermGoals" 
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500">
                  <option value="Graduate with Honors">Graduate with Honors</option>
                  <option value="Secure Internship Placement">Secure Internship Placement</option>
                  <option value="Publish Research Paper">Publish Research Paper</option>
                  <option value="Participate in Study Abroad Program">Participate in Study Abroad Program</option>
                  <option value="Apply to Graduate School">Apply to Graduate School</option>
                  <option value="Build Professional Network">Build Professional Network</option>
                  <option value="Develop Leadership Skills">Develop Leadership Skills</option>
                  <option value="Explore Career Opportunities">Explore Career Opportunities</option>
                  <option value="Pursue Doctoral Studies">Pursue Doctoral Studies</option>
                  <option value="Complete Double Major">Complete Double Major</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="preferredStudyTimes" className="block text-gray-950">
                Preferred Study Times
                </label>
                <select 
                  id="preferredStudyTimes"
                  name="preferredStudyTimes" 
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500">
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                  <option value="Night">Night</option>
                </select>
              </div>

              <button
                type="button"
                onClick={handleClick}
                className="flex items-center justify-center bg-gray-950 hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4 w-full"
              >
                {isLoading && <Waveform color="white" size={25} stroke={3.5} speed={1} />}
                {!isLoading && "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetupOne;
