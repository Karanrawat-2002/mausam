import React from 'react'
import {Link} from "react-router-dom"
export default function navbar() {
  return (
    <div className='nav'>
        <Link to={"/"} className='text-shadow-lg/100'><i className="fa-solid fa-house"></i>Home</Link>
        <Link to={"/about"}className='text-shadow-lg/100'><i className="fa-solid fa-address-card"></i>About</Link>
    </div>
  )
}
