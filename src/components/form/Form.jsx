import { useState, useRef } from "react";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

function Form({ setComplete }) {
  // Use useContext to get the context state values, and destructure needed values
  const useFormContext = useContext(FormContext);
  const { name, setName, cardNumber, setCardNumber, expMonth, setExpMonth, expYear, setExpYear, cvc, setCvc } = useFormContext;

  // Auto focus next input when filled references
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const cvcRef = useRef(null);
  const buttonRef = useRef(null);

  // Error handling
  const [nameError, setNameError] = useState(false);
  const [cardNumberError, setCardNumberError] = useState(false);
  const [expMonthError, setExpMonthError] = useState(false);
  const [expYearError, setExpYearError] = useState(false);
  const [cvcError, setCvcError] = useState(false);

  const handleCardNumberChange = (e) => {
    let cardNumber = e.target.value;

    // Remove non-numeric characters
    cardNumber = cardNumber.replace(/\D/g, "");

    // Ensure that the input does not contain "e" or "." (decimal point)
    cardNumber = cardNumber.replace(/[e.]/gi, "");

    // Limit the input to 16 characters
    if (cardNumber.length > 16) {
      cardNumber = cardNumber.slice(0, 16);
    }

    // Format the card number with spaces every four characters
    cardNumber = cardNumber.replace(/(\d{4})/g, "$1 ");

    // Trim any leading or trailing spaces
    cardNumber = cardNumber.trim();

    // Validate the card number format (exactly 16 digits)
    if (cardNumber.length !== 19) {
      setCardNumberError(true);
    } else {
      setCardNumberError(false);
    }

    // Set the cardNumber state
    setCardNumber(cardNumber);

    if (cardNumber.length === 19) {
      monthRef.current.focus();
    }
  };

  // Handle submission, and check if all values are correct before submitting
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (cardNumber.length !== 19) {
      setCardNumberError(true);
    } else {
      setCardNumberError(false);
    }

    if (expMonth.length !== 2 || isNaN(expMonth)) {
      setExpMonthError(true);
    } else {
      setExpMonthError(false);
    }

    if (expYear.length !== 2 || isNaN(expYear)) {
      setExpYearError(true);
    } else {
      setExpYearError(false);
    }

    if (cvc.length !== 3 || isNaN(cvc)) {
      setCvcError(true);
    } else {
      setCvcError(false);
    }

    // If all fields are valid, you can proceed with form submission
    if (name.length > 0 && cardNumber.length > 0 && expMonth.length > 0 && expYear.length > 0 && cvc.length > 0) {
      // Handle form submission here
      console.log("Name:", name);
      console.log("Card Number:", cardNumber);
      console.log("Expiration Month:", expMonth);
      console.log("Expiration Year:", expYear);
      console.log("CVC:", cvc);

      setComplete(true);

      // reset the form
      setName("");
      setCardNumber("");
      setExpMonth("");
      setExpYear("");
      setCvc("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Cardholder name
        <input
          id="name"
          type="text"
          name="name"
          placeholder="e.g Jane Appleseed"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={nameError ? "error-outline" : ""}
        />
        <span className={nameError ? "show-span" : ""}>Please provide your full name</span>
      </label>
      <label htmlFor="cardNumber">
        Card number
        <input
          id="cardNumber"
          type="text"
          name="cardNumber"
          placeholder="e.g 1234 5678 9123 0000"
          value={cardNumber}
          onChange={handleCardNumberChange}
          className={cardNumberError ? "error-outline" : ""}
          inputMode="numeric"
        />
        <span className={cardNumberError ? "show-span" : ""}>Wrong format, numbers only</span>
      </label>
      <div className="expiration-date-cvc">
        <label htmlFor="expDate">
          Exp. Date (mm/yy)
          <div>
            <input
              id="expDate"
              type="text"
              name="expDate"
              placeholder="MM"
              value={expMonth}
              onChange={(e) => {
                setExpMonth(e.target.value);
                if (e.target.value.length === 2) {
                  yearRef.current.focus();
                }
              }}
              className={expMonthError ? "error-outline" : ""}
              inputMode="numeric"
              maxLength={2}
              ref={monthRef}
            />

            <input
              id="expDateYear"
              type="text"
              name="expDate"
              placeholder="YY"
              value={expYear}
              onChange={(e) => {
                setExpYear(e.target.value);
                if (e.target.value.length === 2) {
                  cvcRef.current.focus();
                }
              }}
              className={expYearError ? "error-outline" : ""}
              inputMode="numeric"
              maxLength={2}
              ref={yearRef}
            />
          </div>
          <span className={expMonthError || expYearError ? "show-span" : ""}>Cannot be blank/wrong format</span>
        </label>
        <label htmlFor="cvc">
          cvc
          <input
            id="cvc"
            type="text"
            name="cvc"
            placeholder="e.g 123"
            value={cvc}
            onChange={(e) => {
              setCvc(e.target.value);
              if (e.target.value.length === 3) {
                buttonRef.current.focus();
              }
            }}
            className={cvcError ? "error-outline" : ""}
            inputMode="numeric"
            maxLength={3}
            ref={cvcRef}
          />
          <span className={cvcError ? "show-span" : ""}>Cannot be blank/wrong format</span>
        </label>
      </div>
      <button ref={buttonRef}>Confirm</button>
    </form>
  );
}

export default Form;
