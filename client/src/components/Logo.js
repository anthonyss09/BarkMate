import Wrapper from "../assets/wrappers/LogoW";
import { BiBone } from "react-icons/bi";

export default function Logo() {
  return (
    <Wrapper>
      {" "}
      <h1 className="logo">
        <div className="bone">
          <BiBone className="icon-paw" size={25} />
        </div>
        BarkMate
      </h1>
    </Wrapper>
  );
}
