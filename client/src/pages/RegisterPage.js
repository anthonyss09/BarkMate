import RegisterOne from "../features/auth/RegisterOne";
import RegisterTwo from "../features/auth/RegisterTwo";
import RegisterThree from "../features/auth/RegisterThree";
import { useState } from "react";

export default function RegisterPage() {
  const [showRegisterOne, setShowRegisterOne] = useState(true);
  const [showRegisterTwo, setShowRegisterTwo] = useState(false);
  const [showRegisterThree, setShowRegisterThree] = useState(false);

  const handleRegisterOne = () => {
    setShowRegisterOne(!showRegisterOne);
  };
  const handleRegisterTwo = () => {
    setShowRegisterTwo(!showRegisterTwo);
  };
  const handleRegisterThree = () => {
    setShowRegisterThree(!showRegisterThree);
  };
  return (
    <section className="full-page">
      {showRegisterOne && (
        <RegisterOne
          handleRegisterOne={handleRegisterOne}
          handleRegisterTwo={handleRegisterTwo}
        />
      )}
      {showRegisterTwo && (
        <RegisterTwo
          handleRegisterTwo={handleRegisterTwo}
          handleRegisterThree={handleRegisterThree}
        />
      )}
      {showRegisterThree && (
        <RegisterThree
          handleRegisterTwo={handleRegisterTwo}
          handleRegisterThree={handleRegisterThree}
        />
      )}
    </section>
  );
}
