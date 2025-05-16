import React from 'react'
import "../../Styles/Skills.css"



function Skills_Animation({ Level }) {
    return (

        <div class="social-circle">
            <span class="bubble layer1"></span>
            <span class="bubble layer2"></span>
            <span class="bubble layer3"></span>
            <p class="circle-text">{Level}</p>
        </div>

    )
}


export default Skills_Animation