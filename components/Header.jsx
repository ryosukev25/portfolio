import Link from "next/link"
import { Button } from "./ui/button"

// COMPONENTS
import Navbar from "./Navbar"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
        <div className="container mx-auto flex justify-between items-center">
            {/* LOGO */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">Portfolio<span className="text-blue-500">.</span></h1>
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-8 ">
                <Navbar/>
                <Link href="/contact">
                    <Button>Hire Me</Button>
                </Link>
            </div>


            {/* mobile navigation */}
            <div className="xl:hidden">
                <MobileNav />
            </div>

        </div>
    </header>
  )
}

export default Header