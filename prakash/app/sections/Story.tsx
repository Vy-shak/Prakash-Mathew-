"use client"
import React from 'react'
import Image from 'next/image'
import { Breakup } from '@/public/export'
import { Disk } from '@/public/export'
import { useState } from 'react'
import {motion} from 'motion/react'
import {ChevronDown,ChevronUp } from "lucide-react"


function Story() {
    const [showMore, setShowMore] = useState(false)

    return (
        <section id='story' className='w-full pt-8 flex-col  flex justify-center items-center    '>
            <div className='w-fit flex flex-col justify-center items-center '>
                <motion.span initial={{ opacity: 0,y:-20 }} transition={ {duration: 1,}}   whileInView={{ opacity: 1,y:[10,0] } } className='text-4xl'>HOW BREAKUP CHANGED MY LIFE</motion.span>
                <div className='w-full flex justify-end items-center'>
                    <motion.span  initial={{ opacity: 0,x:-20 }} transition={ {duration: 1,delay:1.5}} whileInView={{ opacity: 1,x:[10,0] } } >-Prakash mathew</motion.span>
                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center mt-4'>
                <Image className='w-full hover:scale-105 hover:shadow-md shadow-red-900 rounded transition-all duration-300 ease-in-out max-w-2xl object-cover' alt='story' src={Breakup} />
                <div className='w-full gap-x-2 pt-4 flex  justify-center items-center'>
                    <Image className='w-10' alt='image' src={Disk} />
                    <span className='text-2xl '>{"She left. Purpose didn't."}</span>
                </div>
                <p className='font-normal max-w-lg text-sm text-neutral-200 mt-3 nirmala-ui text-center'>{"Life doesn’t come with warnings. One moment you're steady, the next you're shattered. A breakup feels like the world collapsing — but it also gives you a choice. It can destroy you, or it can become the fuel that builds a stronger version of yourself. I chose the second."}    </p>
                {showMore&&<motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}} className='font-normal max-w-lg text-sm text-neutral-200 mt-3 nirmala-ui text-center'>{"I still remember standing on those college stages, mic in hand, voice trembling, but heart full. Back then, the spotlight was small, the audience smaller — but the dream was loud. Every late-night rehearsal, every moment I thought I wasn’t enough, built me for something bigger. Step by step, stage by stage, what once felt distant became real. And somehow, singing to a crowd that didn’t know my name felt just as sacred as when the whole world started listening."}</motion.p>}
                {showMore&&<motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:1}} className='font-normal max-w-lg text-sm text-neutral-200 mt-3 nirmala-ui text-center'>{"It’s strange how growth hides in the quietest places — in the nights you cry alone, in the mornings you still get up, in the small wins no one sees. Even when I tripped over the tiniest things, I learned. I healed. I got better. Because sometimes it’s not the grand gestures, but the quiet persistence that changes your life."}  </motion.p>}
                    </div>
            <button onClick={() => setShowMore(!showMore)} className='mt-4 px-4 cursor-pointer hover:bg-red-800 font-medium text-xs py-2 bg-red-700 text-white rounded-lg nirmala-ui'>{showMore?<div className='w-fit flex justify-center items-center'>
                <ChevronDown className='text-xs gap-x-1 font-medium' size={18}/>
                 <span>Show</span>
            </div>:<div className='w-fit gap-x-1 flex justify-center items-center'>
                <ChevronUp size={18} />
                 <span className='text-xs font-medium'>Close</span>
            </div>}</button>
        </section>
    )
}

export default Story
