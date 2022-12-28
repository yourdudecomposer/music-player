import classes from "./CardList.module.scss";
import React from "react";
import TrackCard from "../TrackCard/TrackCard";
import arr from "../../arr";

function CardList() {


  return (
    <div className={classes["wrapper"]}>
      <div className={classes["card-container"]}>
        {arr.map((e, idx) => (
          <TrackCard req={e} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
