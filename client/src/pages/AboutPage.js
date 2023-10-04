import Wrapper from "../assets/wrappers/AboutPageW";
import NavBar from "../app/HomeNav";
import LandingNav from "../app/LandingNav";
// import { PiDogBold } from "react-icons/pi";
import { TbDog } from "react-icons/tb";
import kelseyPetsTop from "../assets/images/kelseyPetsTop.JPG";
import meSmile from "../assets/images/meSmile.jpeg";
import Footer from "../app/Footer";
import { FcDonate } from "react-icons/fc";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUserToken } from "../features/auth/authSlice";

export default function AboutPage() {
  const token = useSelector(selectUserToken);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      {token ? <NavBar /> : <LandingNav />}

      <section className="about-page-main">
        <div className="row-one">
          <img className="img img-one" src={kelseyPetsTop} />
        </div>
        <div className="about-page-center">
          {/* <img className="img img-two" src={meSmile} /> */}
          <br />
          <div className="p-one">
            Hi! Welcome to Bark mate! <br />
            Bark mate is a passion project of mine on two fronts, dogs and web
            development. My family and I have been blessed by two of the most
            special dogs ever, both of whom I miss very much, Kelsey & Nala.
            That's Kelsey above.
          </div>
          <br />
          I would love to have a dog now, but as it is I am away from home too
          often for work. <br />
          Web development is my passion and soon I will be working full time in
          the field. Until then i've come up with the idea of Bark Mate.
          <br />
          <br />
          Bark mate is meant to connect local dog owners who could barter
          walking shifts based around eachothers needs.
          <br />
          As a developer I also want users like you to enjoy the social media
          experience of sharing photos and stories about our dogs and life.
          <br /> I envision Bark mate as a place to create community and connect
          with fellow dog lovers.
          <br />I hope you enjoy, and if you do, consider leaving Bark mate a
          tip. Currently Bark mate's only source of funding is through user
          tips,
          <br /> it seems fitting as I've worked as a bartender for most of my
          career. <br />
          <br /> Thanks dog lovers and friends!{" "}
        </div>
        <button className="btn">
          Tip
          <br /> BarkMate
          <FcDonate size={25} />
        </button>
      </section>
      <Footer />
    </Wrapper>
  );
}
