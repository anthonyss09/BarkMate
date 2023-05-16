import Wrapper from "../assets/wrappers/LandingW";
import AboutSection from "../components/AboutSection";
import ProfileBlurbs from "../components/ProfileBlurbs";
import StepsSection from "../components/StepsSection";
import Footer from "../app/Footer";
import LandingNav from "../app/LandingNav";
import VillageSection from "../components/VillageSection";
import GroupsLanding from "../components/GroupsLanding";

export default function LandingPage() {
  return (
    <Wrapper>
      <main className="full-page">
        <LandingNav />
        {/* <Header /> */}
        <VillageSection />
        <AboutSection />
        <ProfileBlurbs />

        <GroupsLanding />

        <StepsSection />

        <Footer />
      </main>
    </Wrapper>
  );
}
