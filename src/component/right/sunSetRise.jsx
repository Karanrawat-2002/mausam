import React from 'react'

export default function sunSetRise(props) {
  return (
    <div className='mainsunset'>
      <div className='sunset text-white bg-gradient-to-r from-orange-500   to-yellow-400 '>
        
            <img className='w-[3rem] ' src='/sun.png' alt='sunrise'/>
            <p><b>Sunrise</b></p>
            <b>{props.sunrise}</b>
      </div>
        
      <div className='sunset text-white bg-gradient-to-r from-pink-400 to-purple-400 display-inline-block'>
        <img className='w-[3rem]' src='/sunset.png' alt='sunrise'/>
        <p><b>Sunset</b></p>
        <b>{props.sunset}</b>
      </div>
    </div>
  )
}
