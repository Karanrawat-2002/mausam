import React from 'react'
import Simptoms from "./simptoms"
export default function simptom(props) {
  return (
    <div className='mainSimptom'>
       <Simptoms simp="Visibility" qty={props.visibility} unit="m" src="/visibility.png"/>
       <Simptoms simp="Wind_speed" qty={props.wind_speed} unit="m/s" src="/windSpeed.png"/>
       <Simptoms simp="Humidity" qty={props.humidity} unit="%" src="/humidity.png"/>
       <Simptoms simp="pressure" qty={props.pressure} unit="hPa" src="/pressure.png"/>
       <Simptoms simp="Feels like" qty={props.feels_like} unit="C" src="/feels.png"/>
    </div>
  )
}
