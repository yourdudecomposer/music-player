import React, { useState } from "react";
import classes from "./BurgerButton.module.scss";
function BurgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`${classes["burger"]} ${isOpen ? classes["open"] : null}`}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default BurgerButton;
