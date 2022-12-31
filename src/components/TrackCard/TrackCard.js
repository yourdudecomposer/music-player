import React, { useState } from "react";
import BarAnimation from "../BarAnimation/BarAnimation";
import classes from "./TrackCard.module.scss";

function TrackCard({ trackName, trackFileName,onCardClick,isPlaying }) {


function click(trackFileName) {
  onCardClick(trackFileName)
}

  return (
    <div onClick={()=>click(trackFileName)} className={classes["card"]}>
      <h2>{trackName}</h2>
      
      {isPlaying?<BarAnimation/>:null}
    </div>
  );
}

export default TrackCard;

