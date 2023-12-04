import { Outlet } from "react-router-dom";
import NavBar from "../app/HomeNav";
import Footer from "../app/Footer";
import TaskBar from "../components/TaskBar";
import { useSelector } from "react-redux";
import { selectAlertsInfo } from "../features/alerts/alertsSlice";
export default function DashboardPage() {
  const { overflowHidden } = useSelector(selectAlertsInfo);
  return (
    <div
      className={`main-container full-page ${
        overflowHidden ? "overflow-hidden" : ""
      }`}
    >
      <div className="sticky-nav">
        {" "}
        <NavBar />
      </div>
      <div
        className={`outlet-container full-page ${
          overflowHidden ? "overflow-hidden" : ""
        }`}
      >
        <TaskBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
