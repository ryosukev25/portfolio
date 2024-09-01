"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        {/* images */}
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2, duration: 0.2, ease: "easeIn"}}}>
            <motion.div 
            initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.2, ease: "easeIn"}}}
            
            className="w-[150px] h-[150px] xl:w-[350px] xl:h-[350px]">
                <Image src="../assets/adit2.jpg" priority quality={100} fill alt="" className="object-cover rounded-full"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Photo
