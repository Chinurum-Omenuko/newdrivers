import './Mobilenav.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import logo from '../../../assets/logo/logo.svg'

import { useState } from 'react';




function Mobilenav() {
    const [isClicked, showDrawer] = useState(false)
    
    return ( 
    <div className="mnav">
        <div className="logo-container flex flex-row items-center">
            <img src={logo} alt="" />
            <h3>New Drivers</h3>
        </div>
        <GiHamburgerMenu className='hamburger' size={30}/>

    </div> 
    );
}

export default Mobilenav;