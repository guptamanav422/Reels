import {auth} from "../firebase"
import {useContext} from "react";
import {authContext} from "../AuthProvider"
import { Redirect } from "react-router-dom";
import "./home.css"
import VideoCard from "./VideoCard.js";
let Home=()=>{

    let user=useContext(authContext);
    // console.log(user);
    return(
        <>
        {user?"":<Redirect to="/login" />}
        

        <div className="video-container">
           <VideoCard />
           {/* <VideoCard />
           <VideoCard />
           <VideoCard />
           <VideoCard /> */}
        </div>
        <button className="home-logout-btn" onClick={()=>{
            auth.signOut();
        }}>Logout</button>
        </>
    )
}

export default Home;