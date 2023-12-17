import React, { useEffect, useState } from 'react';
import ScrollToTopButton from '../components/ScrollTop';
import './suggestStyles.css'
function Suggestion() {
  
    const googleFormUrl =
        'https://docs.google.com/forms/d/e/1FAIpQLSepDyePBs1fHEIJvRGh1QmzM7rudOyez8OdmmG5iXcJe0ws0g/viewform?embedded=true'; // Replace with your Google Form URL

    const [iframeHeight, setIframeHeight] = useState('auto');

    useEffect(() => {
        const updateIframeHeight = () => {
            const windowHeight = window.innerHeight;
            const headerHeight = document.querySelector('header').offsetHeight;
            const newIframeHeight = windowHeight - headerHeight;
            setIframeHeight(newIframeHeight + 'px');
        };

        window.addEventListener('resize', updateIframeHeight);
        updateIframeHeight();

        return () => {
            window.removeEventListener('resize', updateIframeHeight);
        };
    }, []);

    return (
        <div className='containerStyle'>
            <header className='headerStyle'>
                <h1 className='headingStyle'>Suggest</h1>
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
                    {/* <iframe src="" width="640" height="712" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                </div>
                <div className='textContainerStyle'>
                    <h2 style={{ color: '#F51118' }}>Chatzyr Suggestions</h2>
                    <p>
                        ChatZyr is a vibrant community-driven chat app. We thrive on your input and value your ideas. If you have a brilliant suggestion or a feature request that could elevate your ChatZyr experience, we're all ears! Your feedback fuels our innovation.

                        Share your thoughts with us, and let's make ChatZyr even better together. We're eager to hear from you!

                    </p>

                </div>
            </div>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
    );
}

export default Suggestion;
