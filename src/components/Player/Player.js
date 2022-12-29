import React from 'react';
import classes from './Player.module.scss'

function Player({trackName}) {
    console.log(trackName)
    return ( 
        <div className={classes["wrapper"]}>
            <audio controls src={'audio/' + trackName + '.mp3'} ></audio>
        </div>
     );
}

export default Player;