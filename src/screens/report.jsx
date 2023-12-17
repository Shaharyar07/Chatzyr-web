import React, { useEffect, useState } from 'react';
import ScrollToTopButton from '../components/ScrollTop';
import '../components/loader.css'; // Import the loader CSS
import Loader from '../components/loader';
import './reportstyles.css'
function Report() {


    const [loading, setLoading] = useState(true); // State to control loading display

    useEffect(() => {
      // Simulate loading delay (you can replace this with your actual data fetching logic)
      setTimeout(() => {
        setLoading(false); // Hide the loader after the loading is done
      }, 2000); // Adjust the delay as needed
    }, []);
    
    const googleFormUrl =
        'https://docs.google.com/forms/d/e/1FAIpQLSfECEXxhCqR1-qTa0BA9wBhZBn0-IhKYi3kE-qC5jcEw8zwcw/viewform?embedded=true'; // Replace with your Google Form URL

    const [iframeHeight, setIframeHeight] = useState('auto');

    // useEffect(() => {
    //     const updateIframeHeight = () => {
    //         const windowHeight = window.innerHeight;
    //         const headerHeight = document.querySelector('header').offsetHeight;
    //         const newIframeHeight = windowHeight - headerHeight;
    //         setIframeHeight(newIframeHeight + 'px');
    //     };

    //     window.addEventListener('resize', updateIframeHeight);
    //     updateIframeHeight();

    //     return () => {
    //         window.removeEventListener('resize', updateIframeHeight);
    //     };
    // }, []);

    return (
        <div>
        {/* {loading ? ( // Conditionally render the loader
          <Loader></Loader>
        ) : ( */}
        <div className='containerStyle'>
            <header className='headerStyle'>
                <h1 className='headingStyle'>Report</h1>
            </header>
            <div className='contentContainerStyle'>
                <div className='iframeContainerStyle'>
                    <iframe
                        src={googleFormUrl}
                        height='100%'
                        title="Google Form"
                        className='iframeStyle'
                        scrolling="no"
                    >
                        Loading...
                    </iframe>
                </div>
                <div className='textContainerStyle'>
                    <h2 style={{ color: '#F51118' }}>Chatzyr Report</h2>
                    <p className=''>
                        At Chatzyr, we believe in fostering a friendly and respectful community. Your assistance is invaluable in maintaining a positive environment. You can support our moderation team by reporting any instances of inappropriate behavior by fellow users within the app or through the form below. If you prefer, you can also contact us via email at Support@chatzyr.net.

                        If you're passionate about ensuring a pleasant user experience, you may even consider joining our team of ChatZyr moderators. Apply today to become an integral part of our community.

                        We kindly ask you to familiarize yourself with ChatZyr's community guidelines before submitting a report. Together, we can create a safe and enjoyable space for everyone.
                    </p>

                </div>
            </div>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
        {/* )} */}
        </div>
    );
}

export default Report;
