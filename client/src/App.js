import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import RegisterPage from "./pages/RegisterPage";
import DashProfiles from "./features/users/DashProfiles";
import DashGroups from "./features/users/DashGroups";
import DashCal from "./features/calender/DashCal";
import DashChats from "./features/chats/DashChats";
import DashHome from "./features/posts/DashHome";
import ProfilePage from "./features/users/ProfilePage";
import GroupPage from "./features/users/GroupPage";
import ChatPage from "./features/chats/ChatPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="register" element={<RegisterPage />} />
          <Route exact path="login" element={<LoginPage />} />
          <Route exact path="dashboard" element={<DashboardPage />}>
            <Route exact path="home" element={<DashHome />} />
            <Route path="profiles" element={<DashProfiles />} />
            <Route exact path="groups" element={<DashGroups />} />
            <Route exact path="calender" element={<DashCal />} />
            <Route exact path="chats" element={<DashChats />} />
          </Route>
          <Route exact path="/profileid" element={<ProfilePage />} />
          <Route exact path="/groupid" element={<GroupPage />} />
          <Route exact path="chats/chatid" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
