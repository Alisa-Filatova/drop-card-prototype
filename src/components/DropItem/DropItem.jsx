import React from 'react';
import SkinRarityFrame from '../SkinRarityFrame/SkinRarityFrame';
import SkinInfo from '../SkinInfo/SkinInfo';
import SkinImage from '../SkinImage/SkinImage';
import DropIcon from '../DropIcon/DropIcon';
import DropItemPublicInfo from './DropItemPublicInfo/DropItemPublicInfo';
import DropItemFooter from './DropItemFooter/DropItemFooter';
import './DropItem.css';

const DropItem = ({ source, status = 'active', view = 'private', rarity, appId = 'VGO' }) => (
  <SkinRarityFrame rarity={rarity} appId={appId}>
    <SkinImage
      className={view === 'public' ? 'skinImagePublic' : 'skinImagePrivate'}
    />
    <SkinInfo source={source} />
    {view === 'public' && (
      <DropItemPublicInfo
        className="dropInfo"
        source={source}
      />
    )}
    {view === 'private' && (
      <DropItemFooter
        source={source}
        status={status}
      />
    )}
    <DropIcon source={source} />
  </SkinRarityFrame>
);

export default DropItem;