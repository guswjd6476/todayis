import { authService, firebaseInstance } from './firebase'
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup 
} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import React, {useState} from 'react';

function Login(){
  const navigate = useNavigate();
 const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const onChange = (event) => {
  const {
    target: { name, value }
  } = event
  if (name === 'email') {
    setEmail(value)
  } else if (name === 'password') {
    setPassword(value)
  }
}

const onSubmit = (event) => {
  event.preventDefault()
  signInWithEmailAndPassword(
    authService,
    email,
    //displayName,
    password
);
navigate("/")
alert('로그인완료')
}

const onSocailClick = async(event) => {
  const {target:{name}} = event
  let provider
  if(name ==="google"){
      provider = new firebaseInstance.auth.GoogleAuthProvider()
  }else if (name ==="github"){
      provider = new firebaseInstance.auth.GithubAuthProvider()
  }
  await authService.signInWithPopup(provider)
  
}

return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        <input type="submit" value="Log-In" />
      </form>
      <div>
        <button name='google' onClick={onSocailClick}>Continue with Google</button>
        <button name='github' onClick={onSocailClick}>Continue with github</button>
      </div>
    </div>
  )

}

export default Login