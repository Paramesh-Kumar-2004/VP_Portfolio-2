import React from 'react'


import "../Styles/Experience.css"



function Experience() {
    const experienceData = [
        {
            id: 1,
            projectname: "OTA - Over The Air",
            position: 'Full Stack Developer Intern',
            company: 'Expleo Technologies',
            duration: 'Oct 2024 - Apr 2025',
            description: 'Developed frontend and backend features for client projects using React.js, Node.js, and MongoDB.',
        },
        {
            id: 2,
            position: 'Python Developer Intern',
            company: 'ABC Web Solutions',
            duration: 'Jun 2023 - Sep 2024',
            description: 'Built responsive websites for various clients, optimized for performance and SEO.',
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

