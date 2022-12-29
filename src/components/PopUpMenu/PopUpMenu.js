import React from "react";
import classes from "./PopUpMenu.module.scss";

function PopUpMenu({ list }) {
  return (
    <nav className={classes["nav"]}>
      <ul>
        {list.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </nav>
  );
}

export default PopUpMenu;
