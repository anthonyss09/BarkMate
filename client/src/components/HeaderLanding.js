import Wrapper from "../assets/wrappers/HeaderLandingW";
import dogPark from "../assets/images/dogParkSmall.jpg";
import womanWalk from "../assets/images/womanWalkSmall.jpg";
import manWalk from "../assets/images/manWalkSmall.jpg";
import { TbDog } from "react-icons/tb";
import { FaDog } from "react-icons/fa";

export default function VillageSection() {
  return (
    <Wrapper>
      <section className="village-main">
        <div className="village-center">
          <div className="image-line-1">
            {" "}
            <span className="text-1">I walk yours</span>
            <div className="image-container-woman">
              {" "}
              <img src={womanWalk} alt="woman walk" className="image-woman" />
            </div>
          </div>
          <div className="image-line-2">
            {" "}
            <div className="image-container-man">
              {" "}
              <img src={manWalk} alt="man walk" className="image-man" />
            </div>
            <span className="text-2">You walk mine.</span>
          </div>

          <button className="btn btn-about">
            <div className="btn-body">
              {" "}
              <span className="btn-paw">
                {/* <FaPaw size={25} /> */}
                <TbDog size={25} />
                {/* <FaDog size={25} className="icon-dog" /> */}
              </span>
              <span className="btn-text">Download App</span>
            </div>
          </button>
        </div>
      </section>
    </Wrapper>
  );
}
