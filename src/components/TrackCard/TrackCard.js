import React, { useState } from "react";
import BarAnimation from "../BarAnimation/BarAnimation";
import classes from "./TrackCard.module.scss";

function TrackCard({ trackName, trackFileName,onCardClick }) {


const [isPlaying,setIsPlaying] = useState(false)
function click(trackFileName) {
  onCardClick(trackFileName)
  setIsPlaying(!isPlaying)
}

  return (
    <div onClick={()=>click(trackFileName)} className={classes["card"]}>
      {trackName}
      {isPlaying?<BarAnimation/>:null}
    </div>
  );
}

export default TrackCard;

