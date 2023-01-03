import React, { useEffect, useMemo, useState } from "react";
import PlayButton from "../../PlayButton/PlayButton";
import VinylPlate from "../../VinylPlate/VinylPlate";
import classes from "./TrackCard.module.scss";
import { useInView } from "react-intersection-observer";

function TrackCard({
  trackName,
  trackFileName,
  onCardClick,
  isPlaying,
  isFieldInView
}) {
  function click(trackFileName) {
    onCardClick(trackFileName);
  }
const stickyObj = useMemo(()=>({
  position: "sticky",
  top: "15px",
  width: "170px",
  height: "170px",
}),[])
const fixedObj = useMemo(()=>({
  position: "fixed",
  width: "100px",
  height: "100px",
  bottom: "2px",
  right: "10px",
}),[])
  const [obj, setObj] = useState(null);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    
    if (isPlaying && isFieldInView) {
      console.log('isPlaying && isFieldInView')
      setObj(stickyObj);
    } else if(isPlaying && !isFieldInView) {
      setObj(fixedObj)
      console.log('isPlaying && !isFieldInView')
    }else {
      setObj(null)
      console.log('else')
    }
  }, [isPlaying,inView,fixedObj,stickyObj,isFieldInView]);

  return (
    
    <div
      ref={ref}
      style={obj}
      onClick={() => click(trackFileName)}
      className={classes["card"]}
    >
      <h2>{trackName}</h2>
      {isPlaying ? <VinylPlate /> : <PlayButton />}
    </div>
  );
}

export default TrackCard;
