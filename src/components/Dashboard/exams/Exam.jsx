import React, { useEffect, useState, useRef } from "react";
import { BiHappyHeartEyes } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import axios from "axios";
import ExamCard from "./ExamCard";

function Exam() {
  const modalRef = useRef(null);
  let exm = false;
  const [allSubjects, setAllSubjects] = useState([]);
  const [allExams, setAllExams] = useState([]);
  const [subjectName, setSubjectName] = useState("");
  const [examType, setExamType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [slot, setSlot] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    // get all subjects to show in options

    axios
      .request({
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:5000/subjects/getSubjects",
        headers: {},
      })
      .then((response) => {
        setAllSubjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // get all the exams which added
    axios
      .request({
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:5000/exams/getExam",
        headers: {},
      })
      .then((response) => {
        setAllExams(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (allExams.length === 0) {
    exm = true;
  }

  const handleAddExam = () => {
    axios.request({
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:5000/exams/createExam',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify({
        "subjectName": subjectName,
        "examType": examType,
        "date": date,
        "time": time,
        "slot": slot,
        "room": room,
        "status": "active"
      })
    })
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setAllExams((prevExams) => [...prevExams, response.data]);
        if (modalRef.current) {
          modalRef.current.classList.add("hidden");
        }
    })
    .catch((error) => {
      console.log(error);
    });

  };
  return (
    <>
      {exm ? (
        // No subjects found
        <div className="h-full flex flex-col gap-8 justify-center items-center">
          <h1 className="text-xl">No Upcoming Exams!</h1>
          <div className="text-4xl">
            <BiHappyHeartEyes />
          </div>
        </div>
      ) : (
        <div>
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
                  Add new Exam
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
                      htmlFor="Subject"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Exam Subject
                    </label>
                    <select
                      id="Subject"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={subjectName}
                      onChange={(e) => setSubjectName(e.target.value)}
                    >
                      <option defaultValue={""}>Select the Subject</option>
                      {allSubjects.map((subject) => (
                        <option value={subject.subName}>
                          {subject.subName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="Type"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Exam Type
                    </label>
                    <select
                      id="Type"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={examType}
                      onChange={(e) => setExamType(e.target.value)}
                    >
                      <option defaultValue={""}>Select Exam Type</option>
                      <option value={"Finals"}>Finals</option>
                      <option value={"Internal"}>Internal</option>
                      <option value={"Class Test"}>Class Test</option>
                    </select>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="Date"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="Date"
                      id="Date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type teacher name"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="Time"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      name="Time"
                      id="Time"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type teacher name"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="Slot"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Slot No
                    </label>
                    <input
                      type="text"
                      name="Slot"
                      id="Slot"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type Slot No"
                      value={slot}
                      onChange={(e) => setSlot(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="Room"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Room No
                    </label>
                    <input
                      type="text"
                      name="Room"
                      id="Room"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type Room No"
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleAddExam}
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
                  Add Exam
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exam;
