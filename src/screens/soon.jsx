import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import './soon.css'; // Import the external stylesheet

function Soon() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top left of the page
  }, []);
  return (
    <>
      <div className='main'>
        <h2>Available Soon</h2>
      </div>
    </>
  );
}

export default Soon;
