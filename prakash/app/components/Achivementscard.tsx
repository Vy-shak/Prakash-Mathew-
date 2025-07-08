import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface AchivementscardProps {
    Disk: StaticImageData,
    title: string,
    subtitle: string,
    counts: string,
    Music: StaticImageData
}

export default function Achivementscard({ Disk, title, subtitle, counts, Music }: AchivementscardProps) {
    return (
        <div className='flex justify-center min-w-60 items-center bg-neutral-800 px-4 rounded-lg  gap-x-4'>
            <Image className='h-10 w-fit shrink-0 object-contain' alt='achievements' src={Disk} />
            <div className='w-full flex flex-col justify-center py-1  items-between  gap-x-4'>
                <div className='w-full flex justify-between items-center  gap-x-2'>
                    <span>{title}</span>
                    <span>{counts}</span>
                </div>
                <div className='w-full flex justify-between items-center  gap-x-2'>
                    <span className='text-sm text-neutral-400'>{subtitle}</span>
                    <Image className='w-6' alt='music' src={Music} />
                </div>
            </div>
        </div>
    )
}
