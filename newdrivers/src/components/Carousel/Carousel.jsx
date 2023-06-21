import './Carousel.css'
import pic1 from '../../assets/images/pic1.jpg'
import pic2 from '../../assets/images/pic2.jpg'
import pic3 from '../../assets/images/pic3.jpg'
function Carousel() {
    return (
    <div className="main-container">
        <div id="carouselExampleFade" class="carousel slide carousel-fade">

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={pic1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={pic2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={pic3} class="d-block w-100" alt="..." />
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

        </div> 
    </div>
  );
}

export default Carousel;