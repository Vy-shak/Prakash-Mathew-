import React from 'react'
import { About1, About2 } from '@/public/export'
import Image from 'next/image'
import Testimonials from '../components/Testimonials'

function About() {
    return (
        <div className='w-full h-fit pt-6 sm:px-6 lg:px-12 flex flex-col sm:justify-start sm:items-start justify-center items-center'>
            <span className='text-4xl pt-4 text-neutral-200'>Meet praksh-mathew</span>
            <div className='w-full sm:gap-x-4 sm:flex-row pt-4 flex flex-col sm:justify-start sm:items-start justify-center items-center'>
                <Image className='w-60 lg:w-81 object-cover' src={About1} alt='About Image 1' />
                <div className='w-full flex flex-col justify-center sm:justify-start sm:items-start items-center'>
                    <span className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl pt-3'>Global sensation</span>
                    <p className='font-light max-w-md sm:text-start text-center'>From local vibes to global recognition, Prakash Mathew is not just a name — he's a movement. Bursting onto the scene with viral reels and an unforgettable presence, he's captured the attention of millions across Instagram, TikTok, and YouTube. What began as a trend has evolved into a cultural phenomenon, uniting fans through humor, music, and pure originality.</p>
                </div>
            </div>
            <Testimonials />
        </div>
    )
}
export default About
