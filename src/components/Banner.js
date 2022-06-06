import logo from "../assets/logo.png";
import "../styles/Banner.css";
import Recommendations from "./Recommendations";
function Banner() {
  const title = "La maison jungle";
  return (
    <div className="Imj-banner">
      <div className="Imj-banner-row">
        <img src={logo} alt="La maison jungle" className="Imj-logo" />
        <h1 className="Imj-title">{title}</h1>
      </div>
      <Recommendations />
    </div>
  );
}

export default Banner;
