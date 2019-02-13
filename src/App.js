import React, { Component } from 'react';
import DropItem from './components/DropItem/DropItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Demo (hover to view)</h2>
          <div className="list">
            <DropItem source="caseItem" />
            <DropItem source="upgrade" />
            <DropItem source="giveaway" />
            <DropItem source="promoCode" />
            <DropItem source="exchange" />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
