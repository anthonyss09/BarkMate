import Wrapper from "../../assets/wrappers/NotificationsViewW";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useMarkNotificationViewedMutation } from "../notifications/NotificationsSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";

export default function NotificationsView({
  notifications,
  handleShowNotifications,
  incrementNotificationLimit,
  handleShowFriends,
}) {
  const user = useSelector(selectCurrentUser);
  let content;
  const [markNotificationViewed] = useMarkNotificationViewedMutation();

  if (notifications.length) {
    content = notifications.map((notification, index) => {
      if (index === 5) {
        return (
          <h3 key={index} className="notifications-view-header">
            Older stuff
          </h3>
        );
      }
      switch (notification.notificationPath) {
        case "chats":
          return (
            <Link key={index} to={"/dashboard/chats"} className="link">
              <div
                className={`notification-view-single ${
                  notification.is_viewed ? "notification-viewed" : ""
                }`}
                onClick={() => {
                  markNotificationViewed({
                    userId: user._id,
                    notificationId: notification._id,
                  });
                  handleShowNotifications();
                }}
              >
                <img
                  src={notification.senderProfileImageUrl}
                  className="notification-image"
                  alt="the notification"
                />
                <p className="notification-sender">
                  {notification.senderProfileName}
                </p>
                <p className="notification-text"> Sent you a message</p>
              </div>
            </Link>
          );
        case "posts":
          return (
            <Link
              key={index}
              to={`/posts/${notification.postId}`}
              className="link"
            >
              <div
                className={`notification-view-single ${
                  notification.is_viewed ? "notification-viewed" : ""
                }`}
                onClick={() => {
                  markNotificationViewed({
                    userId: user._id,
                    notificationId: notification._id,
                  });
                }}
              >
                <img
                  src={notification.senderProfileImageUrl}
                  className="notification-image"
                  alt="user profile"
                />
                <p className="notification-sender">
                  {notification.senderProfileName}
                </p>
                <p className="notification-text">
                  {" "}
                  Sent you a {notification.notificationType}
                </p>
              </div>
            </Link>
          );
        case "friendRequests":
          return (
            <Link key={index} to={"#"} className="link">
              <div
                className={`notification-view-single ${
                  notification.is_viewed ? "notification-viewed" : ""
                }`}
                onClick={() => {
                  markNotificationViewed({
                    userId: user._id,
                    notificationId: notification._id,
                  });
                  handleShowNotifications();
                  handleShowFriends();
                }}
              >
                <img
                  src={notification.senderProfileImageUrl}
                  className="notification-image"
                  alt="user profile"
                />
                <span className="notification-sender">
                  {notification.senderProfileName}
                </span>
                <span className="notification-text">Sent a friend request</span>
              </div>
            </Link>
          );
        default:
          return null;
      }
    });
  } else {
    content = <p className="notifications-view-no-content">no notifications</p>;
  }
  return (
    <Wrapper>
      <div className="notifications-view-title">
        <button className="btn">
          {" "}
          <AiOutlineClose
            size={25}
            onClick={handleShowNotifications}
            className="notifications-view-icon-close"
          />
        </button>
        <h3> Notifications</h3>
      </div>
      <h3 className="notifications-view-header">Recent notifications</h3>
      {content}
      {notifications.length > 0 && notifications.length % 5 === 0 && (
        <button
          className="btn btn-more-notifications"
          onClick={incrementNotificationLimit}
        >
          Show even older stuff
        </button>
      )}
    </Wrapper>
  );
}
