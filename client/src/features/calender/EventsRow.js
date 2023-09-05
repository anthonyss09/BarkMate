import Wrapper from "../../assets/wrappers/EventsRowW";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

export default function EventsRow({ eventsTitle, events }) {
  const [showEvents, setShowEvents] = useState(false);
  const numEvents = events ? events.length : "";

  const eventList = events ? (
    events.map((event, index) => {
      const newDate = new Date(event.dateString + "T" + event.eventTime);
      console.log(event.dateString);
      console.log(newDate);
      return (
        <div key={index} className="event">
          <div className="event-date">
            <span className="event-date-text"></span>{" "}
            {newDate.getDate() +
              "/" +
              newDate.getMonth() +
              "/" +
              newDate.getFullYear()}
          </div>
          <div className="event-time">
            <span className="event-time-text"></span>{" "}
            {newDate.getHours() + ":" + newDate.getMinutes()}
            {newDate.getMinutes().toString().length < 2 && "0"}
          </div>
          <div className="event-note">{event.eventNote}</div>
        </div>
      );
    })
  ) : (
    <div>no content</div>
  );
  return (
    <Wrapper>
      <div className="events-row-main">
        {" "}
        <div
          className="events-row-header"
          onClick={() => {
            setShowEvents(!showEvents);
          }}
        >
          <span className="number-circle">{numEvents}</span>
          <p>{eventsTitle}</p>
          <div className="arrow-icon">
            {showEvents && <MdKeyboardArrowUp size={25} />}
            {!showEvents && <MdKeyboardArrowDown size={25} />}
          </div>
        </div>
        {showEvents && <div className="event-list">{eventList}</div>}
      </div>
    </Wrapper>
  );
}
