import React from 'react';
import CaseInfo from './components/CaseInfo/CaseInfo';
import UpgradeInfo from './components/UpgradeInfo/UpgradeInfo';
import DropSourceInfo from './components/DropSourceInfo/DropSourceInfo';
import './DropItemPublicInfo.css';

const DropItemPublicInfo = ({ source }) => {
  switch (source) {
    case 'caseItem': return <CaseInfo className="dropInfo" />;
    case 'upgrade': return <UpgradeInfo className="dropInfo" />;
    case 'giveaway':
    case 'exchange':
    case 'promoCode':
      return <DropSourceInfo source={source} className="dropInfo" />;
    default: return null;
  }
};

export default DropItemPublicInfo;