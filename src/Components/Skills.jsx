import React from 'react'
import Skills_Animation from './Skills/Skills_Animation'
import "../Styles/Skills.css"



function Skills() {
  return (
    <div id='Main_Skill_Div'>

      <h1>Skills</h1>

      <div id='Skills_Card'>

        <div className='Cards'>
          <Skills_Animation Level={"80%"} />
          <span><h3>Python</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"60%"} />
          <span><h3>Pytest & Selenium</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"80%"} />
          <span><h3>HTML & CSS</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"80%"} />
          <span><h3>React JS</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"80%"} />
          <span><h3>Node JS</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"80%"} />
          <span><h3>Express JS</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"70%"} />
          <span><h3>Github</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"60%"} />
          <span><h3>Docker</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"60%"} />
          <span><h3>MYSQL</h3></span>
        </div>

        <div className='Cards'>
          <Skills_Animation Level={"50%"} />
          <span><h3>Mongo DB</h3></span>
        </div>

      </div>

    </div>
  )
}

export default Skills
