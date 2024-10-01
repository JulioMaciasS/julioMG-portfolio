import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const[button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

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
                        JulioTech
                        <i class="fa-solid fa-microchip"/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-me' className='nav-links' onClick={closeMobileMenu}>
                                About me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        {/* <li>
                        <a
               href='./Downloads/Resume-Julio-Macias-Gonzalez.pdf' download='Julio Macias Gonzalez - CV/Resume'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Download CV/Resume
              </a>
            </li> */}
                    </ul>
                    </div>
                    {/* {button && <Button buttonStyle='btn--outline'>Download CV/Resume</Button>} */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;