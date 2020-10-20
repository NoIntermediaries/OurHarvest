import React from 'react';
import './FarmCard.css';

export default function FarmCard(props) {
  const {
    image,
    name,
    address,
    distance,
    products
  } = props;
  
  return (
    <div className="farm-card">
      <img className="farm-img" src={image} alt="" />
      <div className="farm-info">
        <h4 className="farm-title">{name}</h4>
        <h6 className="farm-details">{address}</h6>
        <p className="farm-products">{distance}</p>
        <p className="farm-products">{products}</p>
      </div>
    </div>
  );
}