import {RxHamburgerMenu} from 'react-icons/rx'
import Navitems from '../Navitems/Navitems';

function BSN() {
    const burger = <RxHamburgerMenu />
    return (
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark">
            <div class="container">
                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
                    <burger class="navbar-toggler-icon" />
                </button>
                <div class="collapse navbar-collapse" id="n_bar">
                    <Navitems />
                </div>
            </div>
        </nav>
    </div>
    );
}

export default BSN;