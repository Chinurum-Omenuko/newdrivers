import './Banner.css'
import BtnMain from '../../../components/Buttons/BtnMain'

function Banner() {
    return (
    <div class="banner">
        <div class="wrapper banner-wrapper">
            <div className='items'>
                <h3>View Our Courses and Pricing</h3>
                <BtnMain text="Pricing" />
            </div>
        </div>
    </div>
    );
}

export default Banner;