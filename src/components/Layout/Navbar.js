import React, { useState, useEffect } from 'react';
import Link from '../LocalizedLink';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

function Navbar() {
    const { t } = useTranslation();
    const [click, setClick] = useState(false);
    const[button,setButton] = useState(true);

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

const showButton = () => {
    setButton(window.innerWidth > 960);
};

useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
}, []);

useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}, []);

    return (
        <>
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
                    <div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                {t('nav.home')}
                            </Link>
                        </li>

                        <li className='nav-item justify-center'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                {t('nav.projects')}
                            </Link>
                        </li>

                        <li className='nav-item justify-center'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                {t('nav.services')}
                            </Link>
                        </li>
{                   button &&      <li className='nav-item flex flex-col justify-center'>
                            <Link to='/contact-me' className='nav-links contact-me-border' onClick={closeMobileMenu}>
                            {t('nav.sayHello')}&nbsp;<span>👋</span>
                            </Link>
                        </li>}
                        <li className='h-[80px]'>
                        <Link to='/contact-me' className='nav-links-mobile ' onClick={closeMobileMenu}
                        >
                            {t('nav.sayHello')}&nbsp;<span>👋</span>
                          </Link>
            </li>
                        <li className='nav-item flex items-center justify-center'>
                            <LanguageSwitcher onSelect={closeMobileMenu} />
                        </li>
                    </ul>
                    </div>
                    {/* {button && <Button buttonStyle='btn--outline'>Download CV/Resume</Button>} */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;