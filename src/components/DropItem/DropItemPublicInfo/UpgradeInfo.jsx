import React from 'react';
import SkinImage from '../../SkinImage/SkinImage';
import './UpgradeInfo.css';

const UpgradeInfo = ({ className }) => (
  <a className={className} href="#">
    <SkinImage className="skinImagePublic" />
    <div className="upgradeTitle">Upgrade</div>
    <div className="upgradeInfo">
      <div className="infoSide">
        <div className="infoTotal">
          0001.5%
        </div>
        <div>Win %</div>
      </div>
      <div className="infoSide">
        <div className="infoTotal">
          100x
        </div>
        <div>Multiplier</div>
      </div>
    </div>
  </a>
);

export default UpgradeInfo;