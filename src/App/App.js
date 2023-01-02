import classes from "./App.module.scss";
import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";
import Player from "../components/Player/Player";
import IntroText from "../components/IntroText/IntroText";
import { useState, useRef, useEffect } from "react";

function App() {
  const audioTag = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [trackName, setTrackName] = useState("");
  const [dFlex, setDFlex] = useState({});

  function play(newTrackName) {
    if (newTrackName !== trackName) {
      audioTag.current.addEventListener("canplay", (e) => {
        audioTag.current.play();
        alert('123')
      });
      // audioTag.current.load();
    } else audioTag.current.play();

    setIsPlaying(true);
  }

  function pause() {
    audioTag.current.pause();
    setIsPlaying(false);
  }

  function onCardClick(newTrackName) {
    setDFlex({ transform: "translateY(0px)" });
    setTrackName(newTrackName);
    play(newTrackName);
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
      <Header />
      <CardList isPlaying={isPlaying} trackName={trackName} onCardClick={onCardClick} />
      <IntroText />
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
