import React from 'react';
import GameIcon from '../GameIcon/GameIcon';
import './CustomRarityMask.css';

const RarityMask = ({ rarity, className, children, appId = 'VGO', size }) => (
  <div className={`frame ${rarity} ${className} ${size}`}>
    {children}
    <GameIcon appId={appId} />
  </div>
);


export default RarityMask;