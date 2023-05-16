import Wrapper from "../assets/wrappers/HeaderW";
import { TbDog } from "react-icons/tb";
import { FaDog, FaBone, FaHandshake } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { BiBone } from "react-icons/bi";
import {
  BsSun,
  BsSunFill,
  BsFillMoonStarsFill,
  BsMoonStars,
} from "react-icons/bs";
import { MdOutlineHandshake, MdHandshake } from "react-icons/md";
import Logo from "./Logo";
import { GoThreeBars } from "react-icons/go";
import dogPark from "../assets/images/dogParkSmall.jpg";

export default function Header() {
  return (
    <Wrapper>
      <header className="main ">
        {/* <img src={dogPark} alt="dog park" /> */}

        <div className="center">
          <span className="text text-1">I walk yours</span>
          <span className="text text-2">&</span>
          <span className="text text-3"> You walk mine.</span>
          <div className="walk day-walk">
            <div className="sun">
              {" "}
              <BsSun size={40} />
            </div>
            <div className="sun-dog">
              <GiSittingDog size={25} />
            </div>
          </div>
          <div className="walk night-walk">
            <div className="moon">
              {" "}
              <BsMoonStars size={35} />
            </div>
            <div className="moon-dog">
              {" "}
              <FaDog size={25} />
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  );
}
