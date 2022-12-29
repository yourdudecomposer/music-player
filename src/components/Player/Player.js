import React, { useEffect, useState } from "react";
import classes from "./Player.module.scss";
import pauseImg from "../../assets/images/pause.svg";
import playImg from "../../assets/images/play.svg";
function Player({ trackName, audioTag, isPlaying, togglePlay }) {

  const [currentImg, setCurrentImg] = useState(playImg);

  useEffect(() => {
    if (isPlaying) {
      setCurrentImg(pauseImg);
    } else {
      setCurrentImg(playImg);
    }
  }, [isPlaying]);

  console.log(trackName);
  return (
    <div className={classes["wrapper"]}>
      <audio preload="auto" ref={audioTag} src={"audio/" + trackName + ".mp3"}></audio>
      {/* <button onClick={()=>audioTag.current.pause()} >pause</button> */}
      <div className={classes["container"]}>
        <div className={classes["timeline"]}>
          <div className={classes["buttons"]}>
            <button>prev</button>
            <button className={classes["play"]}>
              <img onClick={() => togglePlay(trackName)} src={currentImg} />
            </button>
            <button>next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
