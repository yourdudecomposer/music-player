import React, { useState,useEffect } from "react";
import classes from "./TrackCard.module.scss";

function TrackCard({ req }) {
console.log(req)
    const [mus, setMus] = useState('')

    useEffect(()=>{
        setMus('audio/10.mp3')
    },[])

console.log(mus)
  return (
    <div  className={classes["card"]}>
      <audio preload="none" controls src={`audio/${req}.mp3`}></audio>
    </div>
  );
}

export default TrackCard;
