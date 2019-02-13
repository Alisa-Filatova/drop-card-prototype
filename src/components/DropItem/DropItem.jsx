import React from 'react';
import CaseInfo from './CaseInfo';
import UpgradeInfo from './UpgradeInfo';
import DropInfo from './DropInfo';
import './DropItem.css';

const DropItem = ({ source }) => (
  <div className="root">
    <div className="wrapper">
      <div className="frame">
        <img
          src="https://cdn.ezy.com/images/1912/item/mp7-redact-factory-new-600.png"
          alt=""
          height="90"
        />
        <div className="info">
          Skin Name<br/>
          $20.00
        </div>
        {source === 'caseItem' && <CaseInfo className="dropInfo" />}
        {source === 'upgrade' && <UpgradeInfo className="dropInfo" />}
        {source !== 'caseItem' && source !== 'upgrade' && (
          <DropInfo source={source} className="dropInfo" />
        )}
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200.97 41.84"
          width="42.3"
          height="10"
        >
          <path d="M44.73,9.4S45.38,2.59,37,.65H8.75S0,.65,0,9.4v23s.32,9.4,9.08,9.4h24.3s11,1,11.35-9.4h-34V9.4Z" fill="#fff"/>
          <path d="M201,8.36V8.1h0c-.18-1.95-1.31-6.29-7.76-7.78H165s-8.75,0-8.75,8.76v23s.32,9.4,9.07,9.4h24.31a12.38,12.38,0,0,0,1.95,0v0s9.4-.33,9.4-9.08V9.08A6.75,6.75,0,0,0,201,8.36Zm-9.4,23.73H166.92v-23h24.64Z" fill="#fff"/>
          <path d="M149.42,9.08s.65-6.81-7.78-8.76h-28.2s-8.75,0-8.75,8.76v23s.33,9.4,9.08,9.4h24.31a12.23,12.23,0,0,0,1.94,0v0s9.4-.33,9.4-9.08V17.26H120.91s-.55,5.74,6.55,7.37H140v7.46H115.39v-23Z" fill="#fff"/>
          <path d="M97.56,8.75S98.21,1.94,89.78,0H61.58s-8.75,0-8.75,8.75v7.13s.33,9.4,9.08,9.4h24v7.13h-34s-.65,6.81,7.78,8.75h28.2s8.75,0,8.75-8.75V25.28s-.32-9.4-9.08-9.4h-24V8.75Z" fill="#fff"/>
        </svg>
      </div>
    </div>
  </div>
);

export default DropItem;