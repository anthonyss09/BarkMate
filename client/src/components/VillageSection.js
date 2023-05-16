import Wrapper from "../assets/wrappers/VillageSectionW";
import dogPark from "../assets/images/dogParkSmall.jpg";
import womanWalk from "../assets/images/womanWalkSmall.jpg";
import manWalk from "../assets/images/manWalkSmall.jpg";

export default function VillageSection() {
  return (
    <Wrapper>
      <section className="village-main">
        <div className="village-center">
          {" "}
          {/* <h1 className="header">Because it takes a village</h1> */}
          {/* <img src={dogPark} alt="dog park" /> */}
          <span className="text-1">I walk yours &</span>
          <div className="image-woman">
            {" "}
            <img src={womanWalk} alt="woman walk" />
          </div>
          <div className="image-man">
            {" "}
            <img src={manWalk} alt="man walk" />
          </div>
          <span className="text-2">You walk mine.</span>
        </div>
      </section>
    </Wrapper>
  );
}
