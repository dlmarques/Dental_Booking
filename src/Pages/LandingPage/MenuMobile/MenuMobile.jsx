import React from 'react'
import "./MenuMobile.scss"

import {IoMdClose} from "react-icons/io"
import logo from "../../../assets/imgs/logo.png";

const MenuMobile = ({setMobilemenu}) => {
  return (
    <>
    <div className="menu-mobile">
        <div className="close">
        <IoMdClose onClick={() => setMobilemenu(false)}/>
        <div className="links">
        <a href="#services" onClick={() => setMobilemenu(false)}>Services</a>
        <a href="#about" onClick={() => setMobilemenu(false)}>About</a>
        <a href="#contact" onClick={() => setMobilemenu(false)}>Contact</a>
        <a href="/login">Open App</a>
        </div>
        <div className="logo">
        <img src={logo} alt="" />
        </div>
        </div>
    </div>
    </>
  )
}

export default MenuMobile