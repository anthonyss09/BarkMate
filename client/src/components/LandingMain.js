import Wrapper from "../assets/wrappers/LandingMainW";
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

export default function LandingMain() {
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
      <div
        className={`landing-main ${overflowHidden ? "overflow-hidden" : ""}`}
      >
        {requesting && (
          <aside className="alert-container">
            {" "}
            <DotLoader size={85} color="lightBlue" className="beat-loader" />
          </aside>
        )}

        {showAlert && (
          <div className="alert-container">
            <Alert alertMessage={alertMessage} alertType={alertType} />
          </div>
        )}

        <section className="landing-top-section">
          <div className="landing-top-header-container">
            <h1 className="landing-top-header">
              <p className="span-connect">
                {" "}
                Connect, <br />
                meet,
                <br />
                share the leash.
              </p>

              <Link to="/register" className="btn-link link">
                Join
              </Link>
            </h1>
            <button className="btn btn-demo" onClick={handleLoginDemoUser}>
              Demo
            </button>
          </div>
          <figure className="landing-top-img-container">
            <img src={StacyLanding} alt="stacy" className="landing-top-img" />
          </figure>
        </section>

        <section className="landing-section-chat">
          {" "}
          <div className="landing-chat-center">
            <h1 className="landing-chat-header">
              Chat <br />
              someone <br />
              up <br />
            </h1>
            <div className="landing-chat-container">
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
        </section>

        <section className="landing-section-learn">
          {" "}
          <h1 className="landing-header-learn">
            Get connected with local dog owners, barter walks, build your
            community, & share content.
          </h1>
          <Link to="/about" className="link btn">
            <p className="btn btn-learn">learn more</p>
          </Link>
        </section>

        <section className="landing-section-post">
          {" "}
          <h1 className="landing-post-header">Share your favorite pics</h1>
          <img src={postLanding} alt="post" className="landing-post-img" />
        </section>

        <section className="landing-section-learn">
          {" "}
          <span className="landing-header-learn">
            <p>
              {" "}
              Bark Mate is funded by users. If you enjoy the project and would
              like to see new features please consider contributing.
            </p>
            <Link to="/payment" className="link btn btn-tip">
              <IoLogoVenmo size={25} className="icon-venmo" />
              <p>Contribute</p>
            </Link>
            <p> Thank you!</p>
          </span>
        </section>
      </div>
    </Wrapper>
  );
}
