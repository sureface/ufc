import React, { useState} from 'react';
import myVideo from "../videos/Булбул.mp4"

const LiveTime = () => {

    const [time, setTime] = useState();

    setInterval(() => {

        const liveDate = new Date();

        setTime(liveDate.getHours() + " : " + liveDate.getMinutes() + " : " + liveDate.getSeconds());

    }, 1000);

    const PlayVideo = () => {
        if (time === "17:47"){
            myVideo.play();
        }else {
            myVideo.pause();
        }
    }


    return (
        <div>
            <h1 className="font-weight-bold">{time}</h1>
            <video autoPlay loop src={PlayVideo}/>
        </div>
    );
};

export default LiveTime;