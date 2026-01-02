import React from 'react'

export default function Weather() {
  return (
    <div className='w-full mainhero'>
        <div className='hero  backdrop-blur-md rounded-2xl bg-white/20 '>
        <div className='flex text-4xl mb-auto'>
            <h1 className='display-block text-white text-shadow-lg/100'>World </h1>
            <h1 className='display-block bg-gradient-to-r from-pink-500   to-yellow-500 bg-clip-text text-transparent'>Mausam</h1>
        </div>
        <p className='text-white'>Stay ahead of the storm, sunshine, or drizzle.Weather made simple: clear, fast, and reliable.</p>
        </div>
    </div>
    
  )
}
