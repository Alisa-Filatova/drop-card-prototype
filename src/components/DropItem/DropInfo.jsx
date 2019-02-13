import React from 'react';

const DROP_SOURCES = {
  exchange: { title: 'exchanged' },
  giveaway: { title: 'giveaway' },
  promoCode: { title: 'promoCode' },
};

const DROP_TITLES = Object.keys(DROP_SOURCES);

const DropInfo = ({ source, className }) => (
  <div className={`dropInfo ${className}`}>
    <img
      src="https://cdn.ezy.com/images/1912/item/mp7-redact-factory-new-600.png"
      alt=""
      height="90"
    />
      {(DROP_TITLES.indexOf(source) !== -1) && (
        <div className="dropTitle">
          {DROP_SOURCES[source].title}
        </div>
      )}
  </div>
);

export default DropInfo;