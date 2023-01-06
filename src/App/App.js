import classes from "./App.module.scss";
import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";
import IntroText from "../components/IntroText/IntroText";
import { useState, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";

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
  return (
    <div className={classes["wrapper"]}>
      <AudioPlayer
        style={{ display: "none" }}
        ref={player}
        autoPlay
        src={"audio/" + trackName}
        onPlay={(e) => console.log("onPlay")}
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
    </div>
  );
}

export default App;
