"use client"
import React from 'react'
import Image from 'next/image'
import { Breakup } from '@/public/export'
import { Disk } from '@/public/export'
import { useState } from 'react'
import {motion} from 'motion/react'

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
                <p className='font-normal max-w-lg text-sm text-neutral-200 mt-3 nirmala-ui text-center'>It was the final year of college. Sona’s laughter still echoed in the corridors. We shared songs, secrets, and… maybe something deeper. But life had other plans. Our dreams diverged, and so did we.</p>
                {showMore&&<motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}} className='font-normal max-w-lg text-sm text-neutral-200 mt-3 nirmala-ui text-center'>Months passed. I was lost, drowning in memories. But then, I found solace in purpose. I started writing, pouring my heart into words. Each line was a step towards healing.</motion.p>}
                {showMore&&<motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:1}} className='font-normal max-w-lg text-sm text-neutral-200 mt-3 nirmala-ui text-center'>Now, I’m here, sharing my journey. It’s not just about heartbreak; it’s about finding strength in vulnerability. Life moves on, and so do we.</motion.p>}

                    </div>
            <button onClick={() => setShowMore(!showMore)} className='mt-4 px-4 cursor-pointer hover:bg-red-800 font-medium text-xs py-2 bg-red-700 text-white rounded-lg nirmala-ui'>{showMore ? 'Close' : 'Read More'}</button>
        </section>
    )
}

export default Story
