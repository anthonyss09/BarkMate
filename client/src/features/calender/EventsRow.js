import Wrapper from "../../assets/wrappers/EventsRowW";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

export default function EventsRow({ eventsTitle, events, isLoading }) {
  const [showEvents, setShowEvents] = useState(false);
  const numEvents = events ? events.length : "";

  const eventList =
    !isLoading && events.length !== 0 ? (
      events.map((event, index) => {
        return (
          <div key={index} className="event">
            <div className="event-date">{event.dateString}</div>
            <div className="event-time">{event.eventTime}</div>
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
          {!isLoading && events.length !== 0 && (
            <span className="number-circle">{numEvents}</span>
          )}

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
