import Wrapper from "../assets/wrappers/PageNotFoundW";
import confusedPug from "../assets/images/confusedPug.jpg";

export default function PageNotFound() {
  return (
    <Wrapper>
      <section className="page-not-found-main">
        <div className="page-not-found-center">
          <div className="error-text">Page not found</div>
          <div className="error-code">404</div>
          <div className="plain-text">
            Sorry I can't remember where I<br /> burried that page.
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
