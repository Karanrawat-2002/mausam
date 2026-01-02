import React from 'react'

export default function location(props) {
  return (
    <div className='location text-white'>
        <div className=''>
            <div style={{display:"inline-block"}}>
               <p style={{ fontSize:"1.3rem"}}><b><i className="fa-solid fa-location-dot"></i>{props.name}</b></p>
               <p className='opacity-75' style={{ fontSize:"1rem"}}>{props.country}</p>
            </div>
        </div>
        <div>
            <div style={{display:"inline-block"}}>
               <p style={{ fontSize:"1.2rem"}}>{props.date}</p>
               <p className='opacity-75' style={{ fontSize:"1rem"}}>{props.time}</p>
            </div>
        </div>
    </div>
  )
}
