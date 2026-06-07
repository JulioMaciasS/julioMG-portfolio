import React from 'react';
import { useTranslation } from 'react-i18next';
import SeoHead from '../components/Seo/SeoHead';
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
    const { t } = useTranslation();
    return(
        <>
<SeoHead
    path="/contact-me"
    title={t('contact.meta.title')}
    description={t('contact.meta.description')}
    image="https://portfolio.juliodev.co.uk/og-image.png"
/>
<ContactMe/>
        </>
    );
}

export default ContactMePage;