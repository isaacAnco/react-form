import React from "react";
import classes from "./List.module.css";

export function List() {
  return (
    <li className={classes.list}>
      <div className={classes.cont}>
        <span className={classes.home}>home</span>
      </div>
      <div className={classes.cont}>
        <span className={classes.reg}>Sign Up</span>
      </div>
    </li>
  );
}
