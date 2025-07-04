import React from 'react'
import { HeroImage } from '@/public/export'
import Image from 'next/image'
import { useRef } from 'react'
import { useScroll,motion,useTransform  } from 'motion/react'

function Startkid() {
    const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // When the element enters/exits the viewport
  });

  // Map scroll progress [0 → 1] to movement [0 → -600px]
  const y = useTransform(scrollYProgress, [0, 1], [0,-1000]);
  return (
    <motion.div
          ref={ref}
      style={{ y}}
  className="w-screen h-screen sm:px-20 px-4">
      <Image className='w-screen h-screen rounded-xl object-cover z-20' alt='heroimage' src={HeroImage} />
    </motion.div>
  )
}

export default Startkid
