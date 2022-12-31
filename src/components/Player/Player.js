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

        const loadSec = audioTag.current.buffered.end(
          audioTag.current.buffered.length - 1
        );
        setWidthLoad((loadSec * 100) / audioLength + "%");
      }, 1000);
    }
    return () => clearInterval(intId);
  }, [isPlaying, audioTag]);

  return (
    <div style={dFlex} className={classes["wrapper"]}>
      <audio preload="auto" ref={audioTag} src={"audio/" + trackName}></audio>
      <div className={classes["container"]}>
        <div className={classes["buttons"]}>
          <button className={classes["toggle"]}>
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
                fill="#000000"
              />
            </svg>
          </button>
          <button
            onClick={() => togglePlay(trackName)}
            className={classes["play"]}
          >
            {isPlaying ? (
              <svg width="100%" height="100%" viewBox="0 0 36 36" version="1.1">
                <path
                  className={classes["pause"]}
                  d="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26"
                />
              </svg>
            ) : (
              <svg width="100%" height="100%" viewBox="0 0 36 36" version="1.1">
                <path
                  // fill="purple"
                  className={classes["play"]}
                  d="M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28"
                />
              </svg>
            )}
          </button>
          <button className={classes["toggle"]}>
            {" "}
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
                fill="#000000"
              />
            </svg>
          </button>
        </div>
        <div className={classes["timeline"]}>
          <div style={time} className={classes["time"]}></div>
          <div style={load} className={classes["load"]}></div>
        </div>
      </div>
    </div>
  );
}

export default Player;
