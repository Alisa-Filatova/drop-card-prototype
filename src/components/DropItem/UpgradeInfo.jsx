import React from 'react';

const UpgradeInfo = ({ className }) => (
  <a className={`dropInfo ${className}`} href="#">
    <img
      src="https://cdn.ezy.com/images/1912/item/mp7-redact-factory-new-600.png"
      alt=""
      height="90"
    />
    <div className="info">
      Upgrade<br/>
      1000% | 2000x
    </div>
  </a>
);

export default UpgradeInfo;