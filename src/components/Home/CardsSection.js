import React from 'react';
import "./CardsSection.css";
import LinkCard from './LinkCard';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { ArrowRight } from 'lucide-react';

export default function CardsSection() {
  return (
    <div className='container-background min-h-fit min-w-full flex flex-col items-center justify-center hero-section'>
      <h2>Discover my latest projects</h2>
      <div className='cards-container'>
        <LinkCard
          imageURL='./images/eugeniaBravoPost/EugeniaBravoIcon.png'
          title='Eugenia Bravo'
          description={'Real Blog full-stack website developed for a lawyer'}   
          hrefLink="./projects/eugeniabravo"
          padding={true}
        />
        <LinkCard
          imageURL='./images/CineShare.png'
          title='CineShare'
          description={'First full-stack cloud project'}   
          hrefLink="./projects/cineshare"
        />
        <LinkCard
          imageURL='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F266471.jpg&f=1&nofb=1&ipt=75fd924b0422de25c055ab764e6ccc63217e25b775ee810a4399ecd625ac856a&ipo=images'
          title='JulioTech Guides'   
          description={'iOS guides for begginers developed as a first year project'}
          hrefLink='https://juliotabj.wixsite.com/juliotechguides'    
        />
      </div>
      <Link to="/projects" className="mt-8 mb-8">
        <Button buttonStyle="btn--outline" buttonSize="btn--xlarge" buttonShape="btn--round">
          More Projects <ArrowRight/>
        </Button>
      </Link>
    </div>
  )
}