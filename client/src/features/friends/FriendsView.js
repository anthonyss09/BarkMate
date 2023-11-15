import Wrapper from "../../assets/wrappers/FriendsViewW";
import { AiOutlineClose } from "react-icons/ai";
import {
  useGetFriendsQuery,
  useAcceptFriendMutation,
  useDeclineFriendMutation,
} from "../friends/FriendsSlice";
import { Link } from "react-router-dom";

export default function FriendsView({ handleShowFriends, currentUser }) {
  let userFriends;
  let friendRequested;
  let userRequested;
  let content;
  let friendRequestedContent;
  let userRequestedContent;
  let userFriendsContent;
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
      .filter((friend) => friend.recipientStatus !== "friends")
      .filter((friend) => friend.recipientStatus !== "declined");

    userRequested = Object.values(friends)
      .filter((friend) => friend.recipient !== currentUser._id)
      .filter((friend) => friend.recipientStatus !== "friends")
      .filter((friend) => friend.recipientStatus !== "declined");

    friendRequestedContent = (
      <div className="friend-list">
        <h3 className="friend-list-header">Requests</h3>
        {friendRequested.length ? (
          friendRequested.map((friend, index) => {
            console.log(friend.friend);
            return (
              <div key={index} className="friends-view-single">
                <Link to={"/" + friend.friend.participantId}>
                  {" "}
                  <img
                    src={friend.friend.participantProfileImageUrl}
                    className="friend-image"
                    alt="the friend"
                  />
                </Link>

                <span className="friend-name">
                  {" "}
                  {friend.friend.participantProfileName}
                </span>
                <span
                  className="friend-accept"
                  onClick={() => {
                    const friendCopy = { ...friend };
                    friendCopy.recipientStatus = "friends";
                    friendCopy.requesterStatus = "friends";
                    acceptFriend({
                      friendCopy,
                      requestId: friend._id,
                      userId: currentUser._id,
                    });
                  }}
                >
                  accept?
                </span>
                <span
                  className="friend-ignore"
                  onClick={() => {
                    const friendCopy = { ...friend };
                    friendCopy.recipientStatus = "declined";
                    friendCopy.requesterStatus = "declined";
                    declineFriend({ ...friendCopy, requestId: friend._id });
                  }}
                >
                  Ignore
                </span>
              </div>
            );
          })
        ) : (
          <div className="friends-view-no-content">
            No requests at the moment.
          </div>
        )}
      </div>
    );

    userRequestedContent = (
      <div className="friend-list">
        <h3 className="friend-list-header">Requested</h3>
        {userRequested.length ? (
          userRequested.map((friend, index) => {
            return (
              <div key={index} className="friends-view-single">
                <Link to={"/" + friend.friend.participantId}>
                  {" "}
                  <img
                    src={friend.friend.participantProfileImageUrl}
                    className="friend-image"
                    alt="the friend"
                  />
                </Link>
                <span className="friend-name">
                  {friend.friend.participantProfileName}{" "}
                </span>
                <span className="friend-pending"> pending</span>
              </div>
            );
          })
        ) : (
          <div className="friends-view-no-content">
            No requests at the moment
          </div>
        )}
      </div>
    );

    userFriendsContent = (
      <div className="friend-list">
        <h3 className="friend-list-header">Friends</h3>
        {userFriends.length ? (
          userFriends.map((friend, index) => {
            return (
              <div key={index} className="friends-view-single">
                <Link to={"/" + friend.friend.participantId}>
                  {" "}
                  <img
                    src={friend.friend.participantProfileImageUrl}
                    className="friend-image"
                    alt="the friend"
                  />
                </Link>
                <span className="friend-name">
                  {" "}
                  {friend.friend.participantProfileName}
                </span>
              </div>
            );
          })
        ) : (
          <div className="friends-view-no-content">
            No friends at the moment.
          </div>
        )}
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
              size={25}
              onClick={handleShowFriends}
              className="friends-view-icon-close"
            />
          </div>
          <h3 className="friends-title">Friends</h3>
        </div>
        {content}
      </div>
    </Wrapper>
  );
}
