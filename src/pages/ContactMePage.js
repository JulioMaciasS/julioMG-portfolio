import React from 'react';
import { Helmet } from 'react-helmet-async';
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
<Helmet>
    <title>Contact Me | JulioDev Portfolio</title>
    <meta name="description" content="Get in touch with Julio Macias Gonzalez. Contact form for software engineering enquiries and collaboration opportunities." />
    <link rel="canonical" href="https://portfolio.juliodev.co.uk/contact-me" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://portfolio.juliodev.co.uk/contact-me" />
    <meta property="og:title" content="Contact Me | JulioDev Portfolio" />
    <meta property="og:description" content="Get in touch with Julio Macias Gonzalez. Contact form for software engineering enquiries and collaboration opportunities." />
    <meta property="og:image" content="https://portfolio.juliodev.co.uk/og-image.png" />
    <meta name="twitter:card" content="summary_large_image" />
</Helmet>
<ContactMe/>
        </>
    );
}

export default ContactMePage;