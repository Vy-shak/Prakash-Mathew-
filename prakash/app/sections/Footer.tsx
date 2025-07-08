import React from 'react'
import { Footer } from '@/public/export'
import Image from 'next/image'
import { Youtube, Instagram } from '@/public/export'

function FooterSec() {
    return (
        <div className='w-full flex-col mt-10 h-fit gap-y-4 sm:flex-row sm:gap-x-4 px-10 flex justify-center items-center pt-4 pb-2 bg-red-700'>
            <div className='flex flex-col justify-center items-center gap-y-2'>
                <div className='flex justify-start items-center gap-x-2'>
                    <Image className='w-6' alt='youtube' src={Youtube} />
                    <div className='w-40 bg-white rounded-full h-6'></div>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <Image className='w-6' alt='instagram' src={Instagram} />
                    <div className='w-40  bg-white rounded-full h-6'></div>
                </div>
            </div>
            <Image className='w-60 sm:w-72 md:w-81 object-cover' alt='footer' src={Footer} />
            <div className='flex flex-col justify-center items-center gap-y-2'>
                <div className='flex justify-start items-center gap-x-2'>
                    <Image className='w-6' alt='youtube' src={Youtube} />
                    <div className='w-40 bg-white rounded-full h-6'></div>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <Image className='w-6' alt='instagram' src={Instagram} />
                    <div className='w-40 bg-white rounded-full h-6'></div>
                </div>
            </div>
        </div>
    )
}

export default FooterSec
