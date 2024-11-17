// node modules

import { ReactLenis } from 'lenis/react'
// components

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Certif from "./components/Certif";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {

  return ( 
  <ReactLenis root>
  <Header />
    <main>
      <Hero />
      <About />
      <Skill />
      <Work />
      <Certif />
      <Contact />
    </main>
    <Footer />
    </ReactLenis>
  )

}

export default App;