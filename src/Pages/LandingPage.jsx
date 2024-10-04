import Navbar from "../Components/Navbar"
import About from "../Sections/About"
import Hero from "../Sections/Hero"
import Walkthrough from "../Sections/Walkthrough"

const LandingPage = () => {
  return (
    <>
        <Navbar />
        <Hero/>
        <Walkthrough/>
        <About/>
    </>
  )
}

export default LandingPage