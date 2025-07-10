import React from 'react'
import { Footer } from '@/public/export'
import Image from 'next/image'
import { Youtube, Instagram } from '@/public/export'
import Link from 'next/link'

function FooterSec() {
    return (
        <div  id='contact' className='w-full flex-col mt-10 h-fit gap-y-4 sm:flex-row sm:gap-x-4 px-10 flex justify-center items-center pt-4 pb-2 bg-red-700'>
            <div className='flex flex-col justify-center items-center sm:justify-start sm:items-start gap-y-2'>
                <span>#Original content</span>
                <div className='flex justify-start items-center gap-x-2'>
                    <Image className='w-6' alt='youtube' src={Youtube} />
                    <Link href={"https://www.youtube.com/@sixeightmusic"} className='w-fit px-6 bg-white flex justify-center items-center rounded-full h-6'>
                        <span className='text-neutral-800 text-sm'>sixeightmusic</span>
                    </Link>
                </div>
                <div className='flex justify-start items-center gap-x-2 '>
                    <Image className='w-6' alt='instagram' src={Instagram} />
                    <Link href={"https://www.instagram.com/sixeight_official"} className='w-fit px-6 bg-white flex justify-center items-center rounded-full h-6'>
                        <span className='text-neutral-800 text-sm'>sixeight_official</span>
                    </Link>
                </div>
            </div>
            <div className='flex justify-center flex-col w-full items-center'>
                <Image className='w-60 sm:w-72 md:w-81 object-cover' alt='footer' src={Footer} />
                <span className='text-xl'>DISCLAIMER</span>
                <p className='text-neutral-200 text-xs max-w-lg nirmala-ui  text-md text-center'>This website is inspired by and developed based on the creative work of SixEight. All images used in this project are credited to their original creators, and I do not claim ownership over them. This was created as a personal hobby project, purely for educational and creative exploration.</p>
            </div>
            <div className='flex flex-col justify-center items-center  gap-y-2'>
                <span className='whitespace-nowrap'>Designed & developed by</span>
                                    <Link href={"https://yshak.vercel.app/"} className='w-fit px-6 bg-white flex justify-center items-center rounded-full h-6'>
                        <span className='text-neutral-800 text-sm'>yshak</span>
                    </Link>
            </div>
        </div>
    )
}

export default FooterSec
