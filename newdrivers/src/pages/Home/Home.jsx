import Welcome from './Welcome/Welcome'
import Banner from './Banner/Banner';
import Testimonial from './Testimonial/Testimonial'
import BtnMain from '../../components/Buttons/BtnMain';
import Footer from '../../components/Footer/Footer'
import './Home.css'
function Home() {
    return ( 
    <div className="home-container border-solid border-gray-800 border">
        <section id="title">
            <div className="hd wrapper">
                <h3>Beginner Driver <br />Education Course<br /> Provider</h3>
                <strong><h2 className='lower'>Ministry Approved</h2></strong>

                <BtnMain text='See Plans' />
            </div>
        </section>
        <Welcome />
        <Banner />
        <Testimonial />
        <Footer />
        
    </div>
    );
}

export default Home;