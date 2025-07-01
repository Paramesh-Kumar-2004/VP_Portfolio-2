import React from 'react'
import "../Styles/Header.css"


function Header() {
  return (
    <div id="Main_Header_Div">
      <nav id='nav'>
        <h2 id='name'>Paramesh Kumar S </h2>
        <ul id='links'>
          <li id="Menu">#</li>
          <li className='lists'><a href="#Main_Home_Div">Home</a></li>
          <li className='lists'><a href="#Main_About_Div">About</a></li>
          <li className='lists'><a href="#Main_Skill_Div">Skills</a></li>
          <li className='lists'><a href="#Main_Project_Div">Projects</a></li>
          <li className='lists'><a href="#Main_Experience_Div">Experience</a></li>
          <li className='lists'><a href="#Main_Contact_Div">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
