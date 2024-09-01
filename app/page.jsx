import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'

// component main area
import Social from "@/components/Social"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1">
              Hai Aku <br /> <span className="text-blue-500">Aditya Prasetyo</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Aku unggul dalam menciptakan pengalaman digital yang elegan dan aku mahir dalam beberapa bahasa pemrograman dan teknologi
            </p>
            {/* button and sosial media */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-5" iconStyles="w-9 h-9 border border-blue-500 rounded-lg flex justify-center items-center text-white text-base hover:bg-blue-500 hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home