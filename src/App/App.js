import classes from "./App.module.scss";
import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";
import IntroText from "../components/IntroText/IntroText";
import { useState, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import arr from "../db";
console.log(arr);
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [trackName, setTrackName] = useState("");
  const player = useRef();
  function onCardClick(newTrackName) {
    if (newTrackName === trackName && isPlaying) {
      player.current.audio.current.pause();
      setIsPlaying(false);
      setIsPaused(true);
    } else if (newTrackName === trackName && isPaused) {
      player.current.audio.current.play();
      setIsPlaying(true);
      setIsPaused(false);
    } else {
      setTrackName(newTrackName);
      setIsPlaying(true);
      setIsPaused(false);
    }
  }
  function handleStop() {
    let newTrackName;
    let nextInd = arr.findIndex((el) => el.audio === trackName) + 1;
    if (nextInd === arr.length) {
      newTrackName = arr[0].audio;
    } else newTrackName = arr[nextInd].audio;
    setTrackName(newTrackName);
    setIsPlaying(true);
    setIsPaused(false);
  }
  return (
    <div className={classes["wrapper"]}>
      <AudioPlayer
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
        }}
        ref={player}
        autoPlay
        src={"audio/" + trackName}
        onPlay={(e) => console.log("onPlay")}
        onEnded={(e) => handleStop()}
      />

      <Header />
      <CardList
        player={player.current}
        isPlaying={isPlaying}
        isPaused={isPaused}
        trackName={trackName}
        onCardClick={onCardClick}
      />
      <IntroText trackName={trackName} />
      <IntroText trackName={trackName} />
      <IntroText trackName={trackName} />
    </div>
  );
}

export default App;
