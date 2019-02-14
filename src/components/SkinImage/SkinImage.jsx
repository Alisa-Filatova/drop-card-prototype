import React from 'react';
import './SkinImage.css';

const SkinImage = ({ className }) => (
  <div className={`skinImageRoot ${className}`}>
    <img
      className="image"
      src="https://cdn.ezy.com/images/1912/item/mp7-redact-factory-new-600.png"
      alt=""
    />
  </div>
);

export default SkinImage;