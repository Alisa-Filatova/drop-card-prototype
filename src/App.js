import React, { Component } from 'react';
import DropItem from './components/DropItem/DropItem';
import SquareRarityFrame from './components/SkinRarityFrame/SquareRarityFrame';
import CustomRarityMask from './components/SkinRarityFrame/CustomRarityMask';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Public drop info (hover to view)</h3>
          <div className="list">
            <DropItem
              rarity="covert"
              view="public"
              source="caseItem"
              appId="CSGO"
            />
            <DropItem
              rarity="contraband"
              view="public"
              source="upgrade"
            />
            <DropItem
              rarity="exotic"
              view="public"
              source="giveaway"
              appId="CSGO"
            />
            <DropItem
              rarity="remarkable"
              view="public"
              source="promoCode"
            />
            <DropItem
              view="public"
              source="exchange"
            />
          </div>
          <h3>Private controls</h3>
          <div className="list">
            <DropItem
              rarity="industrial-grade"
              status="active"
            />
            <DropItem
              rarity="extraordinary"
              status="vgoActive"
            />
            <DropItem
              rarity="high-grade"
              status="vgoAccepted"
            />
            <DropItem source="exchange" />
          </div>
          <h3>Private simple statuses</h3>
          <div className="list">
            <DropItem
              rarity="classified"
              status="vgoExpire"
            />
            <DropItem
              rarity="mil-spec-grade"
              status="vgoError"
            />
            <DropItem
              rarity="covert"
              status="upgrade"
            />
            <DropItem status="sold" />
            <DropItem status="requested" />
          </div>
          <h3>Rarity frames (sizes) & Mask</h3>
          <div className="list">
            <SquareRarityFrame size="large" rarity="covert" />
            <SquareRarityFrame rarity="high-grade" />
            <SquareRarityFrame size="small" />
            <CustomRarityMask className="custom_rarityMask" />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
