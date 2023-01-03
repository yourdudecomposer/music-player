import classes from "./CardList.module.scss";
import React from "react";
import TrackCard from "../TrackCard/TrackCard";
import arr from "../../db";
import { useInView } from "react-intersection-observer";


function CardList({ player,onCardClick,trackName,isPlaying}) {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div   ref={ref} className={classes["wrapper"]}>
      <div className={classes["card-container"]}>
        {arr.map((e) => {
          return (
            <TrackCard
            isFieldInView = {inView}
          
            player={player}
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
