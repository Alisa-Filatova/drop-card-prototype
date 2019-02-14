import React from 'react';
import CaseInfo from './CaseInfo';
import UpgradeInfo from './UpgradeInfo';
import DropSourceInfo from './DropSourceInfo';
import './DropItemPublicInfo.css';

const DropItemPublicInfo = ({ source }) => {
  if (!source) return null;
  switch (source) {
    case 'caseItem': return <CaseInfo className="dropInfo" />;
    case 'upgrade': return <UpgradeInfo className="dropInfo" />;
    default: return <DropSourceInfo source={source} className="dropInfo" />;
  }
};

export default DropItemPublicInfo;