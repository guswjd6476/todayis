
import './reset.css'
import React, {useState, useEffect} from 'react';
import Approuter from "./Approuter";
import { authService } from './firebase';

function App() {
  const [init, setInit] = useState(false)
  const [userdata, serUserdata] = useState(null)
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user){
        serUserdata({
          displayName: user.displayName,
          uid: user.uid,
          email : user.email
          //updateProfile: (args) => updateProfile(user, { displayName: user.displayName }),
        })
      }else{
        serUserdata(null)
      }
      setInit(true)
    })
  },[])
  // const refreshUser = () => {
  //   const user = authService.currentUser;
  //   setUserObj({
  //     displayName: user.displayName,
  //     uid: user.uid,
  //     updateProfile: (args) => updateProfile(user, { displayName: user.displayName }),
  //   });
  // }

  return (
    <div className="App">
      {init ? <Approuter isLoggedIn={Boolean(userdata)} userdata={userdata}/> : "Initializing...."}
    </div>
  );
}

export default App;
