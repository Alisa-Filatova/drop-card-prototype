import React from 'react';
import './GameIcon.css';
const CSGOIcon = require('./icons/csgo.svg');
const VGOIcon = require('./icons/vgo.svg');

const GameIcon = ({ appId, className }) => (
  <div className={`gameIcon ${className}`}>
    {appId === 'CSGO' && <img src={CSGOIcon} className="csgo" alt="" />}
    {appId === 'VGO' && <img src={VGOIcon} className="vgo" alt="" />}
  </div>
);

export default GameIcon;