import React, { useEffect, useState, useRef } from "react";
import { ImSad } from "react-icons/im";
import { GrAdd } from "react-icons/gr";
import axios from "axios";
import SubjectCard from "./SubjectCard";


function Subject() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const modalRef = useRef(null);
  const [allSubjects, setAllSubjects] = useState([]);
  const [subName, setSubName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [color, setColor] = useState("");
  const [desc, setDesc] = useState("");
  const [noSubjects, setNoSubjects] = useState(false);

  const handleAddSubject = () => {
    let addConfig = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${backendUrl}subjects/createSubject`,
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
      .request({
        method: "get",
        maxBodyLength: Infinity,
        url:  `${backendUrl}subjects/getSubjects`,
        headers: {},
      })
      .then((response) => {
        setAllSubjects(response.data);
        if (response.data.length === 0) {
          setNoSubjects(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.remove("hidden");
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.add("hidden");
    }
  };

  return (
    <>
      {noSubjects ? (
        // No subjects found
        <div className="h-full flex flex-col gap-4 justify-center items-center p-4">
          <h1 className="text-xl">No Subjects Added!</h1>
          <div className="text-4xl text-gray-500">
            <ImSad />
          </div>
        </div>
      ) : (
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-4">
            Your Subjects:
          </h1>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
          onClick={openModal}
        >
          <GrAdd />
        </button>
        <div
          id="crud-modal"
          ref={modalRef}
          tabIndex="-1"
          aria-hidden="true"
          className="hidden fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-md">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Add New Subject
              </h3>
              <form onSubmit={handleAddSubject}>
                <div className="grid gap-4">
                  <div>
                    <label
                      htmlFor="subName"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Subject Name
                    </label>
                    <input
                      type="text"
                      id="subName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Type subject name"
                      value={subName}
                      onChange={(e) => setSubName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="teacher"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Teacher
                    </label>
                    <input
                      type="text"
                      id="teacher"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Type teacher name"
                      value={teacher}
                      onChange={(e) => setTeacher(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="color"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Subject Color
                    </label>
                    <select
                      id="color"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    >
                      <option value="">Select color</option>
                      <option value="lime">Lime</option>
                      <option value="sky">Sky</option>
                      <option value="purple">Purple</option>
                      <option value="rose">Rose</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="desc"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Subject Description
                    </label>
                    <textarea
                      id="desc"
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Write subject description"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-2 px-4 py-2 text-sm text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                  >
                    Add Subject
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subject;
