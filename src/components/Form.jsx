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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (cardNumber.length !== 16) {
      setCardNumberError(true);
    } else {
      setCardNumberError(false);
    }

    if (expMonth.length !== 2) {
      setExpMonthError(true);
    } else {
      setExpMonthError(false);
    }

    if (expYear.length !== 2) {
      setExpYearError(true);
    } else {
      setExpYearError(false);
    }

    if (cvc.length !== 3) {
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
          onChange={(e) => setCardNumber(e.target.value)}
          className={cardNumberError ? "error-outline" : ""}
          maxLength={16}
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
              maxLength={2}
            />

            <input
              type="text"
              name="expDate"
              placeholder="YY"
              value={expYear}
              onChange={(e) => setExpYear(e.target.value)}
              className={expYearError ? "error-outline" : ""}
              maxLength={2}
            />
          </div>
          <span className={expMonthError || expYearError ? "show-span" : ""}>Cannot be blank</span>
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
            maxLength={3}
          />
          <span className={cvcError ? "show-span" : ""}>Cannot be blank</span>
        </label>
      </div>
      <button>Confirm</button>
    </form>
  );
}

export default Form;
