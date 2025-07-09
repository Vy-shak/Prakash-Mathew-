import React from 'react'
import { About1} from '@/public/export'
import Image from 'next/image'
import Testimonials from '../components/Testimonials'
import { motion } from 'motion/react'

function About() {
    return (
        <div className='w-full h-fit pt-6 sm:px-6 lg:px-12 flex flex-col sm:justify-start sm:items-start justify-center items-center'>
            <motion.span  className='text-4xl pt-4 text-neutral-200'><span>Meet</span> <motion.span initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 40}}
                transition={{ duration: 2, delay: 0.2 }} className='hover:text-red-600'>praksh-mathew</motion.span></motion.span>
            <div className='w-full sm:gap-x-4 sm:flex-row pt-4 flex flex-col sm:justify-start sm:items-start justify-center items-center'>
                <Image className='w-60 lg:w-81 object-cover' src={About1} alt='About Image 1' />
                <div className='w-full flex flex-col justify-center sm:justify-start sm:items-start items-center'>
                    <motion.span initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: [10, 0] }}
                        transition={{ duration: 0.5, delay: 0.3 }} className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl '><span>Global</span><motion.span initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: [10, 0] }}
                transition={{ duration: 2, delay: 0.2 }} className='hover:text-red-600'> sensation</motion.span></motion.span>
                    <motion.p initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: [10, 0] }}
                        transition={{ duration: 0.5, delay: 0.5 }} className='font-light text-sm max-w-md sm:text-start text-center nirmala-ui'>{"From local vibes to global recognition, Prakash Mathew is not just a name — he's a movement. Bursting onto the scene with viral reels and an unforgettable presence, he's captured the attention of millions across Instagram, TikTok, and YouTube. What began as a trend has evolved into a cultural phenomenon, uniting fans through humor, music, and pure originality."}</motion.p>
                </div>
            </div>
            <Testimonials />
        </div>
    )
}
export default About
