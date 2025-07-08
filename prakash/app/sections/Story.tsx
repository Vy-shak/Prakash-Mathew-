import React from 'react'
import Image from 'next/image'
import { Breakup } from '@/public/export'
import { Disk } from '@/public/export'

function Story() {
    return (
        <section className='w-full pt-8 flex-col  flex justify-center items-center    '>
            <div className='w-fit flex flex-col justify-center items-center '>
                <span className='text-4xl'>HOW BREAKUP CHANGED MY LIFE</span>
                <div className='w-full flex justify-end items-center'>
                    <span>-Prakash mathew</span>
                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center mt-4'>
                <Image className='w-full max-w-2xl object-cover' alt='story' src={Breakup} />
                <div className='w-full gap-x-2 pt-4 flex  justify-center items-center'>
                    <Image className='w-10' alt='image' src={Disk} />
                    <span className='text-2xl '>She left.Purpose didn't</span>
                </div>
                <p className='font-normal max-w-lg text-sm text-neutral-200 mt-3 nirmala-ui text-center'>It was the final year of college. Sona’s laughter still echoed in the corridors. We shared songs, secrets, and… maybe something deeper. But life had other plans. Our dreams diverged, and so did we.</p>
            </div>
            <button className='mt-4 px-4 cursor-pointer hover:bg-red-800 py-2 bg-red-700 text-white rounded nirmala-ui'>Read More</button>
        </section>
    )
}

export default Story
