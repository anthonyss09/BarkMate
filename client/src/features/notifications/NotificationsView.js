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
    console.log(notifications);
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
                  src={notification.senderProfileImageUrl}
                  className="notification-image"
                />
                <span className="notification-sender">
                  {notification.senderProfileName}
                </span>
                <span className="notification-text"> Sent you a message</span>
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
                  src={notification.senderProfileImageUrl}
                  className="notification-image"
                />
                <span className="notification-sender">
                  {notification.senderProfileName}
                </span>
                <span className="notification-text">
                  {" "}
                  Sent you a {notification.notificationType}
                </span>
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
                  src={notification.senderProfileImageUrl}
                  className="notification-image"
                />
                <span className="notification-sender">
                  {notification.senderProfileName}
                </span>
                <span className="notification-text">Sent a friend request</span>
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
          <div className="notifications-view-header">
            <div className="div">
              {" "}
              <AiOutlineClose
                size={30}
                onClick={handleShowNotifications}
                className="notifications-view-icon-close"
              />
            </div>{" "}
            <h3> Notifications</h3>
          </div>
        </div>

        {content}
      </aside>
    </Wrapper>
  );
}
