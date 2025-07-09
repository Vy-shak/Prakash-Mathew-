"use client"
import React, { useState } from 'react'
import {SquareArrowOutUpLeft }  from "lucide-react"
import { Burgermenu } from '@/public/export'
import Image from 'next/image'
import {motion} from "motion/react"
import  { useRouter } from 'next/navigation'
import SidebarMobile from './SidebarMobile'
import { AnimatePresence } from 'motion/react'


const elements = [
    {name: 'HOME', link: '/' },
    {name: 'STORY', link: '#story' },
    {name: 'CONTACT US', link: '#contact' },
]

function Navbar() {
  const router = useRouter();
  const [sideBar,setSidebar] = useState(false)
  return (
    <div className='w-screen h-16 px-6 z-50 fixed top-0 bg-neutral-900 flex justify-between items-center'>
      <span className='text-white text-3xl'>PRAKASH MATHEW</span>
      <div  className='w-fit sm:flex hidden gap-x-8 cursor-pointer h-fit'>
        {elements.map((item,index)=>(
            <motion.div onClick={() => router.push(item.link) } whileHover={{ rotate:3 }} key={index} className='w-fit cursor-pointer h-fit flex gap-x-1 justify-center items-center'>
                <SquareArrowOutUpLeft   className='text-white hover:text-red-500 text-lg transition-transform duration-200 ease-in-out' />
                <motion.span   className='text-white hover:text-red-500 text-xl shrink-0 '>{item.name}</motion.span>
            </motion.div>
        ))}
      </div>
      <Image onClick={()=>setSidebar(true)} className='flex w-6 sm:hidden' alt='burgermenu' src={Burgermenu} />
      <AnimatePresence>
        {sideBar&&<SidebarMobile setSidebar={setSidebar} />}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
