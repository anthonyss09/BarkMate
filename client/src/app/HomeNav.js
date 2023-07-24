import Wrapper from "../assets/wrappers/NavW";
import Logo from "../components/Logo";
import { HiBars3 } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import SmallSidebar from "../components/SmallSidebar";
import { useState, useEffect } from "react";
import BigSidebar from "../components/BigSidebar";
import { logoutUser } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import {
  useGetNotificationsQuery,
  useMarkAllNotificationsReadMutation,
} from "../features/api/apiSlice";
import { selectCurrentUser } from "../features/auth/authSlice";
import NotificationsView from "../features/notifications/NotificationsView";
import FriendsView from "../features/friends/FriendsView";
import { useGetFriendsQuery } from "../features/api/apiSlice";

export default function NavBar() {
  const [showSmallSidebar, setSmallShowSidebar] = useState(false);
  const [showBigSidebar, setShowBigSidebar] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showFriends, setShowFriends] = useState(false);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const currentUser = useSelector(selectCurrentUser);
  const {
    data: allNotifications,
    error,
    isLoading,
    refetch,
  } = useGetNotificationsQuery(currentUser._id);
  const [markAllNotificationsRead] = useMarkAllNotificationsReadMutation();
  // const { data: friends, isLoading: friendsLoadingState } = useGetFriendsQuery(
  //   currentUser.friends
  // );
  // console.log("prof view friends", friends);

  const notifications = allNotifications ? Object.values(allNotifications) : [];

  const unreadNotifications = notifications.filter(
    (notification) => notification.is_read === false
  );

  const notificationNumber =
    unreadNotifications.length > 50 ? "50+" : unreadNotifications.length;

  const handleSmallSidebar = () => {
    setSmallShowSidebar(!showSmallSidebar);
  };
  const handleBigSidebar = () => {
    setShowBigSidebar(!showBigSidebar);
  };
  const handleShowNotifications = () => {
    setShowNotifications(!showNotifications);
    markAllNotificationsRead(currentUser._id);
  };
  const handleShowFriends = () => {
    setShowFriends(!showFriends);
  };

  const handleClick = () => {
    dispatch(logoutUser());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    Navigate("/");
  };

  useEffect(() => {
    let lastTime = new Date().getTime();

    setInterval(function () {
      let currentTime = new Date().getTime();
      if (currentTime > lastTime + 2000 * 1.5) {
        window.location.reload(true);
      }
      lastTime = currentTime;
    }, 2000);
  }, []);

  return (
    <Wrapper>
      {showNotifications && (
        <NotificationsView
          notifications={notifications}
          handleShowNotifications={handleShowNotifications}
        />
      )}
      {showFriends && (
        <FriendsView
          handleShowFriends={handleShowFriends}
          currentUser={currentUser}
        />
      )}
      <nav className="nav-main ">
        <div className="nav-item bars">
          <HiBars3 size={25} onClick={handleBigSidebar} />
          {showBigSidebar && <BigSidebar handleClick={handleBigSidebar} />}
        </div>
        <Logo />
        <span className="nav-icons-container">
          <span
            className="notification-count"
            onClick={handleShowNotifications}
          >
            {notificationNumber}
          </span>
          <IoNotificationsOutline
            size={25}
            className="icon icon-notification"
            onClick={handleShowNotifications}
          />
          <FaUserCircle
            size={35}
            onClick={handleSmallSidebar}
            className="icon icon-user"
          />
        </span>
      </nav>
      {showSmallSidebar && (
        <SmallSidebar
          handleClick={handleClick}
          handleShowFriends={handleShowFriends}
        />
      )}
    </Wrapper>
  );
}
