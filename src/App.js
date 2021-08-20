// import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
// import Home from "./Components/Home";
// import Login from "./Components/Login";
// import AuthProvider from "./AuthProvider";
import {useEffect} from "react";
import { firestore } from "./firebase";
function App() {

  useEffect(() => {
    
    // add 
    // firestore.collection("users").add({body:"this is val 2"})
    async function f(){
      let querySnapShot=await firestore.collection("users").get();
      console.log(querySnapShot.docs);
      for(let i=0;i<querySnapShot.docs.length;i++)
      {
        console.log(querySnapShot.docs[i].data());
      }
    }
    f();
  }, [])
  return (
    <>
     <h1>App</h1>
    {/* <AuthProvider>
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </AuthProvider> */}
    </>
  );
}

export default App;
