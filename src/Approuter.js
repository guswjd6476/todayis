import React from "react";
import { HashRouter, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Main from "./Main"
import Profile from "./Profile";
import Write from "./Wirte";
import Signin from "./Signin";
import Login from "./Login";
const Approuter =  ({userdata, isLoggedIn}) => {
    
    return(
        <HashRouter>
            <Header userdata={userdata} isLoggedIn={isLoggedIn} />
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/Profile" element={<Profile userdata={userdata} />}/>
                <Route path="/Write" element={<Write userdata={userdata} />}/>
                <Route path="/Signin" element={<Signin/>}/>
                <Route path="/Login" element={<Login/>}/>
            </Routes>
        </HashRouter>
    )
}

export default Approuter