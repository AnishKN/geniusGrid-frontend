import React from "react";

function ExamCard({ exam }) {
  return (
    <div className="border-black shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="p-6 rounded-t-lg">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">
          {exam.subjectName}
        </h2>
        <div className="grid grid-cols-2 gap-4 text-sm text-purple-900">
          <div>
            <p className="font-semibold">Exam Type:</p>
            <p>{exam.examType}</p>
          </div>
          <div>
            <p className="font-semibold">Date:</p>
            <p>{exam.date}</p>
          </div>
          <div>
            <p className="font-semibold">Time:</p>
            <p>{exam.time}</p>
          </div>
          <div>
            <p className="font-semibold">Slot:</p>
            <p>{exam.slot}</p>
          </div>
          <div>
            <p className="font-semibold">Room:</p>
            <p>{exam.room}</p>
          </div>
          <div>
            <p className="font-semibold">Status:</p>
            <p
              className={`font-bold ${
                exam.status === "active" ? "text-green-500" : "text-red-500"
              }`}
            >
              {exam.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamCard;
