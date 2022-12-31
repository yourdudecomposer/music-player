import React from "react";
import classes from "./BarAnimation.module.scss";

function BarAnimation() {
  return (
    <div className={`${classes["now"]} ${classes["playing"]}`}>
      <span className={`${classes["bar"]} ${classes["n1"]}`}>A</span>
      <span className={`${classes["bar"]} ${classes["n2"]}`}>B</span>
      <span className={`${classes["bar"]} ${classes["n3"]}`}>c</span>
      <span className={`${classes["bar"]} ${classes["n4"]}`}>D</span>
      <span className={`${classes["bar"]} ${classes["n5"]}`}>E</span>
      <span className={`${classes["bar"]} ${classes["n6"]}`}>F</span>
      <span className={`${classes["bar"]} ${classes["n7"]}`}>G</span>
      <span className={`${classes["bar"]} ${classes["n8"]}`}>H</span>
    </div>
  );
}

export default BarAnimation;
