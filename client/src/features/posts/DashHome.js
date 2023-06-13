import Wrapper from "../../assets/wrappers/DashHomeW";
import { FiCamera } from "react-icons/fi";
import Post from "./Post";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";

export default function DashHome() {
  const { profileImageName } = useSelector(selectCurrentUser);
  const urlPre = "../../data/uploads/";
  return (
    <Wrapper>
      <section className="dash-main">
        <div className="dash-center">
          <div className="create-post-container">
            <div className="create-post">
              <Link to="/profileid">
                {" "}
                <img
                  src={urlPre + profileImageName}
                  className="dash-profile-pic"
                />
              </Link>

              <p className="post-p">Share something with the mates!</p>
              <span className="icon-picture">
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
