// VIPPackages.js

import React from 'react';
import './vip.css'; // Add your styling here

const VIPPackages = () => {
  return (
    <div className="packages-container">
      <div className="package">
        <h2>Package #1</h2>
        <ul>
          <li>Colors Profile username</li>
          <li>Color Text Username</li>
          <li>Color Chat Text</li>
          <li>VIP Badge</li>
        </ul>
        <div className="price">
          <p>1 Month: $5</p>
          <p>3 Months: $14</p>
          <p>6 Months: $25</p>
          <p>1 Year: $50</p>
        </div>
      </div>

      <div className="package">
        <h2>Package #2</h2>
        <ul>
          <li>Colors Profile username</li>
          <li>Color Text Username</li>
          <li>Color Chat Text</li>
          <li>VIP Badge</li>
          <li>Personal Video Room</li>
        </ul>
        <div className="price">
          <p>1 Month: $10</p>
          <p>3 Months: $19</p>
          <p>6 Months: $55</p>
          <p>1 Year: $110</p>
        </div>
      </div>

      <div className="custom-features">
        <h2>Customized Features</h2>
        <ul>
          <li>CUSTOM PROFILE BADGE: $10</li>
          <li>CUSTOM COLOR PURCHASE: $10</li>
        </ul>
      </div>
    </div>
  );
};

export default VIPPackages;
