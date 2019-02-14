import React from 'react';
import SkinImage from '../../SkinImage/SkinImage';
import './DropSourceInfo.css';

const DROP_SOURCES = {
  exchange: { title: 'exchanged' },
  giveaway: { title: 'giveaway' },
  promoCode: { title: 'promoCode' },
};

const DROP_TITLES = Object.keys(DROP_SOURCES);

const DropInfo = ({ source, className }) => (
  <div className={className}>
    <SkinImage className="skinImagePublic" />
    {(DROP_TITLES.indexOf(source) !== -1) && (
      <div className="dropTitle">
        {DROP_SOURCES[source].title}
      </div>
    )}
  </div>
);

export default DropInfo;