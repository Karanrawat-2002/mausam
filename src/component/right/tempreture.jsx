import React from 'react'

export default function tempreture(props) {
  return (
    <div className='location'>
      <div className='tempData'>
          <h1 className='temp text-white'>{props.temp}&deg;C</h1>
          <p className='text-white '>{props.sky} sky</p>
          <p className='text-sm text-white opacity-75'>H : {props.high}&nbsp;&nbsp;L : {props.low}</p>
      </div>
      <div className='tempImg'>
           <span>{props.temp > 20.00 ? <img className='w-[6.5rem]' src='/sun.png' alt='sun'/> : <i className="fa-solid fa-snowflake text-8xl text-blue-400 "></i>}</span>
      </div>
    </div>
  )
}
