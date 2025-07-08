"use client"
import React from 'react'
import { easeOut, motion } from 'motion/react'
import { Fame1, Fame2, Fame3 } from '@/public/export'
import Image from 'next/image'
import Dots from '../components/Dots'
import { useState } from 'react'
import { delay } from 'motion'

function Startkid() {
  const [count,setCount] = useState<number>(0)
  return (
    <motion.div
      className="w-full flex-col h-full pt-6 flex justify-center items-center z-50">
      <motion.span  initial={{ opacity: 0,y:-20 }} transition={ {duration: 2,delay:1}}   whileInView={{ opacity: 1,y:[10,0] } } className='text-6xl md:text-7xl lg:text-8xl'>STAR BOY</motion.span>
      <div className='w-full flex-col gap-y-4 flex justify-center items-center'>
        <div className='w-fit flex pt-3 justify-center items-center'>
          <Image onMouseEnter={()=>setCount((prev)=>1)} className='sm:w-40 hover:scale-110 hover:rotate-12 cursor-pointer transition-all duration-300 xl:w-72 md:w-44  relative shrink-0 -right-4 lg:w-60 w-28' alt='fame1' src={Fame1} />
          <Image onMouseEnter={()=>setCount((prev)=>2)} className='sm:w-40 hover:scale-110  cursor-pointer transition-all duration-300 xl:w-72 md:w-44  shrink-0 z-30 lg:w-60  w-28' alt='fame1' src={Fame2} />
          <Image onMouseEnter={()=>setCount((prev)=>3)} className='sm:w-40 hover:scale-110 hover:rotate-12 cursor-pointer transition-all duration-300 xl:w-72 md:w-44 shrink-0 relative lg:w-60 -left-4 w-28' alt='fame1' src={Fame3} />
        </div>
        <Dots dotNum={count} />
      </div>
    </motion.div>
  )
}

export default Startkid
