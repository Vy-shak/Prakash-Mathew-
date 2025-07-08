import React from 'react'

function Dots() {
  return (
    <div className='w-full h-fit flex gap-x-4 justify-center items-center   '>
      <div className='w-3 h-3 sm:w-4 gap-x-5 sm:h-4 bg-neutral-500 rounded-xs'>
      </div>
      <div className='w-3 h-3 sm:w-4 sm:h-4 gap-x-5  bg-neutral-500 rounded-xs'>
      </div>
      <div className='w-3 h-3 sm:w-4 sm:h-4  gap-x-5    bg-neutral-500 rounded-xs'>
      </div>
    </div>
  )
}

export default Dots
