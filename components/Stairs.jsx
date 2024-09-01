"use client";

import { motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index for staggred delay
const reverceIndex = (index) => {
  const totalSteps = 6; //number of steps
  return totalSteps - index - 1;
}


const Stairs = () => {
  return (
    <>
      {/* Render 6 motion divs, each representating a step of the stairs
        Each divs will  have the same animation definied  by the stairAnimation <object data="" type="" className=""></object>
        The delay for each div is calculated based on it's reversed index,
        creating a staggered effect with decreasing delay for each subsequents step.
      */}
      {[...Array(6)].map((_, index) => {
        return (
          
          <motion.div key={index} variants={stairAnimation} initial="initial"
          animate="animate" exit="exit" transition={{
            duration: 0.2,
            ease: "easeInOut",
            delay: reverceIndex(index) * 0.1
          }}
          className="h-full w-full bg-white relative"
          />
        )
      })}

    </>
  )
}

export default Stairs