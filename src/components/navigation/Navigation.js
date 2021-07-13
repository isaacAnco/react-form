import React from "react";
import { List } from "./List";
import classes from "./Navigation.module.css";

export function Navigation() {
  return (
    <nav className={classes.nav}>
      <h2>project</h2>
      <ul>
        <List />
      </ul>
    </nav>
  );
}
