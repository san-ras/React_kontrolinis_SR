import lost from "../assets/lost.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

export const NotFound = () => {
  return (
    <div>
      <h1 className="mb-5 mt-5">We lost this page</h1>
      <p>We searched high and low but couldn't find what you're looking for.</p>
      <p>Let's find a better place for you to go!</p>
      <img src={lost} alt="Lost it." />
    </div>
  );
};
