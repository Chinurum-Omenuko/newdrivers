import './stylesheets/Navbar.css'
import Burger from '../../assets/images/burger.svg'
import { useState } from 'react';

function Navbar() {
    return(
    <>
        <nav class="flex flex-row justify-between container-fluid">
            <div class="logo">
                <a href="./index.html">Chinurum Omenuko</a>
            </div>
            
            <div className="hamburger-icon show">
                <img src={Burger} alt="" srcset="" />
            </div>
        </nav>
        

    </>
    );
}

export default Navbar