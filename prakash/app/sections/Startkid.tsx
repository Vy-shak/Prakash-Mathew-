import React from 'react'
import { motion } from 'motion/react'
import { Fame1, Fame2, Fame3 } from '@/public/export'
import Image from 'next/image'
import Dots from '../components/Dots'

function Startkid() {
  return (
    <motion.div
      className="w-full flex-col h-full pt-6 flex justify-center items-center z-50">
      <span className='text-6xl md:text-7xl lg:text-8xl'>STAR BOY</span>
      <div className='w-full flex-col gap-y-4 flex justify-center items-center'>
        <div className='w-fit flex pt-3 justify-center items-center'>
          <Image className='sm:w-40 xl:w-72 md:w-44  relative shrink-0 -right-4 lg:w-60 w-28' alt='fame1' src={Fame1} />
          <Image className='sm:w-40 xl:w-72 md:w-44  shrink-0 z-30 lg:w-60  w-28' alt='fame1' src={Fame2} />
          <Image className='sm:w-40 xl:w-72 md:w-44 shrink-0 relative lg:w-60 -left-4 w-28' alt='fame1' src={Fame3} />
        </div>
        <Dots />
      </div>
    </motion.div>
  )
}

export default Startkid
