import BandCta from "./components/BandCta"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Keys from "./components/Keys"
import Maps from "./components/Maps"
import Navbar from "./components/Navbar"
import Partenrs from "./components/Partenrs"
import ScrollToTopButton from "./components/ScrollToTopButton"
import Secteurs from "./components/Secteurs"
import Services from "./components/Services"
import Teams from "./components/Teams"
import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Partenrs />
      <Services />
      <Teams />
      <Keys />
      <Secteurs />
      <Maps />
      <BandCta />
      <Testimonials />
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default App