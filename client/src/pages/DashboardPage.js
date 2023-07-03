import { Outlet } from "react-router-dom";
import NavBar from "../app/HomeNav";
import Footer from "../app/Footer";
import TaskBar from "../components/TaskBar";
import { useEffect } from "react";
import useWebSocket, { readyState } from "react-use-websocket";

export default function DashboardPage() {
  const WS_URL = "ws://localhost:8080";

  const { sendMessage, lastMessage, readyState } = useWebSocket(WS_URL, {
    onOpen: () => console.log("web socket opened"),
    shouldReconnect: (closeEvent) => true,
  });

  useEffect(() => {
    sendMessage("hello web socket");
  }, []);

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
