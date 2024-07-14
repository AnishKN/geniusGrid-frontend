import React, { useState, useEffect } from "react";

function MainContent() {
  const [notificationPermission, setNotificationPermission] = useState(
    Notification.permission
  );

  useEffect(() => {
    setNotificationPermission(Notification.permission);
  }, []);

  const requestNotificationPermission = () => {
    Notification.requestPermission().then((permission) => {
      setNotificationPermission(permission);
    });
  };

  const showNotification = (title, body) => {
    if (Notification.permission === "granted") {
      new Notification(title, { body: body });
    }
  };

  const scheduleNotifications = () => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const times = [
      { hour: 9, minute: 45 },
      { hour: 15, minute: 0 },
      { hour: 17, minute: 0 },
      { hour: 23, minute: 3 },
    ];

    times.forEach(({ hour, minute }) => {
      const targetTime = new Date(today);
      targetTime.setHours(hour);
      targetTime.setMinutes(minute);

      if (targetTime > now) {
        const delay = targetTime.getTime() - now.getTime();
        setTimeout(() => {
          showNotification(
            "Scheduled Notification",
            `This is a scheduled notification for ${hour}:${minute}`
          );
        }, delay);
      }
    });
  };

  useEffect(() => {
    if (notificationPermission === "granted") {
      scheduleNotifications();
    }
  }, [notificationPermission]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <header className="flex justify-between items-center mb-4 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
        </header>
        {notificationPermission === "default" && (
          <div
            className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6"
            role="alert"
          >
            <p className="font-bold">Enable Notifications</p>
            <p>Please enable notifications to receive updates.</p>
            <button
              className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
              onClick={requestNotificationPermission}
            >
              Enable Notifications
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Profile Card */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
              Profile
            </h2>
            <div className="flex items-center mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="mr-2">likhitha123@gmail.com</span>
            </div>
            <p className="text-gray-500 mb-4">Joined: 12 June, 2023</p>
            <button className="bg-black text-white px-4 py-2 rounded">
              View Profile
            </button>
          </div>

          {/* Exams Card */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Exams</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { count: 3, label: "Upcoming", color: "bg-red-400" },
                { count: 2, label: "Completed", color: "bg-teal-400" },
              ].map(({ count, label, color }) => (
                <div key={label} className="text-center">
                  <span
                    className={`text-2xl font-bold block ${color} p-2 rounded-lg`}
                  >
                    {count}
                  </span>
                  <span className="text-gray-500">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Study Progress Card */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
              Study Progress
            </h2>
            <div className="flex items-center justify-around">
              <div className="text-center">
                <div className="relative h-16 bg-gray-200 rounded-full text-center w-16">
                  <div className="absolute top-0 left-0 w-3/4 h-full bg-orange-500 rounded-full flex justify-center items-center text-white">
                    72%
                  </div>
                  <div className="absolute top-0 right-0 w-1/4 h-full bg-gray-200 rounded-full"></div>
                </div>
                <span className="block mt-2 text-gray-500">Current</span>
              </div>
              <div className="text-center">
                <div className="relative h-16 bg-gray-200 rounded-full text-center w-16">
                  <div className="absolute top-0 left-0 w-3/4 h-full bg-green-500 rounded-full flex justify-center items-center text-white">
                    23%
                  </div>
                  <div className="absolute top-0 right-0 w-1/4 h-full bg-gray-200 rounded-full"></div>
                </div>
                <span className="block mt-2 text-gray-500">Completed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tasks Activity */}
        <div className="mt-8">
          <h2 className="text-lg md:text-xl font-bold mb-4">Study Plans</h2>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {[
                      "Assigned to",
                      "Deadline",
                      "Task",
                      "Status",
                      "Project",
                      "",
                    ].map((header) => (
                      <th
                        key={header}
                        className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      name: "Juan M.",
                      date: "May 16th, 2023",
                      task: "Establish and maintain design",
                      status: "In Progress",
                      project: "Crimson Studio",
                    },
                    {
                      name: "Mia L.",
                      date: "Mar 14th, 2023",
                      task: "Conduct usability testing",
                      status: "Review",
                      project: "Nova Nexus ltd",
                    },
                    {
                      name: "Lynda O.",
                      date: "Apr 29th, 2023",
                      task: "Lead design thinking workshops",
                      status: "Done",
                      project: "Coastal brnd",
                    },
                  ].map(({ name, date, task, status, project }, index) => (
                    <tr key={index}>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">
                            {name}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">{date}</td>
                      <td className="py-4 px-6 whitespace-nowrap">{task}</td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            status === "In Progress"
                              ? "bg-yellow-100 text-yellow-800"
                              : status === "Review"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {status}
                        </span>
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">{project}</td>
                      <td className="py-4 px-6 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900">
                          See Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
