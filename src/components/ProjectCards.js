import React from 'react';
import "./ProjectCards.css";

function ProjectCards() {

    var reactIconLink = './images/logos/react.png';
    var HTMLIconLink = './images/logos/html.png';
    var JavaScriptIconLink = './images/logos/javascript.png';
    var CSSIconLink = './images/logos/css.png';
    var swiftIconLink = './images/logos/swift.png';
    var XcodeIconLink = './images/logos/Xcode.png';
    var swiftUIIconLink = './images/logos/swiftui.png';


    return (
        <div className='proj-cards-container'>
            <a className='proj-custom-link' href='https://juliotabj.wixsite.com/juliotechguides/post/how-to-create-a-minimalistic-app-with-ads-and-microtransactions-in-ios' target='_blank' rel="noopener noreferrer" id='first-card'>

                <div className='proj-card-container'>

                    <img className='proj-card-image' src='./images/img-project.jpg' alt='Project Card'></img>

                    <div className='proj-text-container'>

                        <h1>Universal Paperclips for iOS</h1>

                        <p>This article contains a guide explaining how I developed a reduced version of the game Universal Paperclips. Some of the key features presented in the app are Google Ads and Microtransactions.</p>

                        <p>Technologies involved:</p>

                        <div class="proj-skill-container">

                            <div class="proj-skill-item">
                                <img src={XcodeIconLink} alt="Xcode Icon" className="skill-icon" />
                                <p className="skill-text">Xcode</p>
                            </div>

                            <div class="proj-skill-item">
                                <img src={swiftIconLink} alt="swift Icon" className="skill-icon" />
                                <p className="skill-text">Swift</p>
                            </div>

                            <div class="proj-skill-item">
                                <img src={swiftUIIconLink} alt="swiftUI Icon" className="skill-icon" />
                                <p className="skill-text">SwiftUI</p>
                            </div>

                        </div>

                    </div>

                </div>
            </a>


                <div className='proj-card-container'>

                    <img className='proj-card-image' src='./images/q-mark-icon.jpeg' alt='Project Card'></img>

                    <div className='proj-text-container'>

                        <h1>More projects coming soon...</h1>

                        <p>Innovation awaits</p>

                        <div class="proj-skill-container">

                            <div class="proj-skill-item">
                                <img src='./images/q-mark-icon.jpeg' alt="" className="skill-icon" id='q-mark-icon'/>
                                <p className="skill-text">?</p>
                            </div>

                            <div class="proj-skill-item">
                                <img src='./images/q-mark-icon.jpeg' alt="" className="skill-icon" id='q-mark-icon'/>
                                <p className="skill-text">?</p>
                            </div>

                            <div class="proj-skill-item">
                                <img src='./images/q-mark-icon.jpeg' alt="" className="skill-icon" id='q-mark-icon'/>
                                <p className="skill-text">?</p>
                            </div>

                        </div>

                    </div>

                </div>

        </div>
    )
}

export default ProjectCards;
