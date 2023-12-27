import React from 'react';
import '../../App.css';
import MyProfile from '../MyProfile';
import Footer from '../Footer'

/*
Some of the sections to include are:
- About me
- Skills (maybe a grid with icons of all the technologies that I consider myself proficient)
- Brief education explanation
- Brief work experience explanation
- Suggestion do download CV if more info is desired
*/
function Aboutme () { 
    return(
        <>
<MyProfile/>
<Footer/>
        </>
    );
}

export default Aboutme;