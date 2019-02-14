import React, { Component } from 'react';
import DropItem from './components/DropItem/DropItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Demo public drop info (hover to view)</h3>
          <div className="list">
            <DropItem view="public" source="caseItem" />
            <DropItem view="public" source="upgrade" />
            <DropItem view="public" source="giveaway" />
            <DropItem view="public" source="promoCode" />
            <DropItem view="public" source="exchange" />
          </div>
          <h3>Demo private controls</h3>
          <div className="list">
            <DropItem status="active" />
            <DropItem status="vgoActive" />
            <DropItem status="vgoAccepted" />
            <DropItem source="exchange" />
          </div>
          <h3>Demo private simple statuses</h3>
          <div className="list">
            <DropItem status="vgoExpire" />
            <DropItem status="vgoError" />
            <DropItem status="upgrade" />
            <DropItem status="sold" />
            <DropItem status="requested" />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
