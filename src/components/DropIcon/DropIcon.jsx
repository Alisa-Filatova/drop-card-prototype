import React from 'react';
import {
  Exchange as ExchangeIcon,
  Upgrade as UpgradeIcon,
  Giveaway as GiveawayIcon,
  PromoCode as PromoCodeIcon,
} from './icons';
import './DropIcon.css';

const DROP_SOURCES = {
  upgrade: { icon: UpgradeIcon },
  exchange: { icon: ExchangeIcon },
  giveaway: { icon: GiveawayIcon },
  promoCode: { icon: PromoCodeIcon },
};

const DROP_ICONS = Object.keys(DROP_SOURCES);

const DropIcon = ({ source }) => (
  <>
    {(DROP_ICONS.indexOf(source) !== -1) && (
      <img
        className={`dropIcon ${[source]}`}
        src={DROP_SOURCES[source].icon}
        alt=""
      />
    )}
  </>
);

export default DropIcon;