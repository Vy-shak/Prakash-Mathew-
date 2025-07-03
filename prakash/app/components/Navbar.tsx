import React from 'react'
import {SquareArrowOutUpLeft }  from "lucide-react"
import { Burgermenu } from '@/public/export'
import Image from 'next/image'


const elements = [
    'UPCOMING','GALLARY','CONTACT US'
]

function Navbar() {
  return (
    <div className='w-screen h-16 px-6 fixed top-0 bg-neutral-900 flex justify-between items-center'>
      <span className='text-white text-3xl'>PRAKASH MATHEW</span>
      <div className='w-fit sm:flex hidden gap-x-8 h-fit'>
        {elements.map((item,index)=>(
            <div key={index} className='w-fit h-fit flex gap-x-1 justify-center items-center'>
                <SquareArrowOutUpLeft className='text-white text-lg hover:scale-110' />
                <span className='text-white text-xl'>{item}</span>
            </div>
        ))}
      </div>
      <Image className='flex sm:hidden' alt='burgermenu' src={Burgermenu} />
    </div>
  )
}

export default Navbar
