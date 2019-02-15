import React from 'react';
import RarityMask from './CustomRarityMask'
import './SquareRarityFrame.css';

const SquareRarityFrame = ({ className, wrapClassName, frameClassName, children, size, rarity }) => (
  <div className={`frameRoot ${className} ${size}`}>
    <div className={`frameWrapper ${wrapClassName}`}>
      <RarityMask
        className={frameClassName}
        rarity={rarity}
        size={size}
      >
        {children}
      </RarityMask>
    </div>
  </div>
);

export default SquareRarityFrame;