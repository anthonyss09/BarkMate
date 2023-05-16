import Wrapper from "../assets/wrappers/StepsW";
import { FaPaw, FaHandshake } from "react-icons/fa";
import { TbPaw } from "react-icons/tb";
import { TbDog } from "react-icons/tb";
import { HiOutlineChat } from "react-icons/hi";
import { BsEmojiSunglasses } from "react-icons/bs";

export default function StepsSection() {
  return (
    <Wrapper>
      <section className="steps-main">
        <div className="steps-center">
          <div className="steps-container">
            {" "}
            <h1 className="steps-heading">Doggy steps</h1>
            <div className="step">
              <span className="icon-step">
                {" "}
                <BsEmojiSunglasses size={35} />
              </span>
              <span>Browse local mates</span>
            </div>
            <div className="step">
              <span className="icon-step">
                {" "}
                <TbDog size={35} />
              </span>
              <span>Bark at mates with matching schedules</span>
            </div>
            <div className="step">
              <span className="icon-step">
                {" "}
                <HiOutlineChat size={35} />
              </span>
              <span>Get to know your new mates!</span>
            </div>
            <div className="step">
              <span className="icon-step">
                {" "}
                <FaHandshake size={35} />
              </span>
              <span>Barter responsibilites</span>
            </div>
          </div>

          <button className="btn btn-step">
            <span className="paw btn-paw">
              <FaPaw size={25} />
            </span>
            <span className="btn-text">Create profile</span>
          </button>
        </div>
      </section>
    </Wrapper>
  );
}
