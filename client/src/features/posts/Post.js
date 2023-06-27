import Wrapper from "../../assets/wrappers/PostW";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

export default function Post({
  userName,
  userDogName,
  text,
  imageName,
  userImageName,
}) {
  const urlPre = "../../data/uploads/";
  return (
    <Wrapper>
      <aside className="post-main">
        <div className="post-center">
          <div className="post-heading">
            <img src={urlPre + userImageName} className="post-heading-pic" />
            <span className="post-name">
              {userName} & {userDogName}
            </span>
          </div>
          <div className="post-text">{text}</div>
          <div className="post-image">
            {imageName && (
              <img src={urlPre + imageName} className="post-body-pic" />
            )}
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
