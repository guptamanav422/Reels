import {auth,storage} from "../firebase"
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

        <input type="file"

          onClick={(e)=>{
              e.currentTarget.value="";
          }}

        onChange={
            (e)=>{
            let videoObj=e.currentTarget.files[0];
            let {name,size,type}=videoObj;
            size=size/1000000;

            if(size>10){
                alert("file size exceeds 10 mb");
                return;
            }

            type=type.split("/")[0];
            if(type!=="video"){
                alert("please upload a video file");
                return;
            }
            let uploadTask=storage
            .ref(`/posts/${user.uid}/${Date.now()+name}`)
            .put(videoObj);

            // executes when our files get uploaded 
            uploadTask.on("state_changed",null,null,()=>{

                uploadTask.snapshot.ref.getDownloadURL()
                .then((url)=>{
                    console.log(url);
                })
            })
        }}/>
        </>
    )
}

export default Home;