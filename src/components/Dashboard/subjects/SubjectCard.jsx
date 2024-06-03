import React from "react";

const colorClasses = {
  lime: "bg-lime-300 hover:bg-lime-500",
  sky: "bg-sky-300 hover:bg-sky-500",
  purple: "bg-purple-300 hover:bg-purple-500",
  rose: "bg-rose-300 hover:bg-rose-500",
};

function SubjectCard({ subject }) {
  const bgColorClass = colorClasses[subject.color] || "bg-gray-300 hover:bg-gray-500";
  
  return (
    <div className={`max-w-sm ${bgColorClass} border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
          {subject.subName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-100">
          Teacher: {subject.teacher}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Description: {subject.desc}
        </p>
      </div>
    </div>
  );
}

export default SubjectCard;
