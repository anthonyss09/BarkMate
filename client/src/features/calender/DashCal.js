import Wrapper from "../../assets/wrappers/DashCalW";
import { IoIosArrowDown } from "react-icons/io";
import { TbArrowBadgeDown } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { useEffect } from "react";

export default function DashCal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <main className="dash-main">
        <div className="dash-header">
          <h1 className="dash-page-name">Calender</h1>
        </div>
        <section className="dash-cal-center">
          <div className="events daily-events">
            <span className="number-circle">4</span>
            <p> Today's events</p>
            <div className="arrow-icon">
              <MdKeyboardArrowDown size={25} />
            </div>
          </div>
          <div className="events weekly-events">
            <span className="number-circle">1</span>
            <p> Upcoming one time events </p>
            <div className="arrow-icon">
              <MdKeyboardArrowDown size={25} />
            </div>
          </div>
          <div className="events all-events">
            <span className="number-circle">3</span>
            <p> reoccurring events </p>
            <div className="arrow-icon">
              <MdKeyboardArrowDown size={25} />
            </div>
          </div>
          <div className="add-line">
            {" "}
            <div className="add-event">
              <IoIosAdd size={30} />
            </div>
            <span className="add-span">Add event</span>
          </div>
        </section>
      </main>
    </Wrapper>
  );
}
