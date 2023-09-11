function Form() {
  return (
    <form>
      <label htmlFor="name">
        Cardholder name
        <input
          type="text"
          name="name"
          placeholder="e.g Jane Appleseed"
        />
      </label>
      <label htmlFor="cardNumber">
        Card number
        <input
          type="number"
          name="cardNumber"
          placeholder="e.g 1234 5678 9123 0000"
        />
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
        </label>
        <label htmlFor="cvc">
          cvc
          <input
            type="number"
            name="cvc"
            placeholder="e.g 123"
          />
        </label>
      </div>
      <button>Confirm</button>
    </form>
  );
}

export default Form;
