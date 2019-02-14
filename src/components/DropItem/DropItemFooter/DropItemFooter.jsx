import React from 'react';
import DropItemControls from './DropItemControls';
import DropStatuses from './DropStatuses';
import './DropItemFooter.css';

const DropItemFooter = ({ status, source }) => (
  <footer className="footer">
    <DropItemControls status={status} source={source} />
    <DropStatuses status={status} />
  </footer>
);

export default DropItemFooter;
