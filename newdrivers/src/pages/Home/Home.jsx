import Carousel from '../../components/carousel/carousel';
import './Home.css'
function Home() {
    return ( 
    <div className="home-container border-solid border-gray-800 border">
        <section id="title">
            <p>Beginner Driver Education Course Provider</p>
            <strong><h2 className='lower'>Ministry Approved</h2></strong>
        </section>
        <Carousel />
    </div>
    );
}

export default Home;