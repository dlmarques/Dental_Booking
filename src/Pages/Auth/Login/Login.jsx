import React from 'react'
import "./Login.scss"
import doc1 from "../../../assets/imgs/doc1.svg"

const Login = () => {
  return (
    <>
    <div className="register-container">
        <div className="image">
        <img src={doc1} alt="" id='doc'/>
        </div>
        <div className="form">
        <h2>Login</h2>
        <form action="submit">
        <input type="text" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <input type="submit" name="" id="submit" value='Login' />
        </form>
        <a href="/register">Create an account!</a>
        <a href="">Forgot Password</a>
        </div>
    </div>
    </>
  )
}

export default Login