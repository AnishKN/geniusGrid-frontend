import React, { useEffect, useState, useRef } from "react";
import { ImSad } from "react-icons/im";
import { GrAdd } from "react-icons/gr";
import axios from "axios";
import SubjectCard from "./SubjectCard";

let getConfig = {
  method: "get",
  maxBodyLength: Infinity,
  url: "http://localhost:5000/subjects/getSubjects",
  headers: {},
};

function Subject() {
  const modalRef = useRef(null);
  let sub = false;
  const [allSubjects, setAllSubjects] = useState([]);
  const [subName, setSubName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [color, setColor] = useState("");
  const [desc, setDesc] = useState("");

  const handleAddSubject = () => {
    let addConfig = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/subjects/createSubject",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        subName: subName,
        teacher: teacher,
        color: color,
        desc: desc,
        status: "active",
      }),
    };
    axios
      .request(addConfig)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setAllSubjects((prevSubjects) => [...prevSubjects, response.data]);
        if (modalRef.current) {
          modalRef.current.classList.add("hidden");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .request(getConfig)
      .then((response) => {
        setAllSubjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (allSubjects.length === 0) {
    sub = true;
  }

  return (
    <>
      {sub ? (
        // No subjects found
        <div className="h-full flex flex-col gap-8 justify-center items-center">
          <h1 className="text-xl">No Subjects Added!</h1>
          <div className="text-4xl">
            <ImSad />
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl">
            <b>Your Subjects:</b>
          </h1>
          <div className="my-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {allSubjects.map((subject) => (
              <SubjectCard key={subject._id} subject={subject} />
            ))}
          </div>
        </div>
      )}

      {/* Add subject Modal */}
      <div>
        <button
          type="button"
          className="fixed bottom-6 right-6 rounded-full flex justify-center items-center text-white bg-blue-400 h-12 w-12 shadow-lg cursor-pointer hover:bg-blue-500"
          data-modal-toggle="crud-modal"
          onClick={() => modalRef.current.classList.remove("hidden")}
        >
          <GrAdd />
        </button>
        <div
          id="crud-modal"
          ref={modalRef}
          tabIndex="-1"
          aria-hidden="true"
          className="hidden absolute h-screen w-full top-0 left-0 flex justify-center items-center backdrop-blur-lg"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Add new Subject
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crud-modal"
                  onClick={() => modalRef.current.classList.add("hidden")}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="subName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Subject name
                    </label>
                    <input
                      type="text"
                      name="subName"
                      id="subName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type subject name"
                      value={subName}
                      onChange={(e) => setSubName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="Teacher"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Teacher
                    </label>
                    <input
                      type="text"
                      name="Teacher"
                      id="Teacher"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type teacher name"
                      value={teacher}
                      onChange={(e) => setTeacher(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="color"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Subject Color
                    </label>
                    <select
                      id="color"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    >
                      <option defaultValue={""}>Select color</option>
                      <option value="lime">Lime</option>
                      <option value="sky">Sky</option>
                      <option value="purple">Purple</option>
                      <option value="rose">Rose</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Subject Description
                    </label>
                    <textarea
                      id="description"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write Subject description here"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleAddSubject}
                >
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Add new Subject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subject;
