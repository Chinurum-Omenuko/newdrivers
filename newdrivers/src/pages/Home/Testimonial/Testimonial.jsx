import './Testimonial.css'

function Testimonial() {
    return ( 
        <div className="testimonials">
            <div className="testimonial-heading">
                <div className="wrapper">
                    <h2>Testimonials</h2>
                </div>
                
            </div>
            <div className="Testimonial">
                <div className="wrapper">
                    <div>
                        <h2><b>Alexa Young</b></h2>
                    </div>
                    <div className='p-container'>
                        <p>"I had a fabulous experience with New driver driving school. I had the best instructor who was very committed and helped me drive confidently. I cleared my test on the first attempt. Would recommend the School to anyone for sure! "</p>
                    </div>
                </div>
            </div>

            <div className="Testimonial">
                <div className="wrapper">
                    <div>
                        <h2><b>Morgan James</b></h2>
                    </div>
                    <div className='p-container'>
                        <p>"I highly recommend this driving school to every person out there who is willing to obtain their license. They have helped to gained new driving strategies and techniques, driving with discipline that helps you to be a safe driver on the road in different traffic conditions. Instructors are always on time and the training for helping me obtain my car license."</p>
                    </div>
                </div>
            </div>
            <div className="Testimonial">
                <div className="wrapper">
                    <div>
                        <h2><b>Lisa Driver</b></h2>
                    </div>
                    <div className='p-container'>
                        <p>"The best for the driving lesson and test. All the instructors are very friendly and professionals. I passed my road test yesterday. They will teach you each and every steps of driving according to the road rules."</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Testimonial;