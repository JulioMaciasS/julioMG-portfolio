'use client';

import React, { useState, useEffect } from 'react';
import Link from '../LocalizedLink';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { usePathname } from '../../i18n/navigation';
import './Navbar.css';

function Navbar() {
    const t = useTranslations();
    const pathname = usePathname();
    const [click, setClick] = useState(false);

    // Locale-agnostic path match for the current-page marker.
    const isActive = (to) => (to === '/' ? pathname === '/' : pathname.startsWith(to));
    const NAV_LINKS = [
        { to: '/', label: t('nav.home') },
        { to: '/services', label: t('nav.services') },
        { to: '/projects', label: t('nav.projects') },
        { to: '/contact-me', label: t('nav.contact') },
    ];

    const handleClick = () => {
        // Toggle menu state
        const newClickState = !click;
        setClick(newClickState);

        // Toggle body scroll
        if (newClickState) {
            // When menu opens, disable scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // When menu closes, enable scrolling
            document.body.style.overflow = 'auto';
        }
    };

    const closeMobileMenu = () => {
        setClick(false);
        // Re-enable scrolling when menu closes
        document.body.style.overflow = 'auto';
    };

        // Clean up function to ensure scroll is re-enabled if component unmounts
        useEffect(() => {
            return () => {
                document.body.style.overflow = 'auto';
            };
        }, []);

const [scrolled, setScrolled] = useState(false);

useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}, []);

    return (
        <>
            {/* Solid panel behind the transparent bar at the top of the page; it
                scrolls away so the bar transitions smoothly from solid to glass. */}
            <div className='navbar-top-backdrop' aria-hidden='true' />
            <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu} aria-label='Julio Macias, home'>
                        <svg className='navbar-logo-mark' viewBox='0 0 64 64' width='34' height='34' aria-hidden='true'>
                            <rect width='64' height='64' rx='15' fill='#2a2624' stroke='#4a423d' strokeWidth='1.5' />
                            <text x='32' y='44' textAnchor='middle' fontFamily="'Space Grotesk', sans-serif"
                                  fontSize='30' fontWeight='700' letterSpacing='0.5' fill='#ffffff'>JM</text>
                        </svg>
                        <span className='navbar-logo-text'>Julio Macias</span>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <X size={28} color='#fff' /> : <Menu size={28} color='#fff' />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {NAV_LINKS.map(({ to, label }) => (
                            <li key={to} className='nav-item'>
                                <Link
                                    to={to}
                                    className={`nav-links ${isActive(to) ? 'is-active' : ''}`}
                                    aria-current={isActive(to) ? 'page' : undefined}
                                    onClick={closeMobileMenu}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li className='nav-item nav-item--mobile'>
                            <LanguageSwitcher onSelect={closeMobileMenu} />
                        </li>
                        <li className='nav-item nav-item--mobile'>
                            <Link to='/contact-me#book-a-call' className='nav-links-mobile' onClick={closeMobileMenu}>
                                {t('contact.tabs.call')}
                            </Link>
                        </li>
                    </ul>
                    <div className='nav-actions'>
                        <LanguageSwitcher />
                        <Link to='/contact-me#book-a-call' className='nav-cta'>
                            {t('contact.tabs.call')}
                        </Link>
                    </div>
                    {/* {button && <Button buttonStyle='btn--outline'>Download CV/Resume</Button>} */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
