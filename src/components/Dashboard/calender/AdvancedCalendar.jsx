import moment from "moment";
import Calendar from "./Calendar";
import axios from "axios";
import { useEffect, useState } from "react";

const components = {
  event: (props) => {
    const eventType = props?.event?.data?.type;
    switch (eventType) {
      case "Reg":
        return (
          <div style={{ background: "blue", color: "white", height: "100%" }}>{props.title}</div>
        );
      case "App":
        return (
          <div style={{ color: "Black", height: "100%" }}>{props.title}</div>
        );
      default:
        return (
          <div style={{ color: "Black", height: "100%" }}>{props.title}</div>
        );
    }
  },
};

export default function ControlCalendar() {
  const [allExams, setAllExams] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
  // get all exams and store in allExams
  useEffect(() => {
    axios
      .request({
        method: "get",
        maxBodyLength: Infinity,
        url: `${backendUrl}exams/getExam`,
        headers: {},
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setAllExams(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Map fetched exams to events
  const events = allExams.map(exam => {
    const startDateTime = moment(`${exam.date}T${exam.time}`).toDate();
    const endDateTime = moment(startDateTime).add(1, 'hours').toDate();
    
    return {
      start: startDateTime,
      end: endDateTime,
      title: exam.subjectName,
      data: {
        type: "Reg",
      },
    };
  });

  return(
    <div className="p-4 h-full w-full">
      <Calendar events={events} components={components} />
    </div>
  )
}
