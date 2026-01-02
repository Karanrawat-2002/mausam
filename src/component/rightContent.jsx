import React from 'react'
import Location from "./right/location.jsx"
import Temperature from "./right/tempreture.jsx"
import Simptom from "./right/simptom.jsx"
import SunRise from "./right/sunSetRise.jsx"


export default function rightContent(props) {
  const location={
    name:props.name,
    country:props.country,
    date:props.date,
    time:props.time
  }

  const sunrise={
    sunrise:props.sunrise,
    sunset:props.sunset
  }
  const temp={
    temp:props.temp,
    sky:props.sky,
    high:props.high,
    low:props.low
  }
  const symptoms={
    pressure:props.pressure,
    humidity:props.humidity,
    feels_like:props.feels_like,
    wind_speed:props.wind_speed,
    visibility:props.visibility
  }
  return (
    <div className='rightContent rounded-2xl backdrop-blur-md bg-pink-300/30'>
      
      <Location {...location}/>
      <Temperature {...temp}/>
      <Simptom {...symptoms}/>
      <SunRise {...sunrise}/>
    </div>
  )
}
