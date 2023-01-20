import { useState, useRef, useEffect } from "react";
import {Link } from "react-router-dom";
import Navigation from "./Navigation";
import './style.css'

function Header({userdata, isLoggedIn}) {
    const [open, setOpen] = useState(false);
    const el = useRef()
    useEffect(()=>{
        const handlemenu = (e) => {
            if(open && el.current&&!el.current.contains(e.target)){
                setOpen(false)
            }
        };
        document.addEventListener('mousedown', handlemenu)
        return () => {
            document.removeEventListener('mousedown', handlemenu)
        }
    },[open])
    console.log(el)
    return (
        <div ref={el} >
        <Navigation isLoggedIn={isLoggedIn} userdata={userdata} setOpen={setOpen} open={open}/>
    <div className="header">
       
        

        <div className="menu" onClick={() => setOpen((prev) => !prev)}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <Link className="logo">
            today is
        </Link>
    </div>
    </div>
    )
}

export default Header