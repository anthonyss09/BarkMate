import { Outlet } from "react-router-dom";
import NavBar from "../app/HomeNav";
import Footer from "../app/Footer";
import TaskBar from "../components/TaskBar";

export default function DashboardPage() {
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
