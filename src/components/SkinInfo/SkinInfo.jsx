import React from 'react';
import './SkinInfo.css';

const SkinInfo = ({ source, className }) => (
  <div className={`info ${className}`}>
    <div className="name">Name</div>
    {source === 'vgoCase' ?
      <div className="price">2 Opens</div>
      :
      <>
        <div className="type">
          Skin type
          <span> (FT)</span>
        </div>
        <div className="price">$20.00</div>
      </>
    }
  </div>
);

export default SkinInfo;