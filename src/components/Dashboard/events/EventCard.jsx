import React from "react";


function EventCard({ event }) {
  
  return (
    <div className=" bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden">
        <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-black">{event.name}</h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-gray-900">Type:</p>
            <p className="text-black">{event.type}</p>
          </div>
          <div>
            <p className="text-gray-900">Date:</p>
            <p className="text-black">{event.date}</p>
          </div>
          <div>
            <p className="text-gray-900">Time:</p>
            <p className="text-black">{event.time}</p>
          </div>
          <div>
            <p className="text-gray-900">Status:</p>
            <p className={`font-semibold ${event.status === 'active' ? 'text-green-400' : 'text-red-400'}`}>{event.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
