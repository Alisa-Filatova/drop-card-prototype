import React from 'react';

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

const DropStatuses = ({ status }) => (
  <>
    {status === 'vgoPending' && (
      <div>opening...</div>
    )}
    {status === 'requested' && (
      <div>~10 days</div>
    )}
    {(SIMPLE_STATUSES.indexOf(status) !== -1) && (
      <div>
        {SIMPLE_STATUSES_TEXT[status]
          ? SIMPLE_STATUSES_TEXT[status]
          : status.toUpperCase()}
      </div>
    )}
  </>
);

export default DropStatuses;