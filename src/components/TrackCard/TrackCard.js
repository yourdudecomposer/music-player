import React, { useState,useEffect } from "react";
import classes from "./TrackCard.module.scss";

function TrackCard({ trackName,onCardClick }) {


  return (
    <div onClick={()=>onCardClick(trackName)} className={classes["card"]}>
    </div>
  );
}

export default TrackCard;

