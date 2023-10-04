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
import ProfilePageView from "./features/users/ProfilePageView";
import GroupPage from "./features/users/GroupPage";
import ChatPage from "./features/chats/ChatPage";
import LoginPage from "./pages/LoginPage";
import UserProfileView from "./features/users/UserProfileView";
import ProtectedRoute from "./pages/ProtectedRoute";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import EditProfile from "./features/users/EditProfile";
import PageNotFound from "./pages/PageNotFound";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="register" element={<RegisterPage />} />
            <Route exact path="login" element={<LoginPage />} />
            <Route
              exact
              path="dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            >
              <Route exact path="home" element={<DashHome />} />
              <Route path="profiles" element={<DashProfiles />} />
              <Route exact path="groups" element={<DashGroups />} />
              <Route exact path="calender" element={<DashCal />} />
              <Route exact path="chats" element={<DashChats />} />
            </Route>
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/userProfile" element={<UserProfileView />} />
            <Route
              exact
              path="/userProfile/editProfile"
              element={<EditProfile />}
            />
            <Route exact path="/:profileId" element={<ProfilePageView />} />
            <Route exact path="/groupid" element={<GroupPage />} />
            <Route exact path="chats/:chatId" element={<ChatPage />} />
            <Route exact path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </LocalizationProvider>
    </Router>
  );
}

export default App;
