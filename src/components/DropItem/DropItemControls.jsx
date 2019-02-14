import React from 'react';

const DropItemControls = ({ status, source }) => (
  <>
    {status === 'active' && (
      <>
        <button>Sell</button>
        {source !== 'exchange' && (
          <button>Upgrade</button>
        )}
        <button>Take</button>
      </>
    )}
    {status === 'vgoActive' && (
      <button>Open Offer</button>
    )}
    {status === 'vgoAccepted' && (
      <button>View</button>
    )}
  </>
);

export default DropItemControls;