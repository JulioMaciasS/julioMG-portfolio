import React from 'react';
import './SkillsCard.css';

function SkillsCard() {

    var reactIconLink = './images/logos/react.png';
    var HTMLIconLink = './images/logos/html.png';
    var JavaScriptIconLink = './images/logos/javascript.png';
    var CSSIconLink = './images/logos/css.png';
    var NodeJSIconLink = './images/logos/node.png';

    return (
        <div className='web-info-text-container-dark'>

            <p className='skill-text-title'>
                Website developed using the following technologies:
            </p>
            <div class="skill-container">
                <div class="skill-item">
                    <img src={reactIconLink} alt="React Icon" className="skill-icon" />
                    <p className="skill-text">React</p>
                </div>
                <div class="skill-item">
                    <img src={HTMLIconLink} alt="HTML Icon" className="skill-icon" />
                    <p className="skill-text">HTML</p>
                </div>
                <div class="skill-item">
                    <img src={JavaScriptIconLink} alt="JavaScript Icon" className="skill-icon" />
                    <p className="skill-text">JavaScript</p>
                </div>
                <div class="skill-item">
                    <img src={CSSIconLink} alt="CSS Icon" className="skill-icon" />
                    <p className="skill-text">CSS</p>
                </div>
                <div class="skill-item">
                    <img src={NodeJSIconLink} alt="NodeJS Icon" className="skill-icon" />
                    <p className="skill-text">NodeJS</p>
                </div>
            </div>
            
        </div>
    )
}
export default SkillsCard
