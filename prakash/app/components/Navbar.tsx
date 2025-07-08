import React, { useState } from 'react'
import {SquareArrowOutUpLeft }  from "lucide-react"
import { Burgermenu } from '@/public/export'
import Image from 'next/image'
import {easeInOut, motion} from "motion/react"


const elements = [
    'UPCOMING','GALLARY','CONTACT US'
]

function Navbar() {
  return (
    <div className='w-screen h-16 px-6 z-50 fixed top-0 bg-neutral-900 flex justify-between items-center'>
      <span className='text-white text-3xl'>PRAKASH MATHEW</span>
      <div  className='w-fit sm:flex hidden gap-x-8 cursor-pointer h-fit'>
        {elements.map((item,index)=>(
            <motion.div whileHover={{ rotate:3 }} key={index} className='w-fit cursor-pointer h-fit flex gap-x-1 justify-center items-center'>
                <SquareArrowOutUpLeft   className='text-white text-lg transition-transform duration-200 ease-in-out' />
                <motion.span   className='text-white text-xl shrink-0 '>{item}</motion.span>
            </motion.div>
        ))}
      </div>
      <Image className='flex w-6 sm:hidden' alt='burgermenu' src={Burgermenu} />
    </div>
  )
}

export default Navbar
