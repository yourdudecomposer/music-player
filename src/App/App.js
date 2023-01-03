import classes from "./App.module.scss";
import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";
import Player from "../components/Player/Player";
import IntroText from "../components/IntroText/IntroText";
import { useState, useRef, useEffect } from "react";
import Audio from "../Audio/Audio";

function App() {
  const audioTag = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [trackName, setTrackName] = useState("");
  const [dFlex, setDFlex] = useState({});

  async function play(newTrackName) {
    // if (audioContext.state === "suspended") {
    //   audioContext.resume();
    //   console.log(audioContext);
    // }
    audio.play();
    // if (newTrackName !== trackName) {
    // await audioTag.current.load();
    // audioTag.current.play();
    // } else audioTag.current.play();

    setIsPlaying(true);
  }

  function pause() {
    audioTag.current.pause();
    setIsPlaying(false);
  }
let audio;
  function onCardClick(newTrackName) {
    // setDFlex({ transform: "translateY(0px)" });
     setTrackName(newTrackName);
// audioTag.current.addEventListener('canplay',()=>{
//       audioTag.current.play()
//      })
    
  }
  function togglePlay(newTrackName) {
    if (isPlaying) {
      pause();
    } else {
      play(newTrackName);
    }
  }

  return (
    <div className={classes["wrapper"]}>
      <Audio trackName={trackName}/>
      <Header />
      <CardList
        isPlaying={isPlaying}
        trackName={trackName}
        onCardClick={onCardClick}
      />
      <IntroText trackName={trackName} />
      <Player
        dFlex={dFlex}
        togglePlay={togglePlay}
        isPlaying={isPlaying}
        audioTag={audioTag}
        trackName={trackName}
      />
    </div>
  );
}

export default App;
