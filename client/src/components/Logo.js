import Wrapper from "../assets/wrappers/LogoW";
import { BiBone } from "react-icons/bi";

export default function Logo({ logoClass, iconClass }) {
  return (
    <Wrapper>
      {" "}
      <h1 className={`logo ${logoClass}`}>
        <div className="bone">
          <BiBone className={`icon-paw ${iconClass}`} size={25} />
        </div>
        BarkMate
      </h1>
    </Wrapper>
  );
}
