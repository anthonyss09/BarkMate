import Wrapper from "../assets/wrappers/SectionLandingW";
import profilePreviewJM from "../assets/images/profilePreview2.jpg";
import StacyLanding from "../assets/images/stacyLanding.jpeg";
import { FaDog } from "react-icons/fa";
import { LucideDog } from "lucide-react";
import postLanding from "../assets/images/postLanding.jpeg";
import { FiCamera } from "react-icons/fi";
import chatExample from "../assets/images/chatExample.jpeg";
import ChatLineUser from "../features/chats/ChatLineUser";
import ChatLineFriend from "../features/chats/ChatLineFriend";
import deanBowie from "../assets/images/dean&bowieSmall.jpg";
import stacyProfile from "../assets/images/stacyProfile.jpg";

export default function SectionLanding() {
  return (
    <Wrapper>
      {/* <div className="back back-two"></div> */}
      {/* <div className="blue"></div> */}
      <section className="section-landing-main">
        {/* <div className="back back-one"></div> */}

        <div className="section-landing-center">
          <h1>
            <span className="span-connect"> Connect, meet,</span>
            {/* <br /> <span className="span-share">& </span> <br /> */}
            <br />
            <span className="span-responsibilities"> share the leash.</span>
            <br />
            {/* <LucideDog size={75} className="icon-dog" /> */}
            {/* <span className="bark">bark</span> */}
            <button className="btn btn-join">Join</button>
          </h1>
          <img src={StacyLanding} className="section-landing-image-jm" />
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
        <div className="section-landing-center section-landing-center-column">
          {" "}
          <h1 className="second-heading">
            Get connected with local dog owners, barter walks, build your
            community, & share content.
            <br />
            {/* <FiCamera size={55} className="icon-dog" />
            <span className="bark">bark</span> */}
          </h1>
          <img src={postLanding} className="section-landing-image-post" />
        </div>
      </section>
    </Wrapper>
  );
}
