import React from 'react';
import "./ProjectCards.css";
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

function ProjectCards() {

    var reactIconLink = './images/logos/react.png';
    var HTMLIconLink = './images/logos/html.png';
    var JavaScriptIconLink = './images/logos/javascript.png';
    var CSSIconLink = './images/logos/css.png';
    var swiftIconLink = './images/logos/swift.png';
    var XcodeIconLink = './images/logos/Xcode.png';
    var swiftUIIconLink = './images/logos/swiftui.png';

    const technologiesUniversalPaperclips = [
        { name: 'Xcode', icon: XcodeIconLink, },
        { name: 'Swift', icon: swiftIconLink},
        { name: 'SwiftUI', icon: swiftUIIconLink },
      ];
      
      const technologiesFutureProjects = [
        { name: '?', icon: './images/q-mark-icon.jpeg' },
        { name: '?', icon: './images/q-mark-icon.jpeg' },
        { name: '?', icon: './images/q-mark-icon.jpeg' },
        ];

        const technologiesCineShare = [
            { name: 'React', icon: reactIconLink },
            { name: 'HTML', icon: HTMLIconLink },
            { name: 'CSS', icon: CSSIconLink },
            { name: 'JavaScript', icon: JavaScriptIconLink },
          ];

    return (
        <div className='flex flex-col gap-10 proj-cards-container'>
          <Link to="/cineshare-post">
<ProjectCard
      // link="./cineshare-post"
      imageSrc="./images/CineShare.png"
      title="CineShare"
      description="Learn more about CineShare's development. A social media to discover Amazing Movies and TV Shows!"
      technologies={technologiesCineShare}
      new= {true}
    />
</Link>
         <ProjectCard
  link="https://juliotabj.wixsite.com/juliotechguides/post/how-to-create-a-minimalistic-app-with-ads-and-microtransactions-in-ios"
  imageSrc="./images/img-project.jpg"
  title="Universal Paperclips for iOS"
  description="This article contains a guide explaining how I developed a reduced version of the game Universal Paperclips. Some of the key features presented in the app are Google Ads and Microtransactions."
  technologies={technologiesUniversalPaperclips}
/>


<ProjectCard
      link="#"
      imageSrc="./images/q-mark-icon.jpeg"
      title="More projects coming soon..."
      description="Innovation awaits"
      technologies={technologiesFutureProjects}
    />

        </div>
    )
}

export default ProjectCards;
