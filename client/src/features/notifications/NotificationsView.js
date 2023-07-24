import Wrapper from "../../assets/wrappers/NotificationsViewW";
import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import SingleNotification from "./SingleNotification";
import { useMarkNotificationViewedMutation } from "../api/apiSlice";
// import { markStateNotificationViewed } from "./NotificationsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";

export default function NotificationsView({
  notifications,
  handleShowNotifications,
}) {
  const user = useSelector(selectCurrentUser);
  let content;
  const urlPre = "../../data/uploads/";
  const dispatch = useDispatch();
  const [markNotificationViewed] = useMarkNotificationViewedMutation();

  if (notifications.length) {
    content = notifications.map((notification, index) => {
      switch (notification.notificationPath) {
        case "chats": {
          return (
            <Link key={index} to={"/dashboard/chats"} className="link">
              <div
                className={`notification-view-single ${
                  notification.is_viewed ? "notification-viewed" : ""
                }`}
                onClick={() => {
                  {
                    /* dispatch(markStateNotificationViewed(notification._id)); */
                  }
                  markNotificationViewed({
                    userId: user._id,
                    notificationId: notification._id,
                  });
                }}
              >
                <img
                  src={urlPre + notification.senderProfileImageName}
                  className="notification-image"
                />
                <span className="notification-sender">
                  {notification.senderProfileName}
                </span>
                sent you a message
              </div>
            </Link>
          );
          break;
        }
        case "posts": {
          return (
            <Link key={index} to={"#"} className="link">
              <div
                className={`notification-view-single ${
                  notification.is_viewed ? "notification-viewed" : ""
                }`}
                onClick={() => {
                  {
                    /* dispatch(markStateNotificationViewed(notification._id)); */
                  }
                  markNotificationViewed({
                    userId: user._id,
                    notificationId: notification._id,
                  });
                }}
              >
                <img
                  src={urlPre + notification.senderProfileImageName}
                  className="notification-image"
                />
                <span className="notification-sender">
                  {notification.senderProfileName}
                </span>
                sent you a {notification.notificationType}
              </div>
            </Link>
          );
          break;
        }
        case "friendRequests": {
          return (
            <Link key={index} to={"#"} className="link">
              <div
                className={`notification-view-single ${
                  notification.is_viewed ? "notification-viewed" : ""
                }`}
                onClick={() => {
                  {
                    /* dispatch(markStateNotificationViewed(notification._id)); */
                  }
                  markNotificationViewed({
                    userId: user._id,
                    notificationId: notification._id,
                  });
                }}
              >
                <img
                  src={urlPre + notification.senderProfileImageName}
                  className="notification-image"
                />
                <span className="notification-sender">
                  {notification.senderProfileName}
                </span>
                you recieved a friend request
              </div>
            </Link>
          );
          break;
        }
        default:
          break;
      }
    });
  } else {
    content = <div>no notifications</div>;
  }
  return (
    <Wrapper>
      <aside className="notifications-view-main">
        <div className="div">
          {" "}
          <AiOutlineClose
            size={20}
            onClick={handleShowNotifications}
            className="notifications-view-icon-close"
          />
        </div>
        <div className="div">
          {" "}
          <h3 className="notifications-view-header">Notifications</h3>
        </div>

        {content}
      </aside>
    </Wrapper>
  );
}