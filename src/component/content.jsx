import React from 'react'
import RightContent from "./rightContent"
import LeftContent from "./leftContent.jsx"

export default function Content(data) {

 
  return (
    <div className='content h-150'>
        
        <RightContent {...data}/>
    </div>
  )
}
