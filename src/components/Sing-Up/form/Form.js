import React, { useRef, useState } from "react";
import { Button } from "../../UI/Button";
import { Card } from "../../UI/Card";
import classes from "./Form.module.css";

const validate = (value) => value.trim() === "";
const emialValidate = (value) => value.includes("@");

export function Form() {
  const [inputsIsValidity, setInputsIsValidity] = useState({
    firstName: true,
    lastName: true,
    email: true,
  });
  

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredFirstName = firstNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const enteredEmail = emailRef.current.value;

    const enteredFirstNameIsValid = !validate(enteredFirstName);
    const enteredLastNameIsValid = !validate(enteredLastName);
    const enteredEmailIsValid = emialValidate(enteredEmail);

    setInputsIsValidity({
      firstName: enteredFirstNameIsValid,
      lastName: enteredLastNameIsValid,
      email: enteredEmailIsValid,
    });

    const formIsvalid =
      enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid;

    if (!formIsvalid) {
      return;
    }
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
  };

  const firstNameClasses = `${classes["form-control"]} ${
    inputsIsValidity.firstName ? "" : classes.invalid
  }`;

  const lastNameClasses = `${classes["form-control"]} ${
    inputsIsValidity.lastName ? "" : classes.invalid
  }`;

  const emailClasses = `${classes["form-control"]} ${
    inputsIsValidity.email ? "" : classes.invalid
  }`;

  return (
    <Card className={classes.cont}>
      <form onSubmit={submitHandler}>
        <div className={classes.group}>
          <div className={firstNameClasses}>
            <label>First Name:</label>
            <input type="text" id="firstName" ref={firstNameRef} />
            {!inputsIsValidity.firstName && (
              <p className={classes.error}>please entered a valid first Name</p>
            )}
          </div>
          <div className={lastNameClasses}>
            <label>Last Name:</label>
            <input type="text" id="lastName" ref={lastNameRef} />
            {!inputsIsValidity.lastName && (
              <p className={classes.error}>please entered a valid Last Name</p>
            )}
          </div>
        </div>
        <div className={emailClasses}>
          <label>Email Address:</label>
          <input type="email" id="email" ref={emailRef} />
          {!inputsIsValidity.email && (
            <p className={classes.error}>please entered a valid email</p>
          )}
        </div>
        <div className={classes.action}>
          <Button>Sign Up</Button>
        </div>
      </form>
    </Card>
  );
}
