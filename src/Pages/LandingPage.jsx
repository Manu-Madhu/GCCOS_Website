import Navbar from "../Components/Navbar"
import About from "../Sections/About"
import About2 from "../Sections/About2"
import Blogs from "../Sections/Blogs"
// import Directors from "../Sections/Directors"
import Footer from "../Sections/Footer"
import Gallery from "../Sections/Gallery"
import Hero from "../Sections/Hero"
import Management from "../Sections/Management"
import Testimonials from "../Sections/Testimonials"
import Walkthrough from "../Sections/Walkthrough"

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Walkthrough />
      <About />
      <About2 />
      <Gallery />
      <Management />
      <Blogs />
      <Testimonials />
      <Footer />
    </>
  )
}

export default LandingPage