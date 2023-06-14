import Logo from "../Navitems/Logo"
import Navlist from "./Navlist";
import './stylesheets/RegNav.css'

function RegNav() {
    return ( 
        <div className="regnav">
            <Logo />
            <Navlist />
        </div>
     );
}

export default RegNav;