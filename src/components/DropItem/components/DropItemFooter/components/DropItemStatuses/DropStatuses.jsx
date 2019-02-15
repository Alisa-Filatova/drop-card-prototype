import React from 'react';
import './DropStatuses.css';

const SIMPLE_STATUSES_TEXT = {
  sold: 'sold',
  sent: 'sent',
  received: 'received',
  upgrade: 'used',
  exchanged: 'exchanged',
  vgoError: 'error',
  vgoExpire: 'expired',
  vgoDecline: 'declined',
};

const SIMPLE_STATUSES = Object.keys(SIMPLE_STATUSES_TEXT);

const getStatus = (status) => {
  if (!status) return null;
  switch (status) {
    case 'vgoPending': return 'opening...';
    case 'requested': return '~10 days';
    default: return (
      (SIMPLE_STATUSES.indexOf(status) !== -1) && (
        <>
          {SIMPLE_STATUSES_TEXT[status]
            ? SIMPLE_STATUSES_TEXT[status]
            : status.toUpperCase()
          }
        </>
      )
    )
  }
};

const DropStatuses = ({ status }) => (
  <div className="status">{getStatus(status)}</div>
);

export default DropStatuses;