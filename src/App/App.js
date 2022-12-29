import classes from "./App.module.scss";
import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";
import Player from "../components/Player/Player";
import IntroText from "../components/IntroText/IntroText";
import { useState, useRef } from "react";

function App() {
  const audioTag = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [trackName, setTrackName] = useState("");

  function play(newTrackName) {
    if (newTrackName !== trackName) {
      audioTag.current.addEventListener("canplaythrough", (e) => {
        audioTag.current.play();
      });
    } else audioTag.current.play();
    setIsPlaying(true)
  }
  function pause() {
    audioTag.current.pause();
    setIsPlaying(false)
  }

  function onCardClick(newTrackName) {
    setTrackName(newTrackName);
    play(newTrackName);
  }
function togglePlay(newTrackName) {
  if (isPlaying) {
    pause() 
  } else{
    play(newTrackName)
  }
}

  return (
    <div className={classes["wrapper"]}>
      <Header />
      <CardList onCardClick={onCardClick} />
      <IntroText />
      <Player togglePlay={togglePlay} isPlaying={isPlaying} audioTag={audioTag} trackName={trackName} />
    </div>
  );
}

export default App;
