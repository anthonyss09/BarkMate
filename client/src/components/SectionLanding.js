import Wrapper from "../assets/wrappers/SectionLandingW";
import StacyLanding from "../assets/images/stacyLanding.jpeg";
import postLanding from "../assets/images/postLanding.jpeg";
import ChatLineUser from "../features/chats/ChatLineUser";
import ChatLineFriend from "../features/chats/ChatLineFriend";
import deanBowie from "../assets/images/dean&bowieSmall.jpg";
import stacyProfile from "../assets/images/stacyProfile.jpg";
import { Link } from "react-router-dom";
import { IoLogoVenmo } from "react-icons/io5";

export default function SectionLanding() {
  return (
    <Wrapper>
      <section className="section-landing-main">
        <div className="section-landing-center section-landing-header">
          <h1>
            <span className="span-connect">
              {" "}
              Connect, <br />
              meet,
            </span>
            <br />
            <span className="span-responsibilities"> share the leash.</span>
            <br />
            <div className="btn-join ">
              {" "}
              <Link to="/register" className="link">
                Join
              </Link>
            </div>
          </h1>
          <div className="section-landing-image-jm-container">
            <img
              src={StacyLanding}
              alt="stacy"
              className="section-landing-image-jm"
            />
          </div>
        </div>
        <div className="section-landing-center section-landing-chat-center">
          <div className="section-landing-chat">
            <ChatLineFriend
              text="have you and Bowie been to shady tree park?"
              profileImageUrl={stacyProfile}
              shadow={true}
            />
            <ChatLineUser
              text="yes! we love that place"
              profileImageUrl={deanBowie}
              shadow={true}
            />

            <ChatLineFriend
              text="want to meet at the park and catch a vibe?"
              profileImageUrl={stacyProfile}
              shadow={true}
            />
            <ChatLineUser
              text="100% we'll be there tomorrow!"
              profileImageUrl={deanBowie}
              shadow={true}
            />
          </div>
        </div>
        <div className="section-landing-center">
          {" "}
          <h1 className="second-heading">
            Get connected with local dog owners, barter walks, build your
            community, & share content.
            <br />
            <Link to="/about" className="link btn">
              <button className="btn btn-learn">learn more</button>
            </Link>
          </h1>
        </div>
        <div className="section-landing-center section-landing-center-column section-landing-post">
          {" "}
          <img
            src={postLanding}
            alt="post"
            className="section-landing-image-post"
          />
        </div>
        <div className="section-landing-center section-landing-center-column">
          {" "}
          <h1 className="second-heading">
            Bark Mate is funded by user tips. If you enjoy the project and would
            like see new features please consider contributing a tip.
            <br />
            <Link to="/payment" className="link btn btn-tip">
              <IoLogoVenmo size={25} className="icon-venmo" />
              Tip Bark Mate
            </Link>
            Thank you!
          </h1>
        </div>
      </section>
    </Wrapper>
  );
}
