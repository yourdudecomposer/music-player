import React, { useEffect } from "react";
import audio from "../AudioApi";

function Audio({ trackName, audioContext }) {
    
  useEffect(() => {
    if (trackName !== "") {
      console.log(trackName);
      console.log(audio);
      audio.src = 'audio/'+trackName
    //   const source = audioContext.createMediaElementSource(audio);
    //   source.connect(audioContext.destination);
    //   if (audioContext.state === "suspended") {
    //     audioContext.resume();
    //     console.log(audioContext);
    //   }

      audio.play();
    }
    return  ()=>{audio.load()};
  }, [trackName,audioContext]);

  return <></>;
}

export default Audio;
