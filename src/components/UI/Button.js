import React from "react";
import classes from "./Button.module.css";

export function Button(props) {
  return (
    <button className={`${classes.btn}`} disabled={props.disabled}>
      {props.children}
    </button>
  );
}
