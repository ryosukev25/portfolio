"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 1.5,
        text: "Tahun Pengalaman"
    },
    {
        num: 10,
        text: "Project Selesai"
    },
    {
        num: 7,
        text: "Teknologi Dikuasai"
    },
    {
        num: 280,
        text: "Kali Ngoding"
    },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-6 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                        <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-5xl font-extrabold"/>

                        <p className={`${item.text.length < 10 ? "max-w-[100px]" : "max-w-[150px]"}`}>{item.text}</p> 
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats