import React from 'react';
import './DropItemControls.css';

const DropItemControls = ({ status, source }) => (
  <>
    {status === 'active' && (
      <>
        <button className="button sell">Sell</button>
        {source !== 'exchange' && (
          <button className="button upgrade">Upgrade</button>
        )}
        <button className="button">Take</button>
      </>
    )}
    {status === 'vgoActive' && (
      <button className="button vgo">Open Offer</button>
    )}
    {status === 'vgoAccepted' && (
      <button className="button vgo">View</button>
    )}
  </>
);

export default DropItemControls;