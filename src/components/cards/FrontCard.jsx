import image from "../../assets/bg-card-front.png";
import logo from "../../assets/card-logo.svg";

function FrontCard() {
  return (
    <div className="front-card">
      <img
        src={image}
        alt=""
      />
      <img
        src={logo}
        alt=""
        className="card-logo"
      />
      <div className="front-card-details">
        <p className="front-card-account-number">0000 0000 0000 0000</p>
        <div className="front-card-name-exp">
          <p>Jane Appleseed</p>
          <p>00/00</p>
        </div>
      </div>
    </div>
  );
}

export default FrontCard;
