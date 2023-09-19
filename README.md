# Frontend Mentor - Interactive card details form solution

> By Eivind Simonsen

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./design/desktop-design.jpg)

![](./design/mobile-design.jpg)

### Links

- Live Site URL: [https://eas-interactive-card.netlify.app/](https://eas-interactive-card.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com/guide/) - For styles

### What I learned

The usage of useContext is something i'm not quite used to yet, so taking it into the project to store state values across components was a nice challenge in this project.
Here you can see state values basically being set up to be stored globally.

```jsx
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
```

### Useful resources

- [React useContext docs](https://react.dev/reference/react/useContext) - This helped me with creating the context provider.

## Author

- Website - [https://www.easimonsen.com/](https://www.easimonsen.com/)
- Frontend Mentor - [@eivindsimonsen](https://www.frontendmentor.io/profile/eivindsimonsen)
