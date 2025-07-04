import React from 'react'
import {motion} from "motion/react"

function Hero() {
  return (
    <div className="w-full h-screen rounded-xl overflow-hidden grid place-items-center ">
        {/* Video as background layer */}
        <div className="w-full h-full col-start-1 row-start-1">
          <video
            className="w-full h-full object-cover "
            src="/Herocut.mp4"
            muted
            loop
            autoPlay
          />
        </div>

        {/* Text on top of the video */}
        <motion.div initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0.6, 1, 0.2, 1, 0.5, 1, 0.3, 1,0], // more flickers
          }}
          transition={{
            delay: 3,
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.1, 0.2, 0.35, 0.45, 0.6, 0.7, 0.8, 0.9, 1],
          }}
          onAnimationStart={()=>{
            document.body.style.overflow="hidden"
          }}
                    onAnimationComplete={()=>{
            document.body.style.overflow="auto"
          }} className="w-fit text-center h-fit col-start-1 row-start-1 z-10">
          <span className="text-white  text-9xl font-bold ">
            PRAKSH MATHEW
          </span>
        </motion.div>
        <motion.div initial={{ opacity: 0 }}
          animate={{
            opacity: 1, // more flickers
          }}
          transition={{
            delay: 4,
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.1, 0.2, 0.35, 0.45, 0.6, 0.7, 0.8, 0.9, 1],
          }} className="w-fit h-fit text-center col-start-1 row-start-1 z-10">
          <span className="text-white text-9xl font-bold ">
            THE STAR BOY
          </span>
        </motion.div>
      </div>
  )
}

export default Hero
