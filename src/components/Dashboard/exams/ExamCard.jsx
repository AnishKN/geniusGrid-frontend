import React from "react";


function ExamCard({ exam }) {
  
  return (
    <div className=" bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden">
        <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-black">{exam.subjectName}</h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-gray-900">Exam Type:</p>
            <p className="text-black">{exam.examType}</p>
          </div>
          <div>
            <p className="text-gray-900">Date:</p>
            <p className="text-black">{exam.date}</p>
          </div>
          <div>
            <p className="text-gray-900">Time:</p>
            <p className="text-black">{exam.time}</p>
          </div>
          <div>
            <p className="text-gray-900">Slot:</p>
            <p className="text-black">{exam.slot}</p>
          </div>
          <div>
            <p className="text-gray-900">Room:</p>
            <p className="text-black">{exam.room}</p>
          </div>
          <div>
            <p className="text-gray-900">Status:</p>
            <p className={`font-semibold ${exam.status === 'active' ? 'text-green-400' : 'text-red-400'}`}>{exam.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamCard;
