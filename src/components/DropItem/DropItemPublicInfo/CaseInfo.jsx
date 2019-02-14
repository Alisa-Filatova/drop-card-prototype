import React from 'react';
import './CaseInfo.css';

const CaseInfo = ({ className }) => (
  <a className={className} href="#">
    <div className="caseImageWrapper">
      <img
        src="https://ezy.com/cases/Tesla%20Key.png"
        alt=""
        height="100%"
      />
    </div>
    <div className="caseInfo">
      <div className="caseName">Case Name</div>
      <div className="casePrice">$20.00</div>
    </div>
  </a>
);

export default CaseInfo;