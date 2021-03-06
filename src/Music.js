import React, { useState, useEffect } from 'react';
import bgVideo from './videos/loadingscreen.mp4';
import music from './music/theme.mp3';


function Music() {


        // <i class="fas fa-volume-mute" id="mute" isMuted={true} onClick={Mute}></i>   

        //  <i className="fas fa-volume-up" id="mute" isMuted={false} onClick={Mute}></i>

    return (
        <div>
            <video autoPlay loop poster="assets/videos/loadingscreen.jpg" id="bgvid" src={bgVideo}>
            </video>
            <audio loop autoPlay muted={true} src={music} id="music"></audio>
        </div>
        
    )
    
}


export default Music;