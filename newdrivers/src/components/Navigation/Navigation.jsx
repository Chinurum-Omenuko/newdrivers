import Navbar from './Navbar/Navbar';
import Mobilenav from './Mobilenav/Mobilenav';
import './Navigation.css'
function Navigation() {
    return ( 
    <nav className="">
        <Navbar />
        <Mobilenav />
    </nav> 
    );
}

export default Navigation;