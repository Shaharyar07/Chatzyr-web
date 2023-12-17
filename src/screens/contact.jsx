import React, { useEffect } from 'react';
import './contact.css'; // Import your CSS for styling
import { FaPhone, FaEnvelope, FaMapMarker, FaBiohazard, FaReact, FaAdversal, FaModx } from 'react-icons/fa'; // Import icons
import ScrollToTopButton from '../components/ScrollTop';

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top left of the page
    }, []);
    return (
        // <div className='container'>      
        <div className="contact-container">
            <header className='headerStyle'>
                <h1 className='headingStyle'>Contact Us</h1>
            </header>
            <br />
            <br />
          
                <p className="text">
                    <strong>For top-tier website and app development, don't hesitate to reach out to us. Our team of professionals is here to bring your business vision to life. Contact us today to embark on your journey of innovative solutions!</strong>
                </p>
            
            <div className="contact-info">
                <div className="contact-item">
                    <FaPhone className="icon" />
                    <p className="text">Phone: +13474671050<br />+923330688630 </p>
                </div>
                <div className="contact-item">
                    <FaEnvelope className="icon" />
                    <p className="text">Email: chatzyr@gmail.com</p>
                </div>
                <div className="contact-item">
                    <FaModx className="icon" />
                    <p className="text">Report Email: Report.chatzyr@gmail.com</p>
                </div>
                <div className="contact-item">
                    <FaMapMarker className="icon" />
                    <p className="text">47 , ST 47 SECTOR  G , ISB</p>
                </div>


            </div>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
        // </div>

    );
};

export default ContactUs;
