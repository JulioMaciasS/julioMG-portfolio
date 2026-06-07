import React, { useState, useEffect } from 'react';
import Link from '../LocalizedLink';
import { useTranslation } from 'react-i18next';
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

const showButton = () => {if(window.innerWidth <=960) {
    setButton(false)
} else {setButton(true)}
};

useEffect(() => {
    showButton()},[]
)
window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        JulioDev
                        <i class="fa-solid fa-microchip"/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
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
                        <li className='nav-item flex items-center justify-center'>
                            <LanguageSwitcher onSelect={closeMobileMenu} />
                        </li>
                        <li className='h-[80px]'>
                        <Link to='/contact-me' className='nav-links-mobile ' onClick={closeMobileMenu}
                        >
                            {t('nav.sayHello')}&nbsp;<span>👋</span>
                          </Link>
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