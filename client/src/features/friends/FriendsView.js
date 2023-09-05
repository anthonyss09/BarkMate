import Wrapper from "../../assets/wrappers/FriendsViewW";
import { AiOutlineClose } from "react-icons/ai";
import {
  useGetFriendsQuery,
  useAcceptFriendMutation,
  useDeclineFriendMutation,
} from "../api/apiSlice";

export default function FriendsView({ handleShowFriends, currentUser }) {
  let userFriends;
  let friendRequested;
  let userRequested;
  let content;
  let friendRequestedContent;
  let userRequestedContent;
  let userFriendsContent;
  const urlPre = "../../data/uploads/";
  const { data: friends, isLoading } = useGetFriendsQuery(currentUser._id);
  const [acceptFriend] = useAcceptFriendMutation();
  const [declineFriend] = useDeclineFriendMutation();
  console.log("friends are", friends);

  if (!isLoading) {
    userFriends = Object.values(friends)
      .filter((friend) => friend.recipientStatus === "friends")
      .filter((friend) => friend.requesterStatus === "friends");

    friendRequested = Object.values(friends)
      .filter((friend) => friend.recipient === currentUser._id)
      .filter((friend) => friend.recipientStatus !== "friends");

    userRequested = Object.values(friends)
      .filter((friend) => friend.recipient !== currentUser._id)
      .filter((friend) => friend.recipientStatus !== "friends");

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
              <span
                className="friend-accept"
                onClick={() => {
                  const friendCopy = { ...friend };
                  friendCopy.recipientStatus = "friends";
                  friendCopy.requesterStatus = "friendss";
                  acceptFriend({ ...friendCopy, requestId: friend._id });
                }}
              >
                accept?
              </span>
              <span
                className="friend-ignore"
                onClick={() => {
                  const friendCopy = { ...friend };
                  friendCopy.recipient = "";
                  friendCopy.recipientStatus = "friends";
                  declineFriend({ ...friendCopy, requestId: friend._id });
                }}
              >
                Ignore
              </span>
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
