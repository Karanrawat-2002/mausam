import React from 'react'
import Forecast from "./left/forecast"
export default function leftContent() {
  return (
    <div className='leftContent rounded-2xl backdrop-blur-md bg-pink-300/30 '>
      <Forecast/>
    </div>
  )
}
