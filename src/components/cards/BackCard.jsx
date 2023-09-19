import image from "../../assets/bg-card-back.png";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

function BackCard() {
  // Use useContext to get the context value
  const useFormContext = useContext(FormContext);

  // Destructure the values you need from the context value
  const { cvc } = useFormContext;

  return (
    <div className="back-card">
      <img
        src={image}
        alt=""
      />
      <p>{cvc ? cvc : "000"}</p>
    </div>
  );
}

export default BackCard;
