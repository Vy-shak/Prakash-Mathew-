import React from 'react'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import { SquareArrowOutUpLeft, X } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

interface sideBarprops {
    setSidebar: Dispatch<SetStateAction<boolean>>
}

const elements = [
    { name: 'HOME', link: '/' },
    { name: 'STORY', link: '#story' },
    { name: 'CONTACT US', link: '#contact' },
]

function SidebarMobile({ setSidebar }: sideBarprops) {
    const router = useRouter()
    return (
        <motion.div 
            initial={{ y: 500, opacity: 0 }} // starts 500px below with 0 opacity
            animate={{ y: 0, opacity: 1 }}   // animates to natural position
            exit={{ y: 500, opacity: 0 }}    // optional: for exit animation
            transition={{ duration: 0.6, ease: "easeOut" }} // smooth transition
            className='w-full h-full cursor-pointer pt-12 px-4 fixed right-0 top-0 py-4 bg-neutral-800 flex flex-col gap-y-4 rounded justify-start items-start'
        >
            <div className='w-full flex justify-end items-center h-fit'>
                <X onClick={() => setSidebar(false)} />
            </div>
            <div className='flex w-full pt-4 gap-y-4 justify-start items-start border-t-2 border-neutral-200 flex-col'>
                            {elements.map((item, index) => (
                <motion.div
                    onClick={() => router.push(item.link)}
                    whileHover={{ rotate: 3 }}
                    key={index}
                    className='w-fit border-b-2 border-neutral-200 cursor-pointer h-fit flex gap-x-1 justify-start items-start'
                >
                    <SquareArrowOutUpLeft className='text-white hover:text-red-500 text-lg transition-transform duration-200 ease-in-out' />
                    <motion.span className='text-white hover:text-red-500 text-xl shrink-0'>
                        {item.name}
                    </motion.span>
                </motion.div>
            ))}
            </div>
        </motion.div>
    )
}

export default SidebarMobile
