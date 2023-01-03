import classes from "./App.module.scss";
import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";
import IntroText from "../components/IntroText/IntroText";
import { useState } from "react";
import ReactPlayer from "react-player";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackName, setTrackName] = useState("");

  function onCardClick(newTrackName) {
    setTrackName(newTrackName);
    setIsPlaying(true)
  }


  return (
    <div className={classes["wrapper"]}>
      <ReactPlayer
      width={0}
      height={0}
        url={"audio/" + trackName}
        playing
        onProgress={(e)=>console.log(e)}
        onDuration={(e)=>console.log(e)}
      />
      <Header />
      <CardList
        isPlaying={isPlaying}
        trackName={trackName}
        onCardClick={onCardClick}
      />
      <IntroText trackName={trackName} />
    
    </div>
  );
}

export default App;
