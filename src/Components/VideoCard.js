/* eslint-disable jsx-a11y/no-distracting-elements */
import "./videoCard.css"
import { useState } from "react";

let VideoCard = () => {

    let [playing, setPlaying] = useState(false);
    return (
        <>
            <div className="video-card">
                <p className="video-card-username"> Fake user</p>
                <span >
                <span className='video-card-music'>
                <span className="material-icons-outlined">music_note</span>
                    <marquee> some song</marquee>
                </span>
                </span>

                <span className="material-icons-outlined video-card-comment">chat</span>
                <span className="material-icons-outlined video-card-like">favorite_border</span>
                <video
                    onclick={(e) => {
                        if (playing) {
                            e.currentTarget.pause();
                            setPlaying(false);
                        }
                        else {
                            e.currentTarget.play();
                            setPlaying(true);
                        }
                    }}
                    loop
                    controls
                    src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" className="video-card-video"></video>
            </div>
        </>
    )
}

export default VideoCard;