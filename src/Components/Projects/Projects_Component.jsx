import React from 'react';
import "../../Styles/Projects.css";
import VP from "../../Images/VP.jpeg";



function Projects_Component({ ProjectName = "Name None", ID_Name = "None", Description = "Summary None" }) {
    return (

        <div id='Main_Card'>
            <div className="card"   >
                {/* <img className="img" src={VP} alt="Not" width={126} height={200} /> */}
                <div className='img' id={ID_Name}></div>
                <div className="textBox">
                    <p className="text head">{ProjectName}</p>
                    <p className="text price">{Description}</p>
                </div>
            </div>
        </div>
    );
}

export default Projects_Component;

