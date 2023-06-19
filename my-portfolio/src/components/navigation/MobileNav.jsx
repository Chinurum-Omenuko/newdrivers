import Navlist from './Navlist';
import Logo from '../Navitems/Logo';
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react';
import HMenu from './HMenu.jsx'
import './stylesheets/MobileNav.css'

const [open,setOpen] = useState(false);




function MobileNav() {
    return (
        <nav className="flex flex-row justify-between content-center">
            <Logo className="logo" />
            <GiHamburgerMenu className='hamburger' onClick={() => setOpen(!open)}/>
            
        </nav> 
    );
}
 
export default MobileNav;