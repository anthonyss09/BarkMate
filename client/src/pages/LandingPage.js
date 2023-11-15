import Wrapper from "../assets/wrappers/LandingW";
import Footer from "../app/Footer";
import LandingNav from "../app/LandingNav";
import SectionLanding from "../components/SectionLanding";
import { useState, useEffect, useRef } from "react";

export default function LandingPage() {
  const [hideNav, setHideNav] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const trackNav = () => {
    if (window.scrollY > lastScroll && window.scrollY > 80) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
    setLastScroll(window.scrollY);
  };

  const trackNavRef = useRef(trackNav);

  useEffect(() => {
    trackNavRef.current = trackNav;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", trackNavRef.current);
    return () => {
      window.removeEventListener("scroll", trackNavRef.current);
    };
  }, [lastScroll]);

  return (
    <Wrapper>
      <main className="full-page">
        <LandingNav hideNav={hideNav} />
        <div className={`${!hideNav ? "landing-body" : ""}`}>
          {" "}
          <SectionLanding />
        </div>
        <Footer />
      </main>
    </Wrapper>
  );
}
