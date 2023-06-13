import RegisterOne from "../features/auth/RegisterOne";
import RegisterTwo from "../features/auth/RegisterTwo";
import RegisterThree from "../features/auth/RegisterThree";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNewUserProp } from "../features/auth/authSlice";

export default function RegisterPage() {
  const [showRegisterOne, setShowRegisterOne] = useState(true);
  const [showRegisterTwo, setShowRegisterTwo] = useState(false);
  const [showRegisterThree, setShowRegisterThree] = useState(false);
  const dispatch = useDispatch();

  const handleRegisterOne = () => {
    setShowRegisterOne(!showRegisterOne);
  };
  const handleRegisterTwo = () => {
    setShowRegisterTwo(!showRegisterTwo);
  };
  const handleRegisterThree = () => {
    setShowRegisterThree(!showRegisterThree);
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    dispatch(updateNewUserProp({ id, value }));
  };
  const handleCheckboxChange = ({ id, value }) => {
    console.log(value);
    dispatch(updateNewUserProp({ id, value: [...value] }));
  };

  return (
    <section className="full-page">
      {showRegisterOne && (
        <RegisterOne
          handleRegisterOne={handleRegisterOne}
          handleRegisterTwo={handleRegisterTwo}
          handleInputChange={handleInputChange}
          showRegisterOne={showRegisterOne}
        />
      )}
      {showRegisterTwo && (
        <RegisterTwo
          handleRegisterTwo={handleRegisterTwo}
          handleRegisterThree={handleRegisterThree}
          handleInputChange={handleInputChange}
          showRegisterTwo={showRegisterTwo}
        />
      )}
      {showRegisterThree && (
        <RegisterThree
          handleRegisterTwo={handleRegisterTwo}
          handleRegisterThree={handleRegisterThree}
          showRegisterThree={showRegisterThree}
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
        />
      )}
    </section>
  );
}
