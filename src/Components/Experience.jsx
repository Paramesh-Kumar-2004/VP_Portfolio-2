import React from 'react'

import "../Styles/Experience.css"



function Experience() {
    const experienceData = [
        {
            id: 1,
            projectname: "OTA - Over The Air",
            position: 'Full Stack Developer Intern',
            company: 'Expleo Technologies',
            duration: 'Oct 2024 - May 2025',
            description: 'Developed frontend and backend features for client projects using React.js, Node.js, and MongoDB.',
        },
        {
            id: 2,
            projectname: "Text-Based Adventure Game",
            position: 'Python Developer Intern',
            company: 'NovaNectar Services Pvt. Ltd.',
            duration: ' August 10, 2024 to September 10, 2024',
            description: `Developed an interactive text-based adventure game using Python. Implemented core game mechanics: player progression, score/ life tracking, and weapon collection. Applied object - oriented programming and random event generation to enhance gameplay. Focused on user - driven decision loops to encourage strategic thinking.`
        },
    ];
    return (
        <div id='Main_Experience_Div'>
            <div>
                <h1 id='Title'>Experience</h1>

                {experienceData.map((experience) => (
                    <div key={experience.id} className="experience-item">
                        <h3>{experience.position}</h3>
                        <p className="company">{experience.company}</p>
                        <p className='projectname'><b>Project : </b> {experience.projectname}</p>
                        <p className="duration">{experience.duration}</p>
                        <p className="description">{experience.description}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Experience
