import Wrapper from "../assets/wrappers/ProfileBlurbsW";
import jennyMax from "../assets/images/jennie&maxSmall.jpg";
import deanBowie from "../assets/images/dean&bowieSmall.jpg";
import { FaPaw } from "react-icons/fa";

export default function ProfileBlurbs() {
  return (
    <Wrapper>
      <section className="profile-blurbs-main">
        <h1 className="profile-blurbs-heading">Look who's barking</h1>
        <div className="profile-blurbs-center">
          {" "}
          <div className="blurb">
            {" "}
            <div className="pic-container">
              <img className="profile-pic" src={jennyMax} alt="jennie & max" />
            </div>
            <div className="profile-blurbs-about">
              <h1 className="profile-name">Jennie & Max</h1>
              Hey we're Jennie & Max. I work nights & Max loves evening walks.
              I'm available to go on walks during the day. We're woofing forward
              to meeting you!
            </div>
          </div>
          {/* <div className="blurb">
            {" "}
            <div className="about">
              <h1 className="profile-name second-name">Dean & Bowie</h1>
              Hey! we're Dean & Bowie. I'm a day time office geek & Bowie loves
              his time in the sun. Me & Bowie are available to meet!
            </div>
            <div className="pic-container">
              <img className="profile-pic" src={deanBowie} alt="jennie & max" />
            </div>
          </div> */}
          <div className="blurb">
            {" "}
            <div className="pic-container">
              <img className="profile-pic" src={jennyMax} alt="jennie & max" />
            </div>
            <div className="profile-blurbs-about">
              <h1 className="profile-name">Jennie & Max</h1>
              Hey we're Jennie & Max. I work nights & Max loves evening walks.
              I'm available to go on walks during the day. We're woofing forward
              to meeting you!
            </div>
          </div>
          <div className="blurb">
            {" "}
            <div className="pic-container">
              <img className="profile-pic" src={jennyMax} alt="jennie & max" />
            </div>
            <div className="profile-blurbs-about">
              <h1 className="profile-name">Jennie & Max</h1>
              Hey we're Jennie & Max. I work nights & Max loves evening walks.
              I'm available to go on walks during the day. We're woofing forward
              to meeting you!
            </div>
          </div>
          {/* <button className="btn btn-blurb">
            <span className="btn-paw">
              <FaPaw size={25} />
            </span>
            <span className="btn-text">Start browsing</span>
          </button> */}
        </div>
      </section>
    </Wrapper>
  );
}
