import Carousel from '../../components/carousel/carousel';
import './Home.css'
function Home() {
    return ( 
    <div className="home-container">
        <div className="banner">
            <h1>New Drivers</h1>
            <h1 className='lower'>Driving School</h1>
        </div>
        <Carousel />
    </div>
    );
}

export default Home;