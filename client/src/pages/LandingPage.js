import Wrapper from "../assets/wrappers/LandingW";
import Footer from "../app/Footer";
import LandingNav from "../app/LandingNav";
import HeaderLanding from "../components/HeaderLanding";
import SectionLanding from "../components/SectionLanding";
import SectionLandingTwo from "../components/SectionLandingTwo";
import { useState, useEffect } from "react";
import SectionLandingThree from "../components/SectionLandingThree";
import SectionLandingFour from "../components/SectionLandingFour";

export default function LandingPage() {
  const [hideNav, setHideNav] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const trackNav = () => {
    if (window.scrollY > lastScroll) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
    setLastScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", trackNav);
    console.log(hideNav);
    return () => {
      window.removeEventListener("scroll", trackNav);
    };
  }, [lastScroll]);
  return (
    <Wrapper>
      <main className="full-page">
        <LandingNav hideNav={hideNav} />
        <div className={`${!hideNav ? "landing-body" : ""}`}>
          {" "}
          <HeaderLanding />
          <SectionLanding />
          <SectionLandingTwo />
          <SectionLandingThree />
          <SectionLandingFour />
        </div>
        <Footer />
      </main>
    </Wrapper>
  );
}
