"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaLaravel, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area';

// Motion for animate
import { motion } from 'framer-motion';

// about data
const about = {
  title: 'About Me',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas dolor dolorem nobis voluptas maxime magnam.',

  info: [
    {
      fieldName: "Name",
      fieldValue: "Aditya Prasetyo"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 895-7043-45664"
    },
    {
      fieldName: "Experience",
      fieldValue: "3 Years"
    },
    {
      fieldName: "Discord",
      fieldValue: "Adityaw..."
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian"
    },
    {
      fieldName: "Email",
      fieldValue: "adityaww257@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Unavailable"
    },
    {
      fieldName: "Languages",
      fieldValue: "Indonesia, English"
    },
  ]


}

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas dolor dolorem nobis voluptas maxime magnam.',

  items: [
    {
      university: "PBL SiPangan",
      position: "Front-End Developer",
      duration: "Summer 2024",
    },
    {
      university: "PBL SiJuTem",
      position: "Front-End Developer",
      duration: "Winter 2023",
    }
  ]
}

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'Aku pernah menempuh pendidikan dibeberapa sekolah, mulai dari SD, SMP dan SMA.',

  item: [
    {
      institution: "Ketapang State Polytechnic",
      degree: "Student",
      duration: "2023 - Present",
    },
    {
      institution: "SMA Negeri 3 Ketapang",
      degree: "Student",
      duration: "2020 - 2023",
    },
    {
      institution: "MTs Negeri 1 Ketapang",
      degree: "Student",
      duration: "2016 - 2019",
    },
    {
      institution: "SD Negeri 10 Delta Pawan",
      degree: "Student",
      duration: "2011 - 2015",
    },
  ]
}

// skills data
const skills = {
  title: 'My skills',
  description: 'Aku menguasai beberapa bahasa pemrograman, juga menguasai dan memahami beberapa framework.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML 5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
    },
    {
      icon: <FaReact />,
      name: 'React.JS',
    },
    {
      icon: <FaLaravel />,
      name: 'Laravel',
    },
    {
      icon: <FaPhp />,
      name: 'PHP',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.JS',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind.CSS',
    },
  ]

}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1, transition: { delay: 2.4, duration: 0.2, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#29292c] h-[184px] py-7 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-blue-500">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dots */}
                            <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                            <p className="text-white/60">{item.university}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.item.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#29292c] h-[184px] py-7 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-blue-500">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dots */}
                            <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cold-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skills, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-blue-500 transition-all duration-300">{skills.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skills.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About me */}
            <TabsContent value="about" className="w-full">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return(
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

// SAMPAI DI 2 JAM 55 MENIT 6 DETIK

export default Resume