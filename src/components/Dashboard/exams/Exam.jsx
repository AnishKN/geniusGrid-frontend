import React, { useEffect, useState, useRef } from "react";
import { BiHappyHeartEyes } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import axios from "axios";
import ExamCard from "./ExamCard";

function Exam() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const modalRef = useRef(null);
  const [allSubjects, setAllSubjects] = useState([]);
  const [allExams, setAllExams] = useState([]);
  const [subjectName, setSubjectName] = useState("");
  const [examType, setExamType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [slot, setSlot] = useState("");
  const [room, setRoom] = useState("");
  const [noExams, setNoExams] = useState(false);

  useEffect(() => {
    fetchSubjects();
    fetchExams();
  }, []);

  const fetchSubjects = () => {
    axios
      .get(`${backendUrl}subjects/getSubjects`)
      .then((response) => {
        setAllSubjects(response.data);
      })
      .catch((error) => {
        console.log("Error fetching subjects:", error);
      });
  };

  const fetchExams = () => {
    axios
      .get(`${backendUrl}exams/getExam`)
      .then((response) => {
        setAllExams(response.data);
        if (response.data.length === 0) {
          setNoExams(true);
        }
      })
      .catch((error) => {
        console.log("Error fetching exams:", error);
      });
  };

  const handleAddExam = () => {
    axios
      .post(`${backendUrl}exams/createExam`, {
        subjectName,
        examType,
        date,
        time,
        slot,
        room,
        status: "active",
      })
      .then((response) => {
        console.log("Exam added:", response.data);
        setAllExams([...allExams, response.data]);
        closeModal();
        fetchExams(); // Refresh exams list after adding
      })
      .catch((error) => {
        console.log("Error adding exam:", error);
      });
  };

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.remove("hidden");
    }
  };

  const closeModal = () => {
    setSubjectName("");
    setExamType("");
    setDate("");
    setTime("");
    setSlot("");
    setRoom("");
    if (modalRef.current) {
      modalRef.current.classList.add("hidden");
    }
  };

  return (
    <>
      {noExams ? (
        <div className="h-full flex flex-col gap-8 justify-center items-center">
          <h1 className="text-xl">No Upcoming Exams!</h1>
          <div className="text-4xl">
            <BiHappyHeartEyes />
          </div>
        </div>
      ) : (
        <div className="p-4">
          <h1 className="text-2xl">
            <b>Exams:</b>
          </h1>
          <div className="my-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {allExams.map((exam) => (
              <ExamCard key={exam._id} exam={exam} />
            ))}
          </div>
        </div>
      )}

      {/* Add exam Modal */}
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
          className="hidden fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg"
        >
          <div className="relative p-4 w-full max-w-md">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900">
                  Add New Exam
                </h3>
                <button
                  type="button"
                  className="text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={closeModal}
                >
                  <svg
                    className="w-3 h-3"
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
              <div className="p-4">
                <div className="grid gap-4">
                  <div>
                    <label
                      htmlFor="subjectName"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Exam Subject
                    </label>
                    <select
                      id="subjectName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={subjectName}
                      onChange={(e) => setSubjectName(e.target.value)}
                      required
                    >
                      <option value="">Select Exam Subject</option>
                      {allSubjects.map((subject) => (
                        <option key={subject._id} value={subject.subName}>
                          {subject.subName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="examType"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Exam Type
                    </label>
                    <select
                      id="examType"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={examType}
                      onChange={(e) => setExamType(e.target.value)}
                      required
                    >
                      <option value="">Select Exam Type</option>
                      <option value="Finals">Finals</option>
                      <option value="Internal">Internal</option>
                      <option value="Class Test">Class Test</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="slot"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Slot No
                    </label>
                    <input
                      type="text"
                      id="slot"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={slot}
                      onChange={(e) => setSlot(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="room"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Room No
                    </label>
                    <input
                      type="text"
                      id="room"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    onClick={handleAddExam}
                  >
                    Add Exam
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

export default Exam;
