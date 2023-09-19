import image from "../../assets/icon-complete.svg";

function FormSuccess({ setComplete }) {
  const returnToForm = () => {
    setComplete(false);
  };

  return (
    <div className="form-success">
      <img
        src={image}
        alt=""
      />
      <h1>THANK YOU!</h1>
      <p className="tinted-text">We`ve added your card details</p>
      <button onClick={returnToForm}>Continue</button>
    </div>
  );
}

export default FormSuccess;
