import React from 'react'
import "./Register.scss"
import doc from "../../../assets/imgs/doc.svg"

const Register = () => {
  return (
    <>
    <div className="register-container">
        <div className="image">
        <img src={doc} alt="" id='doc'/>
        </div>
        <div className="form">
        <h2>Register</h2>
        <form action="submit">
        <input type="text" placeholder='Username' />
        <input type="text" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <input type="submit" name="" id="submit" value='Register' />
        </form>
        <a href="/login">Login</a>
        </div>
    </div>
    </>
  )
}

export default Register