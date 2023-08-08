import React,{useEffect} from "react";
import "./footer.css";
import video2 from "../../assets/video2.mp4";
import { FiSend, FiChevronRight } from "react-icons/fi";
import "./Footer.scss";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Footer() {
   useEffect(() => {
    Aos.init({duration: 2000})
  })
  
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} muted autoPlay loop type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv ">
          <div className="text">
            <small>Keep in Touch</small>
            <h1>Travel with us</h1>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email" />
            <button className="btn flex" type="submit">
              Send <FiSend />
            </button>
          </div>

          <div data-aos="fade-up" className="contactsDiv flex">
            <div className="services">
              <h3>OUR AGENCY</h3>
              <ul >
                <li>
                  <FiChevronRight />
                  Servive
                </li>
                <li>
                  <FiChevronRight />
                  Agency
                </li>
                <li>
                  <FiChevronRight />
                  Tourism
                </li>
                <li>
                  <FiChevronRight />
                  Payment
                </li>
              </ul>
            </div>

            <div className="services">
              <h3>PARTNERS</h3>
              <ul>
                <li>
                  <FiChevronRight />
                  Booking
                </li>
                <li>
                  <FiChevronRight />
                  Rentcars
                </li>
                <li>
                  <FiChevronRight />
                  Hostels
                </li>
                <li>
                  <FiChevronRight />
                  Trivago
                </li>
              </ul>
            </div>
            <div className="services">
              <h3>LAST MINUTS</h3>
              <ul>
                <li>
                  <FiChevronRight />
                  Albania
                </li>
                <li>
                  <FiChevronRight />
                  Turkay
                </li>
                <li>
                  <FiChevronRight />
                  Germany
                </li>
                
                <li>
                  <FiChevronRight />
                  Italy
                </li>
                
              </ul>
            </div>
            
          </div>
          <h3 className="copyright">© Copyright Travelweb.</h3>
        </div>
      </div>
    </section>
  );
}
