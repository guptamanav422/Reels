/* eslint-disable jsx-a11y/no-distracting-elements */
import "./videoCard.css"
import { useState } from "react";

let VideoCard = () => {

    let [playing, setPlaying] = useState(false);
    let[commentBoxOpen,setCommentBoxOpen]=useState(false);
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

                <span onClick={(e)=>{
                    if(commentBoxOpen){
                        setCommentBoxOpen(false);
                    }
                    else{
                        setCommentBoxOpen(true);
                    }
                }} className="material-icons-outlined video-card-comment">chat</span>
                <span className="material-icons-outlined video-card-like">favorite_border</span>

                {
                    commentBoxOpen?<div className="video-card-comment-box">
                        <div className="actual-comments">
                            <div className="post-user-comment">
                                <img alt="mamn" src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"/>
                                <div>
                                    <h5>User Name</h5>
                                    <p>This is actual comment</p>
                                </div>
                            </div>
                        </div>
                        <div className="comment-form">
                            <input type="text" />
                            <button>Post</button>
                        </div>
                    </div>:""
                }
                <video
                    onClick={(e) => {
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