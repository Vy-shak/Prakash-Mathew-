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
                <p className='font-normal max-w-lg text-sm text-neutral-200 mt-3 nirmala-ui text-center'>
  {"Life doesn’t come with warnings. One moment you’re steady, the next — everything falls apart. She chose her best friend over me. Not just for a season, but forever. It shattered me — but didn’t stop me."}
</p>
<p className='font-normal max-w-lg text-sm text-neutral-200 mt-3 nirmala-ui text-center'>
  {"That heartbreak could’ve ended my story. Instead, it rewrote it. I packed my bags, left behind the echoes of that goodbye, and moved to America — not to escape, but to rebuild."}
</p>
{showMore && (
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    className='font-normal max-w-lg text-sm text-neutral-200 mt-3 nirmala-ui text-center'
  >
    {"I still remember standing on those college stages — mic in hand, voice trembling, heart unsure. The spotlight was faint, the crowd even fainter — but the dream was loud. Every late-night rehearsal, every shaky note, every moment of doubt prepared me for something greater."}
  </motion.p>
)}
{showMore && (
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay: 1 }}
    className='font-normal max-w-lg text-sm text-neutral-200 mt-3 nirmala-ui text-center'
  >
    {"In America, I sang for people who didn’t know my story. But every song stitched a piece of me back together. I grew — quietly, painfully, beautifully. Not in applause, but in the mornings I didn’t give up. In the moments I kept going, even when no one was watching."}
  </motion.p>
)}
{showMore && (
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2.5, delay: 1.5 }}
    className='font-normal max-w-lg text-sm text-neutral-200 mt-3 nirmala-ui text-center'
  >
    {"It turns out, growth doesn’t always roar. Sometimes, it whispers through heartbreak. Through resilience. Through the quiet persistence of a heart that refuses to stop singing."}
  </motion.p>
)}
                    </div>
            <button onClick={() => setShowMore(!showMore)} className='mt-4 px-4 cursor-pointer hover:bg-red-800 font-medium text-xs py-2 bg-red-700 text-white rounded-lg nirmala-ui'>{showMore?<div className='w-fit flex justify-center items-center'>
                < ChevronUp className='text-xs gap-x-1 font-medium' size={18}/>
                 <span>Close</span>
            </div>:<div className='w-fit gap-x-1 flex justify-center items-center'>
                <ChevronDown size={18} />
                 <span className='text-xs font-medium'>Show</span>
            </div>}</button>
        </section>
    )
}

export default Story
