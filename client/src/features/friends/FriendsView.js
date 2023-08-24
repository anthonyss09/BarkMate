import Wrapper from "../../assets/wrappers/FriendsViewW";
import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";
import { useGetFriendsQuery } from "../api/apiSlice";

export default function FriendsView({ handleShowFriends, currentUser }) {
  let userFriends;
  let friendRequested;
  let userRequested;
  let content;
  let friendRequestedContent;
  let userRequestedContent;
  let userFriendsContent;
  const urlPre = "../../data/uploads/";
  const { data: friends, isLoading } = useGetFriendsQuery(currentUser.friends);
  console.log("friends are", friends);

  if (!isLoading) {
    friendRequested = Object.values(friends).filter(
      (friend) => friend.recipient === currentUser._id
    );

    userRequested = Object.values(friends).filter(
      (friend) => friend.recipient !== currentUser._id
    );

    userFriends = Object.values(friends).filter(
      (friend) =>
        friend.recipientStatus === "friends" &&
        friend.requesterStatus === "friends"
    );

    friendRequestedContent = (
      <div className="friend-list">
        <h3 className="friend-list-header">Requests</h3>
        {friendRequested.map((friend, index) => {
          return (
            <div key={index} className="friends-view-single">
              <img
                src={urlPre + friend.friend.participantProfileImageName}
                className="friend-image"
              />
              <span className="friend-name">
                {" "}
                {friend.friend.participantProfileName}
              </span>
              <span className="friend-accept">accept?</span>
              <span className="friend-ignore">Ignore</span>
            </div>
          );
        })}
      </div>
    );

    userRequestedContent = (
      <div className="friend-list">
        <h3 className="friend-list-header">Requested</h3>
        {userRequested.map((friend, index) => {
          return (
            <div key={index} className="friends-view-single">
              <img
                src={urlPre + friend.friend.participantProfileImageName}
                className="friend-image"
              />
              <span className="friend-name">
                {friend.friend.participantProfileName}{" "}
              </span>
              <span className="friend-pending"> pending</span>
            </div>
          );
        })}
      </div>
    );

    userFriendsContent = (
      <div className="friend-list">
        <h3 className="friend-list-header">Friends</h3>
        {userFriends.map((friend, index) => {
          return (
            <div key={index} className="friends-view-single">
              <img
                src={urlPre + friend.friend.participantProfileImageName}
                className="friend-image"
              />
              <span className="friend-name">
                {" "}
                {friend.friend.participantProfileName}
              </span>
              <span>accept?</span>
            </div>
          );
        })}
      </div>
    );

    content = (
      <div className="friends-view-body">
        {friendRequestedContent}
        {userRequestedContent}
        {userFriendsContent}
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="friends-view-main">
        <div className="friends-view-header">
          {" "}
          <div className="div">
            {" "}
            <AiOutlineClose
              size={30}
              onClick={handleShowFriends}
              className="notifications-view-icon-close"
            />
          </div>
          <h3>Friends</h3>
        </div>
        {content}
      </div>
    </Wrapper>
  );
}
