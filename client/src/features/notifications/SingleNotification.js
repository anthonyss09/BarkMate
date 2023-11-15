import Wrapper from "../../assets/wrappers/SingleNotification";
import { Link } from "react-router-dom";

export default function SingleNotification({ index, path }) {
  return (
    <Wrapper>
      {" "}
      <Link key={index} to={path} className="link">
        <div className="notification-view-single">
          you recieved a new message
        </div>
      </Link>
    </Wrapper>
  );
}
