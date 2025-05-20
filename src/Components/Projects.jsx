import React from 'react'
import Projects_Component from './Projects/Projects_Component'
import "../Styles/Projects.css"



function Projects() {
  return (
    <div id='Main_Project_Div'>
      <h1 id='Title'>Projects</h1>
      <div id='Projects_List'>
        <Projects_Component ProjectName='OTA' ID_Name='OTA' Description='Over The Air' />
        {/* <Projects_Component ProjectName='OTA' Project_ID='OTA' Description='Over The Air' />
        <Projects_Component ProjectName='OTA' Project_ID='OTA' Description='Over The Air' />
        <Projects_Component ProjectName='OTA' Project_ID='OTA' Description='Over The Air' />
        <Projects_Component ProjectName='OTA' Project_ID='OTA' Description='Over The Air' />
        <Projects_Component ProjectName='OTA' Project_ID='OTA' Description='Over The Air' /> */}
        {/* <Projects_Component ProjectName='OTA' Project_ID='OTA' Description='Over The Air' /> */}
      </div>
    </div>
  )
}

export default Projects