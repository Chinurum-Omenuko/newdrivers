import './Mobilenav.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import traffic from '../../../assets/logo/traffic.svg'

function Mobilenav() {
    return ( 
    <div className="mnav">
        <div className="logo-container flex flex-row items-center">
            <img src={traffic} alt="" className="border border-solid border-red-50"/>
            <h3>New Drivers</h3>
        </div>
        <GiHamburgerMenu className='hamburger' size={30}/>
    </div> 
    );
}

export default Mobilenav;