import Wrapper from "../assets/wrappers/PageNotFoundW";
import { GiDogHouse } from "react-icons/gi";
import { FaDog } from "react-icons/fa";
import { TbBone } from "react-icons/tb";

export default function PageNotFound() {
  return (
    <Wrapper>
      <section className="page-not-found-main">
        <div className="page-not-found-center">
          <div className="error-text">Page not found</div>
          <div className="error-code">404</div>
          <div className="plain-text">
            Sorry I can't remember where I<br /> burried that page.
          </div>
          <TbBone size={55} className="icon-bone" />
          <GiDogHouse size={85} className="icon-dog-house" />
          <FaDog size={85} className="icon-dog" />
        </div>
      </section>
    </Wrapper>
  );
}
