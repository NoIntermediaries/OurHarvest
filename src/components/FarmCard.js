import React from 'react';
import './FarmCard.css';
import {Link} from "react-router-dom";

export default function FarmCard(props) {

  const {
    id,
    image,
    name,
    address,
    city,
    distance,
    products
  } = props;

  const productSpaced = products.join(', ');

  return (
    <div className="row">
      <div className="col s12 m12 l12">
        <div className="card" key={id}>
          <div className="card-image">
            <img src={image} alt="farmphoto"/>
          </div>
          <Link to={"/" + id}>
            <div className="card-title">{name}</div>
            </Link>
          <div className="card-content">
            <h6>{address}</h6>
            <h6>{city}</h6>
            <p>{distance}</p>
            <p>{productSpaced}</p>
          </div>
        </div>
      </div>
    </div>
  );
}