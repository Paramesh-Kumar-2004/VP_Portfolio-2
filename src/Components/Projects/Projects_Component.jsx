import React from 'react';
import "../../Styles/Projects.css";
import VP from "../../Images/VP.jpeg";

function Projects_Component({ ProjectName = "Name None", ID_Name = "None", Description = "Summary None", Project_Domain = "None", Project_Link = "#" }) {
    return (

        <div id='Main_Card'>
            <a href={Project_Link} className="card">
                <div className='img' id={ID_Name}></div>
                <div className="textBox">
                    <p className="text" id='Project_Title'>{ProjectName}</p>
                    <p className="text" id='Project_Description'>&#160;&#160;&#160;{Description}</p>
                    <p>{Project_Domain}</p>
                    <p>Click For Source Code</p>
                </div>
            </a>
            <h2>{ProjectName}</h2>
        </div>
    );
}

export default Projects_Component;
