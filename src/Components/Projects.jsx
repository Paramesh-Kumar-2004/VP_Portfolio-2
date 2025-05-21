import React from 'react'
import Projects_Component from './Projects/Projects_Component'
import "../Styles/Projects.css"



function Projects() {
  return (
    <div id='Main_Project_Div'>
      <h1 id='Title'>Projects</h1>
      <div id='Projects_List'>

        <Projects_Component ProjectName='OTA' ID_Name='OTA'
          Description='OTA (Over-The-Air) Is Used To Sending The Software Updates Through Wireless. Completed At Expleo'
          Project_Domain='Full Stack Development'
          Project_Link='https://www.google.com'
        />

        <Projects_Component ProjectName='SIL Automation' ID_Name='SIL_Automation'
          Description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequatur consequuntur ex deserunt aut.'
          Project_Domain='Frontend Development'
          Project_Link='https://www.google.com'
        />

        <Projects_Component ProjectName='Pyro Patrol' ID_Name='Pyro_Patrol'
          Description='The Pyro Patrol Is A Autonomous Fire Detecting And Extungushing Robot.'
          Project_Domain='IOT'
          Project_Link='https://www.google.com'
        />

        <Projects_Component ProjectName='Brain Friendly' ID_Name='Brain_Friendly'
          Description='Brain Friendly Is A E-Learning Website Using VR'
          Project_Domain='Frontend Development'
          Project_Link='https://www.google.com'
        />

        <Projects_Component ProjectName='Text Based Game' ID_Name='Text_Based_Game'
          Description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequatur consequuntur ex deserunt aut.'
          Project_Domain='Python Development'
          Project_Link='https://www.google.com'
        />

        <Projects_Component ProjectName='Simple AI Voice Assistant' ID_Name='AI_Voice_Assistant'
          Description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequatur consequuntur ex deserunt aut.'
          Project_Domain='Python Development'
          Project_Link='https://www.google.com'
        />

      </div>
    </div>
  )
}

export default Projects