import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className='footerStyle'>
      <div className='footerContentStyle'>
        <ul className='menuStyle' >
          <li className='menuItemStyle'>
            {/* <a className='linkStyle' href="/termsofuse">Terms of Use </a> */}
            <Link className="linkStyle" to="/termsofuse">Terms of Use</Link>
          </li>
          <li className='menuItemStyle'>
            {/* <a className='linkStyle' href="/contactus">Contact Us</a> */}
            <Link className="linkStyle" to="/contactus">Contact Us</Link>
            </li>
            
            <li className='menuItemStyle'>
            {/* <a className='linkStyle' href="/privacyterms">Privacy Policy</a> */}
            <Link className="linkStyle" to="/refund">Refund Policy</Link>
            </li>
          <li className='menuItemStyle'>
            {/* <a className='linkStyle' href="/privacyterms">Privacy Policy</a> */}
            <Link className="linkStyle" to="/privacyterms">Privacy Policy</Link>
            </li>
            <li className='menuItemStyle'>
            {/* <a className='linkStyle' href="/privacyterms">Privacy Policy</a> */}
            <Link className="linkStyle" to="/policy">Shipping Policy</Link>
            </li>
        </ul>
        <div className='copyrightStyle'>
          <span className='chatzyrStyle'>Chatzyr</span> Copyright &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
