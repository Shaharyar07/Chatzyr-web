import React, { useState, useEffect } from 'react';
import '../components/animatedText.css';
import ScrollToTopButton from '../components/ScrollTop';
import '../screens/home.css';
import VideoPlayer from '../components/videoplayer';
import { Link } from 'react-router-dom';
function HomePage() {
  const images = [
    'https://raw.githubusercontent.com/chatverse90/chatverse-images/main/c4.jpg',
    'https://raw.githubusercontent.com/chatverse90/chatverse-images/main/c5.jpg',
    'https://raw.githubusercontent.com/chatverse90/chatverse-images/main/c6.jpg',
  ];

  const [openAnswer, setOpenAnswer] = useState(null);

  const faqClick = (index) => {
    if (openAnswer === index) {
      setOpenAnswer(null);
    } else {
      setOpenAnswer(index);
    }
  };
  const faqData = [
    {
      question: 'What is Chatzyr?',
      answer: 'Chatzyr is a chat application where people can make new friends and connect with others.',
    },
    {
      question: 'How can I customize my profile on Chatzyr?',
      answer: 'Chatzyr provides its users with the ultimate opportunity to customize their profile with Chatzyr custom and VIP badges.',
    },
    {
      question: 'Can I purchase custom text colors on Chatzyr?',
      answer: 'Yes, you can purchase custom text colors on Chatzyr to make your chats more personalized.',
    },
    {
      question: 'Are there video streaming rooms available on Chatzyr?',
      answer: 'Yes, Chatzyr offers video streaming rooms that you can purchase to enhance your chatting experience and stream content following Chatzyr compliance.',
    },
    {
      question: 'Can I buy custom badges and other products from Chatzyr?',
      answer: 'Yes, Chatzyr sells custom badges and other products online on its website.',
    },
    {
      question: 'How do I make new friends on Chatzyr?',
      answer: 'To make new friends on Chatzyr, you can join chat rooms, participate in group discussions, or send private messages to other users.',
    },
    {
      question: 'Are there any additional features on Chatzyr?',
      answer: 'Yes, Chatzyr offers various additional features such as private chat rooms, customizable avatars, and chat filters.',
    },
    {
      question: 'Is Chatzyr available on mobile devices?',
      answer: 'Yes, Chatzyr is available as a mobile application, allowing you to chat and connect with others on the go.',
    },
    {
      question: 'How can I report inappropriate behavior on Chatzyr?',
      answer: 'If you encounter any inappropriate behavior on Chatzyr, you can report it to the platform\'s support team through the provided reporting feature.',
    },
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <>
      {/* <Navbar /> */}
      {/* <div className='container'> */}
      <VideoPlayer />
      {/* <div className='header'> */}
        {/* <p className="animated-text">Welcome To CHATZYR website</p> */}
      {/* </div> */}
      <div className='main'>
        <main className='content'>
          <div className='bullets'>
            <div className='bullet2'>
              <div className='bullet-item'>
                <div className='bullet-icon'>
                  <h3 className="custom-h3" >LIVE AVATAR CHAT 24/7</h3>
                </div>
                <p className="custom-h3" >Chat Now with 1,000′s of other people from around the world.</p>
              </div>
              <div className='bullet-item'>
                <h3 className="custom-h3" >PRIVATE MESSAGES</h3>
                <p className="custom-h3" >Send private messages, and chat in private with whomever you choose.</p>
              </div>
              <div className='bullet-item'>
                <h3 className="custom-h3" >MESSAGE BOARDS</h3>
                <p className="custom-h3" >Start new discussions using our Message Boards.</p>
              </div>
            </div>
            <div className="image-slider">
              <div className="tablet-frame">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={index === currentImageIndex ? 'active' : ''}
                  />
                ))}
              </div>
            </div>
            {/* <ul> */}
            <div className='bullet2'>
              <div className='bullet-item'>
                <h3 className="custom-h3" >PROFILES</h3>
                <p className="custom-h3" >Create and customize your profile. Show the world what you are all about.</p>
              </div>
              <div className='bullet-item'>
                <h3 className="custom-h3" >NEW FRIENDS</h3>
                <p className="custom-h3" >Make new friends who share similar interests.</p>
              </div>
              <div className='bullet-item'>
                <h3 className="custom-h3" >PRIVACY</h3>
                <p className="custom-h3" >Change your privacy level. You choose who you want to chat with, and who can chat with you.</p>
              </div>
            </div>
            {/* </ul> */}
          </div>
          {/* FAQ section */}
        <div className='faq-section'>
          <h2>Frequently Asked Questions</h2>
          <div className='faq-questions'>
            {faqData.map((data, index) => (
              <div className='faq-question' key={index}>
                <div className='question-header' onClick={() => faqClick(index)}>
                  <h3> {openAnswer === index ? '-' : '+'} {data.question}</h3>
                  {/* <span>{openAnswer === index ? '-' : '+'}</span> */}
                </div>
                <p className={openAnswer === index ? 'open' : ''}>{data.answer}</p>
              </div>
            ))}
          </div>
        </div>

          </main>
        {/* <div className='down'> */}
        <h1 className="custom-h4" >DOWNLOAD NOW!</h1>
        {/* </div> */}
      </div>
      <div className='download'>

        {/* <div> */}
        <a className="download-image" href="https://play.google.com/store/apps/dev?id=8960598395323637138">       
        <img
          src="https://raw.githubusercontent.com/chatverse90/chatverse-images/main/playstore.png"
          alt="Sample Image"
          className="download-image"
        />
        </a>
        <Link className="download-image"  to="/soon">
        <img
          src="https://raw.githubusercontent.com/chatverse90/chatverse-images/main/appstore.png"
          alt="Sample Image"
          className="download-image"
        />
        </Link>
        {/* </div> */}
      </div>
      
      <ScrollToTopButton />
      {/* </div> */}
    </>
  );
}

export default HomePage;
