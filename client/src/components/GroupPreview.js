import Wrapper from "../assets/wrappers/GroupPreviewW";
import goodBoys from "../assets/images/goodBoysSmall.jpg";
import { FaUserFriends } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

export default function GroupPreview({ image }) {
  return (
    <Wrapper>
      <aside className="group-preview-main">
        <div className="group-preview-center">
          <div className="group-preview-header">
            {" "}
            <div className="group-preview-name-container">
              {" "}
              <h1 className="group-preview-name">The Local GoodBoys</h1>{" "}
              <div className="location-container">
                <MdLocationOn size={15} />
                <span className="location">Williamsburg</span>
              </div>
            </div>
            <span className="group-preview-members">23 members</span>
          </div>

          <div className="group-preview-column">
            {" "}
            <Link to="/groupid" className="link">
              {" "}
              <img src={goodBoys} className="group-preview-image" />
            </Link>
          </div>
          <div className="group-preview-options">
            <div className="option-container">
              {" "}
              <div className="add-friend option">
                + <FaUserFriends size={30} />
              </div>
            </div>

            <div className="option-container">
              {" "}
              <div className="message option">
                <FiMail size={30} className="icon-message" />
              </div>
            </div>
          </div>
          <div className=" group-preview-body">
            <div className="group-preview-about">
              <h1 className="about-heading">About</h1>
              <p className="group-preview-p">
                {" "}
                The Local GoodBoys is a group of dog lovers who are here to
                expand our community, pool resources and create friendships.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </Wrapper>
  );
}
