import Wrapper from "../assets/wrappers/GroupsLandingW";
import NewFriendsSmall from "../assets/images/newFriendsSmall.jpg";
import presentation from "../assets/images/goodBoysSmall.jpg";

export default function NewFriends() {
  return (
    <Wrapper>
      <section className="main">
        <div className="center">
          {" "}
          <div className="sub">
            {" "}
            <div className="text">
              <p>
                <span> Join local groups </span>
                for added <span>backup </span>& instant
                <span> references</span>
              </p>
            </div>
            <div className="groups">
              <div className="image-container">
                <img src={presentation} alt="presentation" />
                <h1>The local good boys</h1>
              </div>
              <div className="image-container">
                <img src={NewFriendsSmall} alt="presentation" />
                <h1>Frens 4 Life</h1>
              </div>
              <div className="image-container">
                <img src={presentation} alt="presentation" />
                <h1>The local good boys</h1>
              </div>
            </div>
          </div>
          {/* <div className="sub">
            <img
              className="image-dogs"
              src={NewFriendsSmall}
              alt="new friends"
            />
            <p>Pup gets a new friend</p>
          </div> */}
        </div>
      </section>
    </Wrapper>
  );
}
