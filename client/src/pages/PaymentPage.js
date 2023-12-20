import BrainTreeForm from "../components/BrianTreeForm";
import Wrapper from "../assets/wrappers/PaymentPageW";
import { useEffect } from "react";
import dog from "../assets/images/logo192.png";
import venmoSmall from "../assets/images/blue_venmo_button_280x48.svg";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import DropMenuLanding from "../components/DropMenuLanding";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";
import venmoCode from "../assets/images/venmoCode.jpeg";

export default function PaymentPage() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      {/* <div className="icon-bars" onClick={handleShowMenu}>
        {" "}
        <HiBars3 size={25} />
      </div> */}
      <section className="payment-page-main">
        {showMenu && <DropMenuLanding handleShowMenu={handleShowMenu} />}
        <div className="payment-page-center">
          <h1 className="payment-page-header">Thank you for contributing!</h1>

          <Link to="/dashboard/home" className="link">
            {" "}
            <Logo logoClass="logo-nav" iconClass="icon-payment" />
          </Link>

          <a
            href="https://venmo.com/code?user_id=3961781617690125210&created=1703050879.9635692&printed=1"
            className=" link"
          >
            <div className="payment-page-body">
              {/* <div className="llc payment-llc">
                Product of
                <br />{" "}
                <Link className="link llc-link">
                  ATOFFETTI <br />
                  DEV LLC
                </Link>
              </div>
              <img src={dog} /> */}
              <img src={venmoCode} className="img-venmo" />
            </div>
          </a>
          <a
            href="https://venmo.com/code?user_id=3961781617690125210&created=1703050879.9635692&printed=1"
            className=" link"
          >
            <img src={venmoSmall} />
          </a>
        </div>
        {/* <BrainTreeForm /> */}
      </section>
    </Wrapper>
  );
}
