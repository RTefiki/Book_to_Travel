import React,{ useEffect } from 'react'
import "./main.css"
import { dates } from '../date'
import {BiMap} from "react-icons/bi"
import {BsCalendar2Check} from "react-icons/bs"
import "./Main.scss"
import Aos from "aos";
import 'aos/dist/aos.css'



export default function Main() {
  useEffect(() => {
    Aos.init({duration: 2000})
  })
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-up" className="title">
          Most visited destination
        </h3>
      </div>

      <div data-aos="fade-up" className="secContend grid">
        {dates.map(({id, image, destination,location,grade,price, description,review_text,reviews,rating}) => {
          return (
            <div key={id} className='singleDestination'>
                 <div className=" imageDiv">
                  <img src={image} alt={destination}  />
                 </div>
                 <div className="cardInfo">
                    <span className="continent flex">
                       <h4 className="destTitle">{destination}</h4>
                       <span className='name'>{location}</span>
                       <BiMap size={25} />
                    </span>
                    <div className="prices flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>

                      <div className="price">
                        <h5>{price}</h5>
                      </div>

                      <div className='review'>
                        <p>{review_text}</p>
                        <span>{reviews} reviews</span>
                      </div>
                      <div data-aos="fade-up" className='rating'>{rating}</div>
                    </div>

                    <div d className="description">
                      <p>{description}</p>
                    </div>

                    <button  className='btn flex'>
                      <p> DETAILS </p>
                      <BsCalendar2Check size={20} />
                    
                    </button>
                 </div>
            </div>
          )
        }
   )}
      </div>

    </section>
  )
}
