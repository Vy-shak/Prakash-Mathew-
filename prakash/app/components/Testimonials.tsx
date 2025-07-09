import React from 'react'
import Image from 'next/image'
import { Testimonials1, Testimonials2, Testimonials3, Testimonials7, Testimonials4, Testimonials5, Testimonials6 } from '@/public/export'
import Marquee from 'react-fast-marquee'


const testimoni1 = [
    Testimonials1, Testimonials2, Testimonials3,Testimonials4, Testimonials5, Testimonials6, Testimonials7
]

function Testimonials() {
    return (
        <div className='flex w-full mt-8 gap-y-4 justify-center items-center sm:justify-start  sm:items-start flex-col'>
            <Marquee speed={5} direction='left' className='flex w-sm sm:justify-between justify-center items-center flex-col sm:flex-row  sm:items-start  h-fit '>
                {testimoni1.map((item, index) => (
                    <Image key={index} className='h-14 w-fit mr-1 shrink-0 object-contain' alt='testimonials' src={item} />
                ))}
            </Marquee>
            <Marquee speed={5} direction='right' className='flex w-sm sm:justify-start justify-center items-center flex-col sm:flex-row  sm:items-start  h-fit '>
                {testimoni1.map((item, index) => (
                    <Image key={index} className='h-14 w-fit mr-1 shrink-0 object-contain' alt='testimonials' src={item} />
                ))}
            </Marquee>
        </div>
    )
}

export default Testimonials
