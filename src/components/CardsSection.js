import React from 'react';
import "./CardsSection.css";
import LinkCard from './LinkCard';

export default function CardsSection() {

  return (
    <div className='container-background'>
      <h1>Discover more about my projects!</h1>
    <div className='cards-container'>
    <LinkCard
 imageURL='./images/CineShare.png'
 title='CineShare, Discover Amazing Movies and TV Shows!'   
 hrefLink="./cineshare-post"
 >
        </LinkCard>
        <LinkCard
 imageURL='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F266471.jpg&f=1&nofb=1&ipt=75fd924b0422de25c055ab764e6ccc63217e25b775ee810a4399ecd625ac856a&ipo=images'
 title='JulioTech Guides'   
 hrefLink='https://juliotabj.wixsite.com/juliotechguides'    
 >
        </LinkCard>
        <LinkCard
 imageURL='./images/covers/microt-cover-img.png'
 title='How to implement iOS microtransactions for beginners'   
 hrefLink='https://juliotabj.wixsite.com/juliotechguides/post/how-to-implement-ios-microtransactions-for-beginners'    
 >
        </LinkCard>
        <LinkCard
 imageURL='https://static.wixstatic.com/media/49c0f2_b2b5bcb82f2b4fdb800252bb2c02a552~mv2.png/v1/fill/w_1351,h_845,al_c,q_90,enc_auto/49c0f2_b2b5bcb82f2b4fdb800252bb2c02a552~mv2.png'
 title='How to easily implement an AdMob banner ad'   
 hrefLink='https://juliotabj.wixsite.com/juliotechguides/post/how-to-implement-admob-ads-swiftui'    
 >
        </LinkCard>
    </div>
    </div>
  )
}
