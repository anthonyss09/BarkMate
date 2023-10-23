import Wrapper from "../../assets/wrappers/NotificationsViewW";
import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import SingleNotification from "./SingleNotification";
import { useMarkNotificationViewedMutation } from "../notifications/NotificationsSlice";
// import { markStateNotificationViewed } from "./NotificationsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";

export default function NotificationsView({
  notifications,
  handleShowNotifications,
  incrementNotificationLimit,
}) {
  const user = useSelector(selectCurrentUser);
  let content;
  // const urlPre = "../../data/uploads/";
  // const dispatch = useDispatch();
  const [markNotificationViewed] = useMarkNotificationViewedMutation();

  if (notifications.length) {
    content = notifications.map((notification, index) => {
      if (index === 10) {
        return <h3 className="notifications-view-header">Older stuff</h3>;
      }
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
    content = (
      <div className="notifications-view-no-content">no notifications</div>
    );
  }
  return (
    <Wrapper>
      <aside className="notifications-view-main">
        <div className="div">
          <div className="notifications-view-title">
            <div className="div">
              {" "}
              <AiOutlineClose
                size={25}
                onClick={handleShowNotifications}
                className="notifications-view-icon-close"
              />
            </div>
            <h3> Notifications</h3>
          </div>
        </div>
        <h3 className="notifications-view-header">Recent notifications</h3>
        {content}
        {notifications.length % 10 === 0 && (
          <button
            className="btn btn-more-notifications"
            onClick={incrementNotificationLimit}
          >
            Show even older stuff
          </button>
        )}
      </aside>
    </Wrapper>
  );
}
