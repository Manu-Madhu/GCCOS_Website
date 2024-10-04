import Navbar from "../Components/Navbar"
import About from "../Sections/About"
import About2 from "../Sections/About2"
import Blogs from "../Sections/Blogs"
import Directors from "../Sections/Directors"
import Gallery from "../Sections/Gallery"
import Gallery_pics from "../Sections/Gallery_pics"
import Hero from "../Sections/Hero"
import Testimonials from "../Sections/Testimonials"
import Walkthrough from "../Sections/Walkthrough"

const LandingPage = () => {
  return (
    <>
        <Navbar />
        <Hero/>
        <Walkthrough/>
        <About/>
        <About2/>
        <Gallery/>
        <Gallery_pics/>
        <Directors/>
        <Blogs/>
        <Testimonials/>
    </>
  )
}

export default LandingPage