import Wrapper from "../../assets/wrappers/PostW";
import DeanBowie from "../../assets/images/dean&bowieSmall.jpg";
import Bowie from "../../assets/images/bowie.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

export default function Post() {
  return (
    <Wrapper>
      <aside className="post-main">
        <div className="post-center">
          <div className="post-heading">
            <img src={DeanBowie} className="post-heading-pic" />
            <span className="post-name">Dean & Bowie</span>
          </div>
          <div className="post-text">
            Hey everyone this is my first post! I'm new to the 11105 area and
            i'm looking for community and help with my best friend Bowie. Here's
            a pic of my bud!
          </div>
          <div className="post-image">
            <img src={Bowie} className="post-body-pic" />
          </div>
          <div className="post-info">
            <div className="post-likes">
              {" "}
              32
              <div className="icon-heart-fill">
                <AiFillHeart size={20} />
              </div>
            </div>

            <div className="post-comments-button">10 comments</div>
          </div>
          <div className="post-options">
            <div className="icon icon-heart">
              <AiOutlineHeart size={30} />
            </div>
            <div className="icon icon-comment">
              <FaRegCommentDots size={30} />
            </div>
          </div>
        </div>
      </aside>
    </Wrapper>
  );
}
