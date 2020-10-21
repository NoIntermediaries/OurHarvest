import React from 'react';
import './Feature.css';

function Feature(props) {
  return (
    <div className="col s4">
      <i className="material-icons medium">{props.icon}</i> <br />
      <h6><strong>{props.title}</strong></h6>
      <p className="desc">{props.text}</p>
    </div>
  );
}

export default Feature;