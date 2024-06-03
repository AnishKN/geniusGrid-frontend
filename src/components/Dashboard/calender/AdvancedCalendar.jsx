import moment from "moment";
import Calendar from "./Calendar";

const events = [
  {
    start: moment("2024-05-28T10:03:00").toDate(),
    end: moment("2024-05-28T11:05:00").toDate(),
    title: "MRI Registration",
    data: {
      type: "Reg",
    },
  },
];

const components = {
  event: (props) => {
    const eventType = props?.event?.data?.type;
    switch (eventType) {
      case "Reg":
        return (
          <div style={{ color: "Black", height: "100%" }}>
            {props.title}
          </div>
        );
      case "App":
        return (
          <div
            style={{ color: "Black", height: "100%" }}
          >
            {props.title}
          </div>
        );
      default:
        return null;
    }
  },
};

export default function ControlCalendar() {
  return <Calendar events={events} components={components} />;
}
