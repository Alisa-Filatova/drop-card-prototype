import React from 'react';
import GameIcon from '../GameIcon/GameIcon';
import './SkinRarityFrame.css';

const SkinRarityFrame = ({ className, rarity, frameClassName, children, appId }) => (
  <div className="frameRoot">
    <div className="wrapper">
      <div className={`frame ${rarity}`}>
        {children}
        <GameIcon appId={appId} />
      </div>
    </div>
  </div>
);

export default SkinRarityFrame;