import Wrapper from "../../assets/wrappers/EventsRowW";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

export default function EventsRow({ eventsTitle, events, isLoading }) {
  const [showEvents, setShowEvents] = useState(false);
  const numEvents = events ? events.length : "";

  const eventList =
    !isLoading && events.length !== 0 ? (
      events.map((event, index) => {
        // const newDate = new Date(event.dateString + "T" + event.eventTime);
        return (
          <div key={index} className="event">
            <div className="event-date">
              {/* <span className="event-date-text"></span>{" "}
              {newDate.getDate() +
                "/" +
                Number(newDate.getMonth() + 1).toString() +
                "/" +
                newDate.getFullYear()} */}
              {event.dateString}
            </div>
            <div className="event-time">
              {/* <span className="event-time-text"></span>{" "}
              {newDate.getHours() + ":" + newDate.getMinutes()}
              {newDate.getMinutes().toString().length < 2 && "0"} */}
              {event.eventTime}
            </div>
            <div className="event-note">{event.eventNote}</div>
          </div>
        );
      })
    ) : (
      <div className="no-events">No scheduled events.</div>
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
          <span className="number-circle">
            {!isLoading && events.length != 0 && numEvents}
          </span>
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
