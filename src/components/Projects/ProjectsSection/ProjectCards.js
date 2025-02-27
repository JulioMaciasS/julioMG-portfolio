import React from 'react';
import "./ProjectCards.css";
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

function ProjectCards() {

    const BASE_URL = '/images/logos/';
    
    const ICONS = {
        react: `${BASE_URL}react.png`,
        html: `${BASE_URL}html.png`, 
        javascript: `${BASE_URL}javascript.png`,
        css: `${BASE_URL}css.png`,
        swift: `${BASE_URL}swift.png`,
        xcode: `${BASE_URL}Xcode.png`,
        swiftui: `${BASE_URL}swiftui.png`,
        typescript: `${BASE_URL}typescript.png`,
        angular: `${BASE_URL}angular-v18.png`,
        spring: `${BASE_URL}spring-boot.png`,
        mysql: `${BASE_URL}mysql.jpg`,
        aws: `${BASE_URL}aws.png`,
        amplify: `${BASE_URL}amplify.png`,
        brevo: `${BASE_URL}brevo.png`
    };
    
    const technologiesUniversalPaperclips = [
        { name: 'Xcode', icon: ICONS.xcode },
        { name: 'Swift', icon: ICONS.swift },
        { name: 'SwiftUI', icon: ICONS.swiftui }
    ];
    
    const technologiesCineShare = [
        { name: 'Angular', icon: ICONS.angular },
        { name: 'Spring', icon: ICONS.spring },
        { name: 'MySQL', icon: ICONS.mysql },
        { name: 'AWS', icon: ICONS.aws }
    ];
    
    const technologiesEugeniaBravo = [
        { name: 'React', icon: ICONS.react },
        { name: 'TypeScript', icon: ICONS.typescript },
        { name: 'AWS', icon: ICONS.aws },
        { name: 'Amplify', icon: ICONS.amplify },
        { name: 'Brevo', icon: ICONS.brevo }
    ];

    return (
        <div className='flex flex-col gap-10 proj-cards-container'>

                    <Link to="/projects/eugeniabravo">
<ProjectCard
      // link="./cineshare-post"
      imageSrc="./images/eugeniaBravoPost/EugeniaBravoIcon.png"
      title="Eugenia Bravo"
      description="Real world project. Blog Website and Landing Page for a lawyer."
      technologies={technologiesEugeniaBravo}
      padding={true}
      new={true}
    />
</Link>

          <Link to="/projects/cineshare">
<ProjectCard
      // link="./cineshare-post"
      imageSrc="./images/CineShare.png"
      title="CineShare"
      description="Learn more about CineShare's development. A social media to discover Amazing Movies and TV Shows!"
      technologies={technologiesCineShare}
    />
</Link>
         <ProjectCard
  link="https://juliotabj.wixsite.com/juliotechguides/post/how-to-create-a-minimalistic-app-with-ads-and-microtransactions-in-ios"
  imageSrc="./images/img-project.jpg"
  title="Universal Paperclips for iOS"
  description="This article contains a guide explaining how I developed a reduced version of the game Universal Paperclips. Some of the key features presented in the app are Google Ads and Microtransactions."
  technologies={technologiesUniversalPaperclips}
/>

{/* <ProjectCard
      link="#"
      imageSrc="./images/q-mark-icon.jpg"
      title="More projects coming soon..."
      description="Innovation awaits"
      technologies={technologiesFutureProjects}
    /> */}

        </div>
    )
}

export default ProjectCards;
