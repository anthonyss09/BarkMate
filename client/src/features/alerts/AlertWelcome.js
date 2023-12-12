import Wrapper from "../../assets/wrappers/AlertWelcomeW";
import Logo from "../../components/Logo";
import { useUpdateUserMutation } from "../auth/authSlice";
import { useState } from "react";
import axios from "axios";

export default function AlertWelcome({ user }) {
  const [mailingList, setMailingList] = useState(true);
  const [updateUser] = useUpdateUserMutation();
  const handleContinue = () => {
    updateUser({ userId: user._id, update: { newUser: false, mailingList } });
    if (!mailingList) {
      axios.post("/api/transports/remove-recipient", { userId: user._id });
    }
  };
  return (
    <Wrapper>
      <aside className="alert-welcome-main alert-container">
        <div className="alert-welcome-center">
          {" "}
          <Logo logoClass="logo-nav" />
          <div className="alert-welcome-body">
            <span>
              {" "}
              Welcome to Bark Mate! We are excited you're here! Keep in mind
              Bark Mate is just getting started, every time you check back there
              should be more and more people in your area.{" "}
            </span>
            <br />
            <span>
              {" "}
              You're on our mailing list and we will send you emails every so
              often to alert you of Bark Mate milestones which would mean an
              increase in local profiles!{" "}
            </span>
          </div>
          <div>
            <div className="option-mailing option-out">
              <input
                type="checkbox"
                onClick={() => {
                  setMailingList(!mailingList);
                }}
              />
              <span>opt out of mailing</span>
            </div>
          </div>
          <div className="btn btn-continue" onClick={handleContinue}>
            Continue
          </div>
        </div>
      </aside>
    </Wrapper>
  );
}
