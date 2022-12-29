import classes from "./App.module.scss";
import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";
import Player from "../components/Player/Player";
import IntroText from "../components/IntroText/IntroText";
import { useState } from "react";

function App() {
  const [trackName, setTrackName] = useState('')
  function onCardClick(trackName) {
    setTrackName(trackName)
  }

  return (
    <div className={classes["wrapper"]}>
      <Header />
      <CardList onCardClick={onCardClick} />
      <IntroText />
      <Player trackName={trackName} />
    </div>
  );
}

export default App;
