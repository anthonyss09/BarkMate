import Wrapper from "../assets/wrappers/LogoW";
import { BiBone } from "react-icons/bi";

export default function Logo({ logoClass, iconClass, size }) {
  return (
    <Wrapper>
      {" "}
      <div className={`logo ${logoClass}`}>
        Bark{" "}
        <div className="bone">
          <BiBone className={`icon-paw ${iconClass}`} size={size} />
        </div>{" "}
        Mate
      </div>
    </Wrapper>
  );
}
