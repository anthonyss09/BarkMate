import Wrapper from "../../assets/wrappers/AddEventW";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
// import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useCreateEventMutation } from "./CalenderSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";
import { displayAlert, clearAlert } from "../alerts/alertsSlice";
import { selectAlertInfo } from "../alerts/alertsSlice";
import Alert from "../alerts/Alert";
import { logoutUser } from "../auth/authSlice";
import BeatLoader from "react-spinners/BeatLoader";

export default function AddEvent({ setShowAddEvent }) {
  const [startDate, setStartDate] = useState(new Date());
  const [eventTime, setEventTime] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventOccurrence, setEventOccurrence] = useState("");
  const [eventNote, setEventNote] = useState("");
  const [addingEvent, setAddingEvent] = useState(false);

  // const { showAlert, alertMessage, alertType } = useSelector(selectAlertInfo);

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const { _id: userId } = useSelector(selectCurrentUser);
  const [createEvent] = useCreateEventMutation();

  const handleDateChange = (e) => {
    // date.day = e.$D;
    // date.month = e.$M;
    // date.year = e.$y;
    if (!e) {
      return;
    }
    const date = {};

    let day = e.$D;
    if (Number(day) < 10) {
      day = "0" + day;
    }
    let month = e.$M;
    if (Number(month) < 10) {
      month = "0" + (Number(month) + 1).toString();
    }
    date.dateString = e.$y + "-" + month + "-" + day;
    date.dayOfWeek = e.$W;
    setEventDate(date);
    console.log(date);
    console.log(e);
  };

  const handleTimeChange = (e) => {
    // const time = {};
    // time.hour = e.$H;
    // time.minute = e.$m;
    let hour = e.$H;
    let minute = e.$m;
    if (Number(hour) < 10) {
      hour = "0" + hour;
    }
    if (Number(minute) < 10) {
      minute = "0" + minute;
    }
    const time = hour + ":" + minute + ":" + "00";
    setEventTime(time);
    console.log(eventTime);
  };

  const handleEventOccurrenceChange = (e) => {
    setEventOccurrence(e.target.value);
  };

  const handleEventNoteChange = (e) => {
    setEventNote(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAddingEvent(true);
    const newEvent = await createEvent({
      userId,
      eventDate,
      eventTime,
      eventOccurrence,
      eventNote,
    });
    setAddingEvent(false);
    setShowAddEvent(false);

    if (newEvent.error) {
      dispatch(
        displayAlert({
          alertMessage: newEvent.error.data.message,
          alertType: "danger",
        })
      );
      console.log(newEvent);
    } else if (newEvent.data) {
      dispatch(
        displayAlert({
          alertMessage: newEvent.data.message,
          alertType: "success",
        })
      );
      console.log("the data is", newEvent.data.message);
    }

    setTimeout(() => {
      if (
        newEvent.error &&
        newEvent.error.data.message === "Invalid credentials."
      ) {
        dispatch(logoutUser());
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        Navigate("/");
        console.log("caught the credentials");
      }
      setEventDate("");
      setEventTime("");
      setEventOccurrence("");
      setEventNote("");
      dispatch(clearAlert());
    }, 2000);
  };

  return (
    <Wrapper>
      <form className="add-event-main" onSubmit={handleSubmit}>
        {addingEvent && (
          <BeatLoader size={35} color="lightBlue" className="beat-loader" />
        )}
        <button
          className="btn btn-discard-event"
          onClick={() => {
            setShowAddEvent(false);
          }}
        >
          X
        </button>
        <h1 className="add-event-header">New Event</h1>

        <div className="add-event-body">
          <div className="add-date-row">
            <label className="add-date-label" htmlFor="selectDate">
              Select date:
            </label>
            <DatePicker id="selectDate" onChange={handleDateChange} />
          </div>
          <div className="add-date-row">
            <label className="add-date-label" htmlFor="selectDate">
              Select time:
            </label>
            <TimePicker
              id="selectDate"
              className="time-picker"
              onChange={handleTimeChange}
            />
          </div>
          <div className="add-date-row">
            {" "}
            <label className="add-date-label" htmlFor="selectDate">
              Occurence:
            </label>
            <select
              name="filters"
              id="distance"
              className="date-picker"
              required
              defaultValue="select occurence"
              onChange={handleEventOccurrenceChange}
            >
              <option value="" aria-disabled>
                select occurence
              </option>
              <option>one time</option>
              <option>daily</option>
              <option>weekly</option>
              <option>monthly</option>
            </select>
          </div>
          {/* <div className="add-description-row"> */}
          {/* <label htmlFor="note" className="label-note">
            Note:
          </label> */}
          <textarea
            id="note"
            rows={3}
            placeholder="add note..."
            className="add-description-textarea"
            onChange={handleEventNoteChange}
          />
        </div>
        {/* </div> */}
        <div className="add-event-buttons">
          <button
            type="submit"
            className="btn btn-add-event"
            disabled={addingEvent}
          >
            <IoIosAdd size={30} />
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
