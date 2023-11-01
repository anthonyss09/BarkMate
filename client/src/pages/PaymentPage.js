import Wrapper from "../assets/wrappers/PaymentPageW";
import BraintreeDropIn from "../components/BraintreeDropIn";

export default function PaymentPage() {
  return (
    <section className="payment-page-main">
      <BraintreeDropIn />
    </section>
  );
}
