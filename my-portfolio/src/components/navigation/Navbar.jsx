import './stylesheets/Navbar.css'
import RegNav from './Regnav';
import MobileNav from './MobileNav';

function Navbar() {
    return(
        <div>
            <RegNav className="regnav"/>
            <MobileNav classname="mobilenav"/>
        </div>
    );
}

export default Navbar