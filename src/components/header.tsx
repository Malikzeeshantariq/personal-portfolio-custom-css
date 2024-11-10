import Link from 'next/link'
import React from 'react'
import "../style/header.css";

function Header (){
  return (
    <div className= "header">
      <div>
        <h1 className="logo">Zeeshan Tariq</h1>
      </div>
      <div className="header-right-div">
        <ul className="header-links">
            <li>
                <Link className="nav-links" href={"/"}>Home</Link>
                </li>
            <li>
                <Link className="nav-links" href={"/about"}>About</Link>
                </li>
            <li>
                <Link className="nav-links" href={"/projects"}>Projects</Link>
                </li>
            <li>
                <Link className="nav-links" href={"/contact"}>Contact Us</Link>
                </li>
            </ul>
        </div>
      </div>
  )
}

export default Header
