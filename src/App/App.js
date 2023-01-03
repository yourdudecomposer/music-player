import classes from "./App.module.scss";
import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";
import Player from "../components/Player/Player";
import IntroText from "../components/IntroText/IntroText";
import { useState } from "react";
import AudioSource from "../AudioSource/AudioSource";
import ReactPlayer from "react-player";

function App() {
  let audio = new Audio("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackName, setTrackName] = useState("");
  const [dFlex, setDFlex] = useState({});

  function onCardClick(newTrackName) {
    console.log();
    if (newTrackName !== trackName) {
      setDFlex({ transform: "translateY(0px)" });
      setTrackName(newTrackName);
    }
  }
  function togglePlay() {
    if (isPlaying) {
      audio.pause();
    } else {
      console.log(audio);
      audio.play();
    }
  }

  return (
    <div className={classes["wrapper"]}>
      {/* <AudioSource
        setIsPlaying={setIsPlaying}
        audio={audio}
        trackName={trackName}
      /> */}
      <ReactPlayer
      width={0}
      height={0}
        url={"audio/" + trackName}
        playing
        onProgress={(e)=>console.log(e)}
      />
      <Header />
      <CardList
        isPlaying={isPlaying}
        trackName={trackName}
        onCardClick={onCardClick}
      />
      <IntroText trackName={trackName} />
      {/* <Player
        audio={audio}
        dFlex={dFlex}
        togglePlay={togglePlay}
        isPlaying={isPlaying}
        trackName={trackName}
      /> */}
    </div>
  );
}

export default App;
