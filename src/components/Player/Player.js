import React, { useEffect, useState } from "react";
import classes from "./Player.module.scss";

function Player({ trackName, audioTag, isPlaying, togglePlay, dFlex }) {
  const [width, setWidth] = useState("0%");
  const [widthLoad, setWidthLoad] = useState("0%");

  const time = {
    width: width,
  };
  const load = {
    width: widthLoad,
  };

  useEffect(() => {
    for (let i = 0; i < audioTag.current.buffered.length; i++) {
      const startX = audioTag.current.buffered.start(i);
      const endX = audioTag.current.buffered.end(i);
      console.log(startX, endX);
    }
  }, [audioTag]);

  useEffect(() => {
    let intId;

    if (isPlaying) {
      intId = setInterval(function () {
        let audioTime = Math.round(audioTag.current.currentTime);
        let audioLength = Math.round(audioTag.current.duration);
        setWidth((audioTime * 100) / audioLength + "%");

          const loadSec = audioTag.current.buffered.end(audioTag.current.buffered.length-1);
          setWidthLoad((loadSec * 100) / audioLength + "%");      
      }, 1000);
    }
    return () => clearInterval(intId);
  }, [isPlaying, audioTag]);

  console.log(trackName);
  return (
    <div style={dFlex} className={classes["wrapper"]}>
      <audio
        preload="auto"
        ref={audioTag}
        src={"audio/" + trackName + ".mp3"}
      ></audio>
      <div className={classes["container"]}>
        <div style={time} className={classes["time"]}></div>
        <div style={load} className={classes["load"]}></div>
        <div className={classes["timeline"]}>
          <div className={classes["buttons"]}>
            <button>prev</button>
            <button
              onClick={() => togglePlay(trackName)}
              className={classes["play"]}
            >
              {isPlaying ? (
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 36 36"
                  version="1.1"
                >
                  <path
                    className={classes["pause"]}
                    d="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26"
                  />
                </svg>
              ) : (
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 36 36"
                  version="1.1"
                >
                  <path
                    // fill="purple"
                    className={classes["play"]}
                    d="M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28"
                  />
                </svg>
              )}
            </button>
            <button>next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
