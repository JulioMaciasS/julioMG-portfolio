import React from 'react';
import '../App.css';
import ContactMe from '../components/ContactMe/ContactMe';

/*
Some of the sections to include are:
- About me
- Skills (maybe a grid with icons of all the technologies that I consider myself proficient)
- Brief education explanation
- Brief work experience explanation
- Suggestion to download CV if more info is desired
*/
function ContactMePage () { 
    return(
        <>
<ContactMe/>
        </>
    );
}

export default ContactMePage;