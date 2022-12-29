import React, { useEffect, useRef } from 'react';
import classes from './Player.module.scss'

function Player({trackName}) {

const f = useRef()
    console.log(f.current)
useEffect(()=>{
    f.current.play()
},[trackName])

    console.log(trackName)
    return ( 
        <div className={classes["wrapper"]}>
            <audio ref = {f} controls src={'audio/' + trackName + '.mp3'} ></audio>
        </div>
     );
}

export default Player;