import React from 'react';
import DropItemControls from './components/DropItemControls/DropItemControls';
import DropStatuses from './components/DropItemStatuses/DropStatuses';
import './DropItemFooter.css';

const DropItemFooter = ({ status, source }) => (
  <footer className="footer">
    <DropItemControls status={status} source={source} />
    <DropStatuses status={status} />
  </footer>
);

export default DropItemFooter;
