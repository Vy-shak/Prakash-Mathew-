import React from 'react'
import { motion } from 'motion/react'

interface DotsProps {
  dotNum: number; 
}

function Dots({ dotNum }: DotsProps ) {
  const dots=[1,2,3]
  return (
    <div className='w-full h-fit flex gap-x-4 justify-center items-center   '>
      {dots.map((item,index)=>(
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: [10, 0] }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`w-3 h-3 sm:w-4 sm:h-4 sm:rounded rounded-xs ${item=== dotNum? 'bg-red-500' : 'bg-gray-500'}`}
        />
      ))}
    </div>
  )
}

export default Dots
