import React from 'react'
import "./Styles/App.css"
import Header from './Components/Header'
import Home from './Components/Home'
import About from "./Components/About"
import Footer from "./Components/Footer"
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Contact from './Components/Contact'



function App() {
  return (
    <div id='App_Main'>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
