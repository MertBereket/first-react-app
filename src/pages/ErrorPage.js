import errorPhoto from "../images/404-error-page-not-found.png";

function ErrorPage() {
  return (
    <div className="d-flex justify-content-center">
      <img src={errorPhoto} alt="error" />
    </div>
  );
}

export default ErrorPage;
