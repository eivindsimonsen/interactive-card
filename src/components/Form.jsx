import { useState } from "react";

function Form() {
  // Value handling
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");

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
      console.log("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Cardholder name
        <input
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
              type="text"
              name="expDate"
              placeholder="MM"
              value={expMonth}
              onChange={(e) => setExpMonth(e.target.value)}
              className={expMonthError ? "error-outline" : ""}
              inputMode="numeric"
              maxLength={2}
            />

            <input
              type="text"
              name="expDate"
              placeholder="YY"
              value={expYear}
              onChange={(e) => setExpYear(e.target.value)}
              className={expYearError ? "error-outline" : ""}
              inputMode="numeric"
              maxLength={2}
            />
          </div>
          <span className={expMonthError || expYearError ? "show-span" : ""}>Cannot be blank/wrong format</span>
        </label>
        <label htmlFor="cvc">
          cvc
          <input
            type="text"
            name="cvc"
            placeholder="e.g 123"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            className={cvcError ? "error-outline" : ""}
            inputMode="numeric"
            maxLength={3}
          />
          <span className={cvcError ? "show-span" : ""}>Cannot be blank/wrong format</span>
        </label>
      </div>
      <button>Confirm</button>
    </form>
  );
}

export default Form;
