import React, { useState,useEffect } from "react";
import classes from "./TrackCard.module.scss";

function TrackCard({ trackName, trackFileName,onCardClick }) {

  return (
    <div onClick={()=>onCardClick(trackFileName)} className={classes["card"]}>
      {trackName}
    </div>
  );
}

export default TrackCard;

