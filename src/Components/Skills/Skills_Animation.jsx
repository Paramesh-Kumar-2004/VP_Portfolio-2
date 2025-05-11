import React from 'react'
import "../../Styles/Skills.css"



function Skills_Animation({ Percentage }) {
    return (
        <div className="Main_SkillAnimation">
            <div className="container">
                <span></span>
            </div>
            <p className="Percentage">{Percentage}</p>
        </div>
    )
}


export default Skills_Animation