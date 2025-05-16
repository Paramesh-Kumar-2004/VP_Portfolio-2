import React from 'react';
import "../../Styles/Skills.css";



function Skills_Animation({ Level, IdName }) {
    return (
        <div className='Cards'>
            <div id={IdName} className='Circle'>
                <span className="bubble layer1"></span>
                <span className="bubble layer2"></span>
                <span className="bubble layer3"></span>
                <p className="circle-text">{Level}</p>
            </div>
        </div>
    );
}

export default Skills_Animation;




