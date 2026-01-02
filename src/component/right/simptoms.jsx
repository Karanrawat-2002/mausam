import React from 'react'

export default function simptoms(props) {
  return (
    <div className='simptoms bg-blue-500/30  flex justify-start items-center'>
        <div>
          <img className='w-[2rem]' src={props.src} alt='##'/>
        </div>
        <div style={{marginInlineStart:"0.5rem"}}>
          <p className='text-sm text-white opacity-75' >{props.simp}</p>
          <p className='text-xl text-white'>{props.qty+props.unit}</p>
        </div>  
    </div>
  )
}
