import React from "react";


function EventCard({ event }) {
  
  return (
    // <div className=" bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden">
    //     <div className="p-6">
    //     <h2 className="text-2xl font-bold mb-2 text-black">{event.name}</h2>
    //     <div className="grid grid-cols-2 gap-2 text-sm">
    //       <div>
    //         <p className="text-gray-900">Type:</p>
    //         <p className="text-black">{event.type}</p>
    //       </div>
    //       <div>
    //         <p className="text-gray-900">Date:</p>
    //         <p className="text-black">{event.date}</p>
    //       </div>
    //       <div>
    //         <p className="text-gray-900">Time:</p>
    //         <p className="text-black">{event.time}</p>
    //       </div>
    //       <div>
    //         <p className="text-gray-900">Status:</p>
    //         <p className={`font-semibold ${event.status === 'active' ? 'text-green-400' : 'text-red-400'}`}>{event.status}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
  <div className="bg-blue-500 p-6 transition-colors duration-300 hover:bg-blue-600">
    <h2 className="text-2xl font-bold mb-2 text-white">{event.name}</h2>
    <div className="grid grid-cols-2 gap-4 text-sm text-white">
      <div>
        <p className="font-semibold">Type:</p>
        <p>{event.type}</p>
      </div>
      <div>
        <p className="font-semibold">Date:</p>
        <p>{event.date}</p>
      </div>
      <div>
        <p className="font-semibold">Time:</p>
        <p>{event.time}</p>
      </div>
      <div>
        <p className="font-semibold">Status:</p>
        <p className={`font-bold ${event.status === 'active' ? 'text-green-200' : 'text-red-200'}`}>{event.status}</p>
      </div>
    </div>
  </div>
  <div className="p-4 bg-blue-100">
    <p className="text-sm text-blue-900">{event.desc}</p>
  </div>
</div>


  );
}

export default EventCard;
