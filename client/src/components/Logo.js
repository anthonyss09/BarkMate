import Wrapper from "../assets/wrappers/LogoW";
import { BiBone } from "react-icons/bi";

export default function Logo({ logoClass, iconClass, size }) {
  return (
    <Wrapper>
      {" "}
      <div className={`logo ${logoClass}`}>
        <p>Bark</p>
        <div className="bone">
          <BiBone className={`icon-paw ${iconClass}`} size={size} />
        </div>{" "}
        <p>Mate</p>
      </div>
    </Wrapper>
  );
}
