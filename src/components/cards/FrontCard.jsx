import image from "../../assets/bg-card-front.png";
import logo from "../../assets/card-logo.svg";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

function FrontCard() {
  // Use useContext to get the context value
  const useFormContext = useContext(FormContext);

  // Destructure the values you need from the context value
  const { name, cardNumber, expMonth, expYear } = useFormContext;

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
        <p className="front-card-account-number">{cardNumber ? cardNumber : "0000 0000 0000 0000"}</p>
        <div className="front-card-name-exp">
          <p>{name ? name : "Ola Normann"}</p>
          <p>
            {expMonth ? expMonth : "00"}/{expYear ? expYear : "00"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FrontCard;
