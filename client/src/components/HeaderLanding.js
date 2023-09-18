import Wrapper from "../assets/wrappers/HeaderLandingW";
import dogPark from "../assets/images/dogParkSmall.jpg";
import womanWalk from "../assets/images/womanWalkSmall.jpg";
import manWalk from "../assets/images/manWalkSmall.jpg";
import { TbDog } from "react-icons/tb";
import { FaDog } from "react-icons/fa";
import stacyLanding from "../assets/images/stacyLanding.jpeg";

export default function VillageSection() {
  return (
    <Wrapper>
      <section className="village-main">
        {/* <img src={stacyLanding} /> */}
        {/* <div className="village-center">
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
                <TbDog size={25} />
              </span>
              <span className="btn-text">Download App</span>
            </div>
          </button>
        </div> */}
      </section>
    </Wrapper>
  );
}
