import Wrapper from "../assets/wrappers/SectionLandingW";
import StacyLanding from "../assets/images/beachBums.PNG";
import postLanding from "../assets/images/goodBoy.jpg";
import ChatLineUser from "../features/chats/ChatLineUser";
import ChatLineFriend from "../features/chats/ChatLineFriend";
import deanBowie from "../assets/images/dean&bowieSmall.jpg";
import stacyProfile from "../assets/images/stacyProfile.jpg";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoVenmo } from "react-icons/io5";
import { selectAlertsInfo } from "../features/alerts/alertsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useLoginUserMutation } from "../features/auth/authSlice";
import { useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import Alert from "../features/alerts/Alert";
import { displayAlert, clearAlert } from "../features/alerts/alertsSlice";

export default function SectionLanding() {
  const { overflowHidden, showAlert, alertType, alertMessage } =
    useSelector(selectAlertsInfo);
  const [loginUser] = useLoginUserMutation();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [requesting, setRequesting] = useState(false);

  const handleLoginDemoUser = async () => {
    setRequesting(true);

    const response = await loginUser({
      email: "demo@gmail.com",
      password: "123456demo",
    });

    if (response.error) {
      dispatch(
        displayAlert({
          alertType: "danger",
          alertMessage: response.error.data.message,
        })
      );
      console.log(response);
    } else if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      Navigate("/dashboard/home");
      window.location.reload();
    }
    setTimeout(() => {
      dispatch(clearAlert());
    }, 3000);
    setRequesting(false);
  };
  return (
    <Wrapper>
      <section
        className={`section-landing-main ${
          overflowHidden ? "overflow-hidden" : ""
        }`}
      >
        {requesting && (
          <div className="alert-container">
            {" "}
            <DotLoader size={85} color="lightBlue" className="beat-loader" />
          </div>
        )}
        {showAlert && (
          <div className="alert-container">
            <Alert alertMessage={alertMessage} alertType={alertType} />
          </div>
        )}
        <div className="section-landing-center section-landing-header">
          <h1>
            <span className="span-connect">
              {" "}
              Connect, <br />
              {/* <br /> */}
              meet,
            </span>
            {/* <br /> */}
            <span className="span-responsibilities"> share the leash.</span>
            {/* <br /> */}
            <div className="btn-join ">
              {" "}
              <Link to="/register" className="btn-link link">
                Join
              </Link>
            </div>
            <div className="btn btn-demo" onClick={handleLoginDemoUser}>
              Demo
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
        <div className="section-landing-chat-container">
          {" "}
          <div className="section-landing-center section-landing-chat-center">
            <h1 className="section-landing-chat-header">
              Chat <br />
              someone <br />
              up <br />
            </h1>
            <div className="section-landing-chat">
              <ChatLineFriend
                text="have you and Bowie been to shady tree park?"
                profileImageUrl={stacyProfile}
                shadow={false}
              />
              <ChatLineUser
                text="yes! we love that place"
                profileImageUrl={deanBowie}
                shadow={false}
              />

              <ChatLineFriend
                text="want to meet at the park and catch a vibe?"
                profileImageUrl={stacyProfile}
                shadow={false}
              />
              <ChatLineUser
                text="100% we'll be there tomorrow!"
                profileImageUrl={deanBowie}
                shadow={false}
              />
            </div>
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
          <h1 className="section-landing-post-header">
            Share your favorite pics
          </h1>
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
