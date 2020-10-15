import React from 'react';
import './FarmCard.css';

function FarmCard() {
  return (
    <div className="farm-card">
      <img className="farm-img" src="https://images.unsplash.com/photo-1534073133331-c4b62a557083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=60" alt="" />
      <div className="farm-info">
        <h4 className="farm-title">Farm Name</h4>
        <h6 className="farm-address">Somewhere, New Coutry, Earth</h6>
        <p className="farm-products">potatoes, tomatoes, apples (or maybe we could use icons too)</p>
      </div>
    </div>
  );
}

export default FarmCard;