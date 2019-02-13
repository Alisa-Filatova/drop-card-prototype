import React from 'react';

const CaseInfo = ({ className }) => (
  <a className={`dropInfo ${className}`} href="#">
    <img
      src="https://ezy.com/cases/Tesla%20Key.png"
      alt=""
      height="90"
    />
    <div className="info">
      Case Name<br/>
      $10.00
    </div>
  </a>
);

export default CaseInfo;