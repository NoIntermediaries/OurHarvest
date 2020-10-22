import React from 'react';
import './FarmCard.css';
import {NavLink} from "react-router-dom";

export default function FarmCard(props) {

  const {
    id,
    image,
    name,
    address,
    distance,
    products
  } = props;

  const productSpaced = products.join(', ');

  return (
    <div className="row">
      <div className="col s12 m12">
        <div className="card">
          <div className="card-image">
            <img src={image} />
          </div>
            <div className="card-title"><NavLink to="/FarmDetail">{name}</NavLink></div>
          <div class="card-content">
            <h6>{address}</h6>
            <p>{distance}</p>
            <p>{productSpaced}</p>
          </div>
        </div>
      </div>
    </div>
  );
}