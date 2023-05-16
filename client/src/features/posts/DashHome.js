import Wrapper from "../../assets/wrappers/DashHomeW";
import FormRow from "../auth/FormRow";
import { AiOutlinePicture, AiFillPicture } from "react-icons/ai";
import { FcPicture } from "react-icons/fc";
import { AiFillCamera } from "react-icons/ai";
import { FiCamera } from "react-icons/fi";
import { FaRegUser, FaUser, FaUserCircle } from "react-icons/fa";
import Post from "./Post";
import jennieMax from "../../assets/images/jennie&maxSmall.jpg";
import { Link } from "react-router-dom";

export default function DashHome() {
  return (
    <Wrapper>
      <section className="dash-main">
        <div className="dash-center">
          <div className="create-post-container">
            <div className="create-post">
              <Link to="/profileid">
                {" "}
                <img src={jennieMax} className="dash-profile-pic" />
              </Link>

              <p className="post-p">Share something with the mates!</p>
              <span className="icon-picture">
                {/* <AiFillPicture size={25} /> */}
                {/* <FcPicture size={25} /> */}
                <FiCamera size={25} />
              </span>
            </div>
          </div>
          <div className="posts-container">
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
