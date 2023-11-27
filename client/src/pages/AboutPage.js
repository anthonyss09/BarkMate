import Wrapper from "../assets/wrappers/AboutPageW";
import NavBar from "../app/HomeNav";
import LandingNav from "../app/LandingNav";
import kelseyPetsTop from "../assets/images/kelseyFront.jpeg";
import Footer from "../app/Footer";
import { useEffect, useState, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { selectUserToken } from "../features/auth/authSlice";
import { IoLogoVenmo } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const token = useSelector(selectUserToken);

  const [scrolled, setScrolled] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      {token ? <NavBar /> : <LandingNav />}

      <section className="about-page-main">
        <div className="row-one">
          <img className="img img-one" src={kelseyPetsTop} alt="dog" />
          <div className={`${scrolled ? "about-page-header-container" : ""}`}>
            <h3
              className={`about-page-header ${
                scrolled ? "about-page-header-scrolled" : ""
              }`}
            >
              About
            </h3>
          </div>
        </div>
        <div className="about-page-center">
          <br />
          <div className="p-one">
            <p className="first-line">Hi! Welcome to Bark mate!</p>
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
          <p className="first-line">
            {" "}
            Bark mate is meant to connect local dog owners who could barter
            walking shifts based around eachothers needs.
          </p>
          As a developer I also want users like you to enjoy the social media
          experience of sharing photos and stories about our dogs and lives.
          <br /> I envision Bark mate as a place to create community and connect
          with fellow dog lovers.
          <br />I hope you enjoy, and if you do, consider leaving Bark mate a
          tip. Currently Bark mate's only source of funding is from myself and
          user tips,
          <br /> it seems fitting as I've worked as a bartender for most of my
          career. <br />
          <br /> <p className="first-line">
            Thanks dog lovers and friends!
          </p>{" "}
        </div>
        <Link to="/payment" className="link btn btn-tip">
          <IoLogoVenmo size={25} className="icon-venmo" />
          Tip Bark Mate
        </Link>
      </section>
      <Footer />
    </Wrapper>
  );
}
