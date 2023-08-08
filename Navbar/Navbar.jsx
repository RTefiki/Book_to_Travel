import React,{useState} from "react";
import "./Navbar.scss";
import "./navbar.css";
import {MdTravelExplore} from "react-icons/md"
import {TbGridDots} from "react-icons/tb"
import {GrClose} from "react-icons/gr"



export default function Navbar() {

  const[menu, setMenu] = useState("navBar")

  const toggleMenu =() => {
    setMenu(prev => !prev)
  }
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1> <MdTravelExplore className="icon" /> Book to Travel</h1>
          </a>
        </div>
        <div className={`navBar ${menu ? "" : "activeNavbar"}`}>
          <ul className="navLists flex">
            <GrClose className="closeNavbar"  onClick={toggleMenu}/>
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>
            <button className="btn"><a href="#">BOOK NOW</a></button>
          </ul>
        </div>

        <div className="toggleNavbar" onClick={toggleMenu}>
          <TbGridDots className="icon" size={25} />
        </div>
      </header>
    </section>
  );
}
