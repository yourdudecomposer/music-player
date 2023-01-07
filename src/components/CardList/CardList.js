import classes from "./CardList.module.scss";
import React from "react";
import TrackCard from "../TrackCard/TrackCard";
import arr from "../../db";


function CardList({ player,onCardClick,trackName,isPlaying,isPaused}) {


  return (
    <div   className={classes["wrapper"]}>
      <div className={classes["card-container"]}>
        {arr.map((e) => {
          return (
            <TrackCard
           
          
            player={player}
              isTrackPlaying={e.audio === trackName && isPlaying}
              isTrackPaused={e.audio === trackName && isPaused}
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
