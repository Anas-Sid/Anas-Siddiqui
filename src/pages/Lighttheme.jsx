
import Navbar from '../Light_theme_Component/Navbar';
import HeroSection from '../Light_theme_Component/HeroSection';
import IntroBanner from '../Light_theme_Component/IntroBanner';
import AboutMe from '../Light_theme_Component/AboutMe';
import Skills from '../Light_theme_Component/Skills';
import Portfolio from '../Light_theme_Component/Portfolio';
import Contact from '../Light_theme_Component/Contact';
import Footer from '../Light_theme_Component/Footer';
import ExperienceTimeline from "../Light_theme_Component/ExperienceTimeline";



function Lighttheme() {
  
  return (
    <>
      <Navbar />
      <HeroSection />
      <IntroBanner />
      <AboutMe />
      <ExperienceTimeline />
      <Skills />
      <Portfolio />
      <Footer />
      
    </>
  )
}

export default Lighttheme
