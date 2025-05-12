import React from 'react'
import "../../Styles/Skills.css"



function Skills_Animation({ Percentage }) {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <p class="title">FLIP CARD</p>
                    <p>Hover Me</p>
                </div>
                <div class="flip-card-back">
                    <p class="title">BACK</p>
                    <p>Leave Me</p>
                </div>
            </div>
        </div>
    )
}


export default Skills_Animation