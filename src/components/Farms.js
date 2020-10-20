import React from 'react';
import './Farms.css';
import FarmCard from './FarmCard';
import {sampleFarms} from './loadFarmsData.js';

export default function Farms({ farms }) {

  const farmElements = sampleFarms.map(farm => {
    return (
      <FarmCard
        key={farm.id}
        {...farm}
      />
    )
  });
  return (
    <div className="farms">
      {farmElements}
    </div>
  );
}