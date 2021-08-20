import {auth} from "../firebase"
import {useContext} from "react";
import {authContext} from "../AuthProvider"
import { Redirect } from "react-router-dom";
let Home=()=>{

    let user=useContext(authContext);
    // console.log(user);
    return(
        <>
        {user?"":<Redirect to="/login" />}
        <h1>Home</h1>
        <button className="btn btn-secondary m-4" onClick={()=>{
            auth.signOut();
        }}>Logout</button>
        </>
    )
}

export default Home;