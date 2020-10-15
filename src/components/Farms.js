import React from 'react';
import './Farms.css';
import FarmCard from './FarmCard';

function Farms() {
  return (
    <div className="farms">
      <FarmCard />
      <FarmCard />
      <FarmCard />
      <FarmCard />
    </div>
  );
}

export default Farms;