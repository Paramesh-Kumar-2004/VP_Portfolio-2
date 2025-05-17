import React from 'react'
import "../../Styles/Projects.css"



function Projects_Component({ ProjectName = "Name None", Project_ID = "None", Description = "Summary None" }) {
    return (
        <div id='Projects_Component_Main'>
            <div id={Project_ID}></div>
            <div id='Project_Summary'>
                {Description}
            </div>
            <div>{ProjectName}</div>
        </div>
    )
}

export default Projects_Component


