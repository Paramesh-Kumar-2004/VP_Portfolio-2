import React from 'react'
import Skills_Animation from './Skills/Skills_Animation'
import "../Styles/Skills.css"



function Skills() {
  return (
    <div id='Main_Skill_Div'>
      <div className='Skill_Card'>
        <Skills_Animation Percentage={126} />
        <h1 className='Skill_Name'>Python</h1>
      </div>
    </div>
  )
}

export default Skills

