import classes from "./CardList.module.scss";
import React from "react";
import TrackCard from "../TrackCard/TrackCard";
import arr from "../../db";

function CardList({ onCardClick,trackName,isPlaying}) {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["card-container"]}>
        {arr.map((e) => {
          return (
            <TrackCard
              isPlaying={e.audio === trackName && isPlaying}
              trackName={e.name}
              onCardClick={onCardClick}
              trackFileName={e.audio}
              key={e.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardList;
