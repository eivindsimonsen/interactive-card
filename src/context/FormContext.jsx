// FormContext.js
import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <FormContext.Provider
      value={{
        name,
        cardNumber,
        expMonth,
        expYear,
        cvc,
        setName,
        setCardNumber,
        setExpMonth,
        setExpYear,
        setCvc,
      }}>
      {children}
    </FormContext.Provider>
  );
};
