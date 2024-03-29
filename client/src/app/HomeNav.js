import Wrapper from "../assets/wrappers/NavW";
import Logo from "../components/Logo";
import { HiBars3 } from "react-icons/hi2";
import SmallSidebar from "../components/SmallSidebar";
import { useState, useEffect } from "react";
import BigSidebar from "../components/BigSidebar";
import { logoutUser } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import {
  useGetNotificationsQuery,
  useMarkAllNotificationsReadMutation,
} from "../features/notifications/NotificationsSlice";
import { selectCurrentUser } from "../features/auth/authSlice";
import NotificationsView from "../features/notifications/NotificationsView";
import FriendsView from "../features/friends/FriendsView";
import Alert from "../features/alerts/Alert";
import {
  selectAlertsInfo,
  setOverflowHidden,
} from "../features/alerts/alertsSlice";
import { socket } from "../sockets/socketIo";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [showSmallSidebar, setSmallShowSidebar] = useState(false);
  const [showBigSidebar, setShowBigSidebar] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showFriends, setShowFriends] = useState(false);
  const [notificationLimit, setNotificationLimit] = useState(10);

  let { showAlert, alertMessage, alertType } = useSelector(selectAlertsInfo);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const currentUser = useSelector(selectCurrentUser);
  const { data: allNotifications } = useGetNotificationsQuery({
    userId: currentUser._id,
    limit: notificationLimit,
  });
  const [markAllNotificationsRead] = useMarkAllNotificationsReadMutation();

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
    // dispatch(setOverflowHidden());
    setSmallShowSidebar(false);
  };
  const handleShowNotifications = () => {
    setShowNotifications(!showNotifications);
    markAllNotificationsRead(currentUser._id);
    setSmallShowSidebar(false);
  };
  const handleShowFriends = () => {
    setShowFriends(!showFriends);
    setSmallShowSidebar(false);
  };
  const incrementNotificationLimit = () => {
    setNotificationLimit(notificationLimit + 10);
  };

  const handleClick = () => {
    dispatch(logoutUser());
    // ws.close();
    socket.close();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    Navigate("/");
  };

  useEffect(() => {
    let lastTime = new Date().getTime();

    setInterval(function () {
      let currentTime = new Date().getTime();
      if (currentTime > lastTime + 2000 * 2) {
        socket.connect();
      }
      lastTime = currentTime;
    }, 2000);
  }, []);

  return (
    <Wrapper>
      {showAlert && <Alert alertMessage={alertMessage} alertType={alertType} />}
      {showNotifications && (
        <NotificationsView
          notifications={notifications}
          handleShowNotifications={handleShowNotifications}
          incrementNotificationLimit={incrementNotificationLimit}
          handleShowFriends={handleShowFriends}
        />
      )}
      {showFriends && (
        <FriendsView
          handleShowFriends={handleShowFriends}
          currentUser={currentUser}
        />
      )}
      {showBigSidebar && <BigSidebar handleClick={handleBigSidebar} />}
      <section className="nav-main ">
        <span className="nav-item bars">
          <HiBars3 size={25} onClick={handleBigSidebar} />
        </span>
        <Link to="/dashboard/home" className="link">
          <Logo logoClass="logo-nav" iconClass="icon-payment" size={25} />
        </Link>

        <span className="nav-icons-container">
          <p className="notification-count" onClick={handleShowNotifications}>
            {notificationNumber}
          </p>
          <IoNotificationsOutline
            size={25}
            className="icon icon-notification"
            onClick={handleShowNotifications}
          />

          <img
            src={currentUser.profileImageUrl}
            className="nav-profile-pic icon-user"
            onClick={handleSmallSidebar}
            alt="User profile."
          />
        </span>
      </section>
      {showSmallSidebar && (
        <SmallSidebar
          handleClick={handleClick}
          handleShowFriends={handleShowFriends}
          handleSmallSidebar={handleSmallSidebar}
          userId={currentUser._id}
        />
      )}
    </Wrapper>
  );
}
