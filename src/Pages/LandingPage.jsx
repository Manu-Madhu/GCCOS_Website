import Navbar from "../Components/Navbar"
import About from "../Sections/About"
import About2 from "../Sections/About2"
import Hero from "../Sections/Hero"
import Walkthrough from "../Sections/Walkthrough"

const LandingPage = () => {
  return (
    <>
        <Navbar />
        <Hero/>
        <Walkthrough/>
        <About/>
        <About2/>
    </>
  )
}

export default LandingPage