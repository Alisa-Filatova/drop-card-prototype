import React from 'react';
import SquareRarityFrame from '../SkinRarityFrame/SquareRarityFrame';
import SkinInfo from '../SkinInfo/SkinInfo';
import SkinImage from '../SkinImage/SkinImage';
import DropIcon from '../DropIcon/DropIcon';
import DropItemPublicInfo from './DropItemPublicInfo/DropItemPublicInfo';
import DropItemFooter from './DropItemFooter/DropItemFooter';
import './DropItem.css';

const DropItem = ({ size, source, status = 'active', view = 'private', rarity, appId = 'VGO' }) => (
  <SquareRarityFrame
    size={size}
    rarity={rarity}
    appId={appId}
  >
    <SkinImage
      className={view === 'public'
        ? 'skinImagePublic'
        : 'skinImagePrivate'
      }
    />
    <SkinInfo source={source} />
    {view === 'public' && (
      <DropItemPublicInfo source={source} />
    )}
    {view === 'private' && (
      <DropItemFooter
        source={source}
        status={status}
      />
    )}
    <DropIcon source={source} />
  </SquareRarityFrame>
);

export default DropItem;