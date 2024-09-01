"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    number: '01',
    category: 'FrontEnd',
    title: 'Project 1',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum eos, debitis earum magnam voluptate consequatur!',

    stack: [
      {name: 'React.JS'},
      {name: 'Tailwind.CSS'},
    ],

    image: './assets/work/thumb1.png',
    live: "",
    github: '',
  },
  {
    number: '02',
    category: 'FrontEnd',
    title: 'Project 2',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum eos, debitis earum magnam voluptate consequatur!',

    stack: [
      {name: 'HTML 5'},
      {name: 'CSS 3'},
      {name: 'JavaScript'},
    ],

    image: './assets/work/thumb2.png',
    live: "",
    github: '',
  },
  {
    number: '03',
    category: 'FullStack',
    title: 'Project 3',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum eos, debitis earum magnam voluptate consequatur!',

    stack: [
      {name: 'Laravel'},
      {name: 'Tailwind.CSS'},
      {name: 'React.JS'},
    ],

    image: './assets/work/thumb3.png',
    live: "",
    github: '',
  },
  {
    number: '04',
    category: 'FullStack',
    title: 'Project 4',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum eos, debitis earum magnam voluptate consequatur!',

    stack: [
      {name: 'Flutter'},
      {name: 'Dart'},
      {name: 'Firebase'},
    ],

    image: './assets/work/thumb4.jpeg',
    live: "",
    github: '',
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current  slide index
    const currentIndex = swiper.activeIndex;
    // update project stated based on  current slide index
    setProject(projects[currentIndex]);
  }
  return (
    <motion.div
    initial={{opacity: 0,}}
    animate={{opacity: 1, transition: {delay: 2.4, duration: 0.2, ease: "easeIn"}}}
    className="min-h-[80vh] flex flex-col justify-center p y-12 xl:px0"
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* outline */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.number}
              </div>
              {/* project-category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-500 transition-all duration-500 capitalize">{project.category} Project</h2>
              {/* project desc */}
              <p className='text-white/60'>{project.description}</p>
              {/* stack project */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-blue-500 text-xl">
                      {item.name}
                      {/* for remove last coma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex flex-row items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-lg bg-white flex justify-center items-center group">
                        <BsArrowUpRight className="text-primary text-3xl"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Priview</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-lg bg-white flex justify-center items-center group">
                        <BsGithub className="text-primary text-3xl"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30} 
            slidesPerView={1} 
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt=""/>
                    </div>
                    
                    </div>
                  </SwiperSlide>
                )
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-blue-500 rounded-lg hover:bg-blue-600 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work
