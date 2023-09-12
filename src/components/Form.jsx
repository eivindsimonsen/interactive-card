import { useState } from "react";

function Form() {
  /* const [nameError, setNameError] = useState(false);
  const [cardError, setCardError] = useState(false);
  const [mmError, setMmError] = useState(false);
  const [yyError, setYyError] = useState(false);
  const [cvcError, setCvcError] = useState(false); */

  return (
    <form>
      <label htmlFor="name">
        Cardholder name
        <input
          type="text"
          name="name"
          placeholder="e.g Jane Appleseed"
        />
        <span>Please provide your full name</span>
      </label>
      <label htmlFor="cardNumber">
        Card number
        <input
          type="number"
          name="cardNumber"
          placeholder="e.g 1234 5678 9123 0000"
        />
        <span>Wrong format, numbers only</span>
      </label>
      <div className="expiration-date-cvc">
        <label htmlFor="expDate">
          Exp. Date (mm/yy)
          <div>
            <input
              type="number"
              name="expDate"
              placeholder="MM"
            />

            <input
              type="number"
              name="expDate"
              placeholder="YY"
            />
          </div>
          <span>Cannot be blank</span>
        </label>
        <label htmlFor="cvc">
          cvc
          <input
            type="number"
            name="cvc"
            placeholder="e.g 123"
          />
          <span>Cannot be blank</span>
        </label>
      </div>
      <button>Confirm</button>
    </form>
  );
}

export default Form;
