import Navlist from './Navlist';
import Logo from '../Navitems/Logo';
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react';



function MobileNav() {
    return (
        <nav className="flex flex-row justify-between content-center">
            <Logo className="logo" />
            <GiHamburgerMenu className='hamburger'/>
            <Navlist />
        </nav> 
    );
}
 
export default MobileNav;