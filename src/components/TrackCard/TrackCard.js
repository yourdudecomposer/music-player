import React, { useEffect, useState } from "react";
import PlayButton from "../../PlayButton/PlayButton";
import VinylPlate from "../../VinylPlate/VinylPlate";
import classes from "./TrackCard.module.scss";
import { useInView } from "react-intersection-observer";

function TrackCard({
  player,
  trackName,
  trackFileName,
  onCardClick,
  isTrackPlaying,
  isTrackPaused,
}) {
  const [timeline, setTimeline] = useState("0");
  const [cardStyle, setCardStyle] = useState({});

  function click(trackFileName) {
    onCardClick(trackFileName);
  }
  useEffect(() => {
    if (isTrackPlaying || isTrackPaused) {
      setCardStyle({ width: "165px", height: "165px" });
    } else setCardStyle({});
  }, [isTrackPlaying, isTrackPaused]);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (isTrackPlaying  || isTrackPaused) {
      const id = setInterval(() => {
        setTimeline(player.progressBar.current.ariaValueNow);
      }, 1000);
      return () => clearInterval(id);
    } else  setTimeline('0')
  }, [player, isTrackPlaying, isTrackPaused]);
  return (
    <div
      ref={ref}
      onClick={() => {
        console.log("div click");
        click(trackFileName);
      }}
      style={cardStyle}
      className={classes["card"]}
    >
      <div style={{ width: `${timeline}%` }} className={classes["timeline"]}>
        {" "}
      </div>
      <h2>{trackName}</h2>
      {isTrackPlaying || isTrackPaused ? (
        <VinylPlate
          isTrackPlaying={isTrackPlaying}
          isTrackPaused={isTrackPaused}
          isCardInView={inView}
        />
      ) : (
        <PlayButton />
      )}
    </div>
  );
}

export default TrackCard;
