import Wrapper from "../assets/wrappers/TaskBarW";
import { MdOutlinePeople } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BiCalendar, BiHome } from "react-icons/bi";
import { HiOutlineChat, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";

export default function TaskBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [dropped, setDropped] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 300) {
      setCollapsed(true);
      setDropped(true);
    } else {
      setCollapsed(false);
      setDropped(false);
    }
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const handleShowTaskBar = () => {
    setCollapsed(false);
  };

  return (
    <Wrapper>
      <section
        className={`task-bar-main ${collapsed ? "collapsed" : ""} ${
          dropped ? "dropped" : ""
        }`}
      >
        {!collapsed ? (
          <div className="task-bar-center">
            <div className="task-container">
              {" "}
              <NavLink to="/dashboard/home" className="task task-home">
                <BiHome size={20} className="task-icon icon" />
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
        ) : (
          <div className="task-bar-center" onClick={handleShowTaskBar}>
            {" "}
            <div className="task task-home">
              <BiHome size={22} className="task-icon" />
            </div>
            <div className="task task-arrow-right">
              {" "}
              <BiChevronRight size={22} />
            </div>
          </div>
        )}
      </section>
    </Wrapper>
  );
}
