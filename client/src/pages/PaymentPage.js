import Wrapper from "../assets/wrappers/PaymentPageW";
import { useEffect } from "react";
import venmoSmall from "../assets/images/blue_venmo_button_280x48.svg";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import venmoCode from "../assets/images/venmoCode.jpeg";
import Footer from "../app/Footer";

export default function PaymentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <section className="payment-page-center">
        <h1 className="payment-page-header">Thank you for contributing!</h1>

        <Link to="/dashboard/home" className="link">
          {" "}
          <Logo logoClass="logo-nav" iconClass="icon-payment" />
        </Link>

        <a
          href="https://venmo.com/code?user_id=3961781617690125210&created=1703050879.9635692&printed=1"
          className=" link"
        >
          <img src={venmoCode} className="img-venmo" />
        </a>

        <a
          href="https://venmo.com/code?user_id=3961781617690125210&created=1703050879.9635692&printed=1"
          className=" link"
        >
          <img src={venmoSmall} />
        </a>
      </section>

      <Footer />
    </Wrapper>
  );
}
