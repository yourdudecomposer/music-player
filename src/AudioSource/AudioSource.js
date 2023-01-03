import React, { useEffect } from "react";
// import audio from "../AudioApi";

function AudioSource({  trackName, setIsPlaying }) {
  // if (trackName !== "") {
  //   audio.src = "audio/" + trackName;
  //   audio.play();
  //   setIsPlaying(true);
  // }
  // useEffect( () => {
  //   if (trackName !== "") {
  //     audio.src = "audio/" + trackName;
  //     audio.play();
  //     setIsPlaying(true);
  //   }
  //   return () => {
  //     audio.load();
  //     setIsPlaying(false);
  //   };
  // }, [trackName, audio,setIsPlaying]);

  return (
    <audio controls src={'audio/' + trackName}></audio>
  );
}

export default AudioSource;
