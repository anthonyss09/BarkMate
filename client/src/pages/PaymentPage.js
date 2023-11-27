import BrainTreeForm from "../components/BrianTreeForm";
import { useEffect } from "react";

export default function PaymentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="payment-page-main">
      <BrainTreeForm />
    </section>
  );
}
