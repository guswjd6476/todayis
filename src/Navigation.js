
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Mainli = styled.li`
    padding : 40px 20px 
`
function Navigation({open, setOpen, userdata, isLoggedIn}) {

    return (
        <div className={open? "navi" : "closenavi"}>
            <ul className="navigation">
                <Mainli className="navititle">
                    <p>A picture of a word</p>
                    <p>Today is,</p>
                </Mainli>
                {isLoggedIn ? 
                <Mainli className="navititle">
                    <p>{userdata.email}님</p>
                    <p>반갑습니다</p>
                </Mainli>
                :""
                }
                <li
                    className="navimenu">
                    <NavLink onClick={()=>{setOpen(false)}} to="/"  className={({isActive})=> isActive ? "active" : ""} >메인</NavLink>
                </li>
                <li
                    className="navimenu">
                    <NavLink onClick={()=>{setOpen(false)}} to="/Write" className={({isActive})=> isActive ? "active" : ""} >글쓰기</NavLink>
                </li>
                <li
                 className="navimenu">
                     <NavLink onClick={()=>{setOpen(false)}}  className={({isActive})=> isActive ? "active" : ""} to="/Profile">프로필</NavLink>
                </li>
                {!isLoggedIn ?
                <ul>
                    <li>
                        <Link to="/Signin">회원가입</Link>
                        <Link to="Login">로그인</Link>
                    </li>
                </ul>
                :""
                }
            </ul>  
        </div>
    )
  }
  
  export default Navigation;
  