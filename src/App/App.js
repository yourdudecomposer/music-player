import classes from "./App.module.scss";
import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";
import IntroText from "../components/IntroText/IntroText";
import { useState,useRef } from "react";
import AudioPlayer from 'react-h5-audio-player';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackName, setTrackName] = useState("");
  function onCardClick(newTrackName) {
    setTrackName(newTrackName);
    setIsPlaying(true)
  }
  const player = useRef()
  return (
    <div className={classes["wrapper"]}>
      <AudioPlayer
      style={{display:'none'}}
      ref={player}
    autoPlay
    src={'audio/'+trackName}
    onPlay={e => console.log("onPlay")}
  />
     
      <Header />
      <CardList
      player={player.current}
        isPlaying={isPlaying}
        trackName={trackName}
        onCardClick={onCardClick}
      />
      <IntroText trackName={trackName} />
    
    </div>
  );
}

export default App;
