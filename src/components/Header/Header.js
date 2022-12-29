import classes from "./Header.module.scss";
import React, { useState } from "react";
import PopUpMenu from "../PopUpMenu/PopUpMenu";

function Header() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const menuList = ["home", "about me", "usefull links"];

  function showPopUp() {
    setIsPopUpVisible(!isPopUpVisible);
  }

  return (
    <header className={classes["header"]}>
      <button onClick={showPopUp} className={classes["open-menu"]}>
        <span />
      </button>
      {isPopUpVisible ? <PopUpMenu list={menuList} /> : null}
    </header>
  );
}

export default Header;
