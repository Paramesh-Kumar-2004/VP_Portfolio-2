// import React from 'react'


// import "../Styles/Experience.css"



// function Experience() {
//     return (
//         <div id='Main_Experience_Div'>
//             <div>
//                 <h1 id='Title'>Experience</h1>

//                 <div className="Experience_Cards">
//                     <div className="Experience_Card">
//                         <div>
//                             <h4>6 Months</h4>
//                             <h5>Expleo Groups</h5>
//                             <h5>Bangalore</h5>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="Experience_Cards">
//                     <div className="Experience_Card"></div>
//                 </div>


//             </div>
//         </div>
//     )
// }

// export default Experience














import React from 'react';
import "../Styles/Experience.css"


function Experience() {

    const experienceData = [
        {
            id: 1,
            position: 'Full Stack Developer Intern',
            company: 'Expleo Technologies',
            duration: 'Oct 2024 - Apr 2025',
            description: 'Developed frontend and backend features for client projects using React.js, Node.js, and MongoDB.',
        },
        {
            id: 2,
            position: 'Web Developer',
            company: 'ABC Web Solutions',
            duration: 'Jun 2023 - Sep 2024',
            description: 'Built responsive websites for various clients, optimized for performance and SEO.',
        },
    ];

    return (
        <div className="experience-section">
            <h2>Experience</h2>
            {experienceData.map((experience) => (
                <div key={experience.id} className="experience-item">
                    <h3>{experience.position}</h3>
                    <p className="company">{experience.company}</p>
                    <p className="duration">{experience.duration}</p>
                    <p className="description">{experience.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Experience;
