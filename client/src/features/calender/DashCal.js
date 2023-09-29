import Wrapper from "../../assets/wrappers/DashCalW";
import { IoIosAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import AddEvent from "./AddEvent";
import { useGetEventsQuery } from "./CalenderSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import EventsRow from "./EventsRow";
import { adjustEvents } from "../../utils/helpers";
import { useUpdateEventsMutation } from "./CalenderSlice";

export default function DashCal() {
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [todayString, setTodayString] = useState("");

  const { _id: userId } = useSelector(selectCurrentUser);
  const { data, isLoading } = useGetEventsQuery(userId);
  const [updateEvents] = useUpdateEventsMutation();

  let todaysEvents;
  if (!isLoading) {
    todaysEvents = data.events.filter(
      (event) => event.dateString == todayString
    );
  }

  let upcomingOneTimeEvents;
  if (!isLoading) {
    upcomingOneTimeEvents = data.events.filter(
      (event) => event.eventOccurrence === "one time"
    );
  }

  let reoccurringEvents;
  if (!isLoading) {
    reoccurringEvents = data.events.filter(
      (event) => event.eventOccurrence !== "one time"
    );
  }

  const handleClick = () => {
    setShowAddEvent(!showAddEvent);
  };

  useEffect(() => {
    const today = new Date();
    let month = today.getMonth().toString();
    if (month.length < 2) {
      month = "0" + (Number(month) + 1).toString();
    }
    let date = today.getDate().toString();
    if (date.length < 2) {
      date = "0" + date;
    }

    setTodayString(today.getFullYear().toString() + "-" + month + "-" + date);

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      console.log(data);
      const { eventsCopy, eventsMutated } = adjustEvents(data.events);
      if (eventsMutated) {
        console.log("events are mutated");
        console.log(eventsCopy);
        updateEvents({ eventsCopy });
      }
    }
  }, [data]);
  return (
    <Wrapper>
      {/* {showAlert && <Alert alertMessage={alertMessage} alertType={alertType} />} */}

      <main className="dash-main">
        <div className="dash-header">
          <h1 className="dash-page-name">Calender</h1>
        </div>
        <section className="dash-cal-center">
          <EventsRow
            eventsTitle="Today's events"
            events={todaysEvents}
            isLoading={isLoading}
          />
          <EventsRow
            eventsTitle="Upcoming one time events"
            events={upcomingOneTimeEvents}
            isLoading={isLoading}
          />
          <EventsRow
            eventsTitle="Reoccurring events"
            events={reoccurringEvents}
            isLoading={isLoading}
          />
          <div className="add-line" onClick={handleClick}>
            {" "}
            <div className="add-event">
              <IoIosAdd size={30} />
            </div>
            <span className="add-span">Add event</span>
          </div>
        </section>
      </main>
      {showAddEvent && <AddEvent setShowAddEvent={setShowAddEvent} />}
    </Wrapper>
  );
}
