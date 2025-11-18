import Footer from "./Footer";
import contactimage from '../assets/images/contact.png';
function Contact() {
    return (
        <>
            <section className="contact-section" id="contact">
                <div className="contianer">
                    <div className="row">
                        <h2 className="section-title">Get In Touch</h2>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5">
                            <div className="contact-info"> 
                                
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="contact-item">
                                        <div className="contact-icon">📧</div>
                                        <div className="contact-details">
                                            <h4>Email</h4>
                                            <p> sharmilachandrancs@gmail.com </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="contact-item">
                                        <div className="contact-icon">📞</div>
                                        <div className="contact-details">
                                            <h4>Phone Number</h4>
                                            <p> +91 7530072112 </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="contact-item">
                                        <div className="contact-icon">📍</div>
                                        <div className="contact-details">
                                            <h4>Location</h4>
                                            <p> Vellore </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5  d-flex justify-content-center">
                            <img src={contactimage} className="contact-image img-fluid"/>
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </>
    );
}

export default Contact;
