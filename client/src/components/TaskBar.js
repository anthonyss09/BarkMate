import Wrapper from "../assets/wrappers/TaskBarW";
import { MdOutlinePeople } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BiCalendar, BiHome } from "react-icons/bi";
import { HiOutlineChat, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function TaskBar() {
  return (
    <Wrapper>
      <section className="task-bar-main">
        <div className="task-bar-center">
          <div className="task-container">
            {" "}
            <NavLink to="/dashboard/home" className="task task-home">
              <BiHome size={20} />
            </NavLink>
          </div>
          <div className="task-container">
            {" "}
            <NavLink to="/dashboard/profiles" className="task task-profiles ">
              <MdOutlinePeople size={20} />
            </NavLink>
          </div>

          {/* <NavLink to="/dashboard/groups" className="task task-groups ">
            <IoIosPeople size={20} />
          </NavLink> */}
          <div className="task-container">
            {" "}
            <NavLink to="/dashboard/calender" className="task task-calendar ">
              <BiCalendar size={20} />
            </NavLink>
          </div>
          <div className="task-container">
            {" "}
            <NavLink to="/dashboard/chats" className="task task-chats ">
              <HiOutlineChat size={20} />
            </NavLink>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
