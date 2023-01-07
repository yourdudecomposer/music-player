import React, { useEffect, useMemo, useState } from "react";
import classes from "./VinylPlate.module.scss";

function VinylPlate({ isTrackPlaying, isTrackPaused, isCardInView }) {
  const [obj, setObj] = useState(null);

  const fixedObj = useMemo(
    () => ({
      position: "fixed",
      width: "70px",
      height: "70px",
      bottom: "2px",
      right: "25px",
    }),
    []
  );

  const pauseObj = useMemo(
    () => ({
      animation: "none",
      filter: "blur(3px)",
    }),
    []
  );
  useEffect(() => {
    if (isTrackPlaying && !isCardInView) {
      setObj(fixedObj);
    } else if (isTrackPaused && !isCardInView) {
      setObj({ ...fixedObj, ...pauseObj });
    } else if (isTrackPaused && isCardInView) {
      setObj(pauseObj);
    } else {
      setObj(null);
    }
  }, [isTrackPlaying, isTrackPaused, isCardInView, pauseObj, fixedObj]);

  return isTrackPlaying || isTrackPaused?  
    <svg
      style={obj}
      className={classes["vinyl"]}
      fill="#000000"
      height="60px"
      width="60px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 191.08 191.08"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0">
        <rect
          x="0"
          y="0"
          width="191.08"
          height="191.08"
          rx="95.54"
          fill="#40B4FF"
          strokeWidth="0"
        />
      </g>

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M95.538,191.076C42.858,191.076,0,148.218,0,95.538S42.858,0,95.538,0s95.538,42.858,95.538,95.538 S148.218,191.076,95.538,191.076z M95.538,4C45.064,4,4,45.064,4,95.538s41.064,91.538,91.538,91.538 c50.475,0,91.538-41.064,91.538-91.538S146.013,4,95.538,4z M95.538,181.743c-47.533,0-86.205-38.671-86.205-86.205 c0-47.534,38.671-86.205,86.205-86.205s86.205,38.671,86.205,86.205C181.743,143.071,143.071,181.743,95.538,181.743z M95.538,13.333c-45.328,0-82.205,36.877-82.205,82.205c0,45.328,36.877,82.205,82.205,82.205c45.328,0,82.205-36.877,82.205-82.205 C177.743,50.21,140.866,13.333,95.538,13.333z M95.538,172.743c-42.571,0-77.205-34.634-77.205-77.205s34.634-77.205,77.205-77.205 c1.104,0,2,0.896,2,2s-0.896,2-2,2c-40.365,0-73.205,32.84-73.205,73.205s32.839,73.205,73.205,73.205c1.104,0,2,0.896,2,2 S96.643,172.743,95.538,172.743z M95.538,153.384c-31.896,0-57.846-25.95-57.846-57.846c0-31.896,25.95-57.846,57.846-57.846 c1.104,0,2,0.896,2,2s-0.896,2-2,2c-29.69,0-53.846,24.155-53.846,53.846c0,29.69,24.155,53.846,53.846,53.846c1.104,0,2,0.896,2,2 S96.643,153.384,95.538,153.384z M95.538,138.076C72.083,138.076,53,118.994,53,95.538S72.083,53,95.538,53 c23.456,0,42.538,19.083,42.538,42.538S118.994,138.076,95.538,138.076z M95.538,57C74.288,57,57,74.288,57,95.538 s17.288,38.538,38.538,38.538s38.538-17.288,38.538-38.538S116.788,57,95.538,57z M95.538,102.409c-3.789,0-6.872-3.083-6.872-6.871 c0-3.789,3.083-6.872,6.872-6.872s6.871,3.083,6.871,6.872C102.409,99.327,99.327,102.409,95.538,102.409z M95.538,92.667 c-1.583,0-2.872,1.288-2.872,2.872c0,1.583,1.288,2.871,2.872,2.871c1.583,0,2.871-1.288,2.871-2.871 C98.409,93.955,97.121,92.667,95.538,92.667z" />{" "}
      </g>
    </svg>
  :<div className={classes['blured-circle']}></div>;
}

export default VinylPlate;
