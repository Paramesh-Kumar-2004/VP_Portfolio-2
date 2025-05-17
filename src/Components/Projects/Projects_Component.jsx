import React from 'react'
import "../../Styles/Projects.css"



function Projects_Component({ ProjectName = "Name None", Project_ID = "None", Description = "Summary None" }) {
    return (
        <div id='Projects_Cards'>
            <div id='Project_IMG'>Project IMG</div>
            <div id='Project_Name'>Name : {ProjectName}</div>
        </div>
    )
}

export default Projects_Component


