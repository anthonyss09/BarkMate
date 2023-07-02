import { Outlet } from "react-router-dom";
import NavBar from "../app/HomeNav";
import Footer from "../app/Footer";
import TaskBar from "../components/TaskBar";
import { useEffect } from "react";

export default function DashboardPage() {
  // const body = document.body;
  // const taskbar = document.querySelector(".taskbar");
  // let lastScroll = 0;
  // window.addEventListener("scroll", () => {
  //   let currentScroll = window.pageYOffset;

  //   if (currentScroll - lastScroll > 0) {
  //     taskbar.classList.add("scroll-down");
  //     taskbar.classList.remove("scroll-up");
  //   } else {
  //     taskbar.classList.add("scroll-up");
  //     taskbar.classList.remove("scroll-down");
  //   }
  //   lastScroll = currentScroll;
  // });

  return (
    <div className="main-container full-page">
      <NavBar />
      <TaskBar />
      <div className="outlet-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
