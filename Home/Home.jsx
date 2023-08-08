import React,{useEffect} from "react";
import "./Home.scss";
import { FiMapPin } from "react-icons/fi";
import video1 from "../../assets/video1.mp4";
import {BiSolidFilterAlt,BiLogoFacebookSquare,BiLogoInstagram,BiLogoLinkedinSquare} from "react-icons/bi"
import {FaListUl,FaAppStore} from "react-icons/fa"
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    Aos.init({duration: 2000})
  })
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video1} muted autoPlay loop type="video/mp4"></video>
      <div data-aos="fade-up" className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-right" className="smallText">Our Package</span>
          <h1 data-aos="fade-up">Search you Holiday</h1>
        </div>
        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search you Destinatios</label>
            <div className="input flex">
              <input type="text" placeholder="Enter a place" />
              <FiMapPin color="black" className="icon" size={20}/>
            </div>
          </div>
          <div className="datenInput">
            <label htmlFor="date">Select your date</label>
            <div className="input flex">
              <input type="date" placeholder="Enter a place" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h1 className="total"> 5000$</h1>
            </div>
            <div className="input flex">
              <input type="range" name="" id="" />
            </div>
          </div>

          {/* Filter */}
          <div className="filter">
          <BiSolidFilterAlt size={20}/>
          <span> SEARCH MORE</span>
          </div>
        </div>

        <div className="homeFooterIcon flex">
          <div data-aos="fade-up" className="rightIcon icon">
        <BiLogoFacebookSquare size={35} color="skyblue"/>
         <BiLogoInstagram size={35} color="orange" />
        <BiLogoLinkedinSquare size={35} color="skyblue"/>
          </div>
          <div data-aos="fade-up" className="leftIcon">
            <FaListUl size={35}/>
         <FaAppStore size={35} color="skyblue" />
          </div>
        </div>
      </div>
    </section>
  );
}
