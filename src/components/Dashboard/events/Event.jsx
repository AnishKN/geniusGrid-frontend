import React, { useEffect, useState, useRef } from "react";
import { GrAdd } from "react-icons/gr";
import axios from "axios";
import EventCard from "../events/EventCard";
import { ImSad } from "react-icons/im";

function Event() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const modalRef = useRef(null);
  const [allEvents, setAllEvents] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [status, setStatus] = useState("active");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios
      .get(`${backendUrl}events/getEvents`)
      .then((response) => {
        setAllEvents(response.data);
      })
      .catch((error) => {
        console.log("Error fetching events:", error);
      });
  };

  const handleAddEvent = () => {
    const addConfig = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${backendUrl}events/createEvent`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        name,
        type,
        date,
        time,
        venue,
        desc,
        status,
      }),
    };

    axios
      .request(addConfig)
      .then((response) => {
        console.log("Event added:", response.data);
        setAllEvents((prevEvents) => [...prevEvents, response.data]);
        closeModal();
        fetchEvents(); // Refresh events list after adding
      })
      .catch((error) => {
        console.log("Error adding event:", error);
      });
  };

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.remove("hidden");
    }
  };

  const closeModal = () => {
    setName("");
    setType("");
    setDate("");
    setTime("");
    setVenue("");
    setDesc("");
    if (modalRef.current) {
      modalRef.current.classList.add("hidden");
    }
  };

  return (
    <>
      {allEvents.length === 0 ? (
        // No Events found
        <div className="h-full flex flex-col gap-8 justify-center items-center">
          <h1 className="text-xl">No Upcoming Events!</h1>
          <div className="text-4xl">
            <ImSad />
          </div>
        </div>
      ) : (
        <div className="p-4">
          <h1 className="text-2xl">
            <b>Events:</b>
          </h1>
          <div className="my-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {allEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </div>
      )}

      {/* Add event Modal */}
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
                  Add New Event
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
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                      Event Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-900">
                      Event Type
                    </label>
                    <select
                      id="type"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      required
                    >
                      <option value="">Select Event Type</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Seminar">Seminar</option>
                      <option value="Conference">Conference</option>
                      <option value="Meetup">Meetup</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-900">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-3 py-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-900">
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
                    <label htmlFor="venue" className="block text-sm font-medium text-gray-900">
                      Venue
                    </label>
                    <input
                      type="text"
                      id="venue"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={venue}
                      onChange={(e) => setVenue(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="desc" className="block text-sm font-medium text-gray-900">
                      Description
                    </label>
                    <textarea
                      id="desc"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={handleAddEvent}
                >
                  Add Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;

