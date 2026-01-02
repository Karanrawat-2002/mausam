import React from 'react'
import {Link} from "react-router-dom"
export default function about() {
  return (
    <div className="about">
      <div className='  text-white/50 aboutme h-[100%]'>
      <div className='comman'>
        <div className='flex text-3xl mb-auto'>
            <h1 className='display-block text-white text-shadow-lg/100'>World </h1>
            <h1 className='display-block bg-gradient-to-r from-pink-500   to-yellow-500 bg-clip-text text-transparent'>Mausam</h1>
        </div>
            <p>About Our Weather App
                Staying informed about the weather should be simple, accurate, and visually engaging. Our Weather App is designed to give you more than just forecasts—it’s your personal companion for planning each day with confidence. Whether you’re heading to work, preparing for a trip, or simply curious about the skies above, our app delivers real‑time updates and beautifully presented data right at your fingertips.
                At its core, the app combines cutting‑edge weather technology with a user‑friendly interface. You’ll receive precise forecasts powered by trusted meteorological sources, ensuring that temperature, humidity, wind speed, and precipitation details are always reliable. Beyond the basics, the app provides extended forecasts, severe weather alerts, and sunrise/sunset times so you can anticipate changes well in advance.
                We know that clarity matters.
            </p>
        </div>
        <div className='aboutImage'>
          <img style={{width:"15rem", opacity:"0.8"}} src='../public/Karan.png' alt='mainImage'/>
          <h1 className='text-3xl display-block bg-gradient-to-r from-orange-500  to-pink-500 bg-clip-text text-transparent'>Karan Rawat</h1>
        </div>
       
          <div className='comman'>
            <p><b>Karan Rawat</b> is a full-stack web explorer with a knack for turning technical chaos into clean, functional beauty.
                Whether,he brings persistence, precision, and a splash of humor to every line of code. 
                He learned technologies including MEARN-Stack, Javascript, css, html, Bootstrap, MaterialUi, git and github
                He is pursuing his bachelor's in Computer Application from Dewan Institute of Management
                He Used to do sketching, painting and gaming.
              </p>
           </div>
          <div className='connect'>
                <a className='connect' href='https://www.linkedin.com/in/karan-rawat-32b33a353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                   <i className='fa-brands fa-linkedin-in'></i>
                </a>
                <a className='connect' href='https://www.instagram.com/karanrawat2002/'>
                   <i className='fa-brands fa-instagram' id='insta'></i>
                </a>
                <a className='connect' href='https://t.me/Karanrawat2002/'>
                   <i className='fa-brands fa-telegram'></i>
                </a>
           </div>
        </div>
    </div>
  )
}
