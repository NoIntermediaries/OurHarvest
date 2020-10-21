import React from 'react';
import './Features.css';
import Feature from './Feature';

function Features() {
  return (
    <div className="row feat">
      <Feature icon="store" title="Always close to you" text="Based on your location, ourHarvest will show you the closest farms to you and the available veggies in each one of them."/>
      <Feature icon="euro_symbol" title="Save money by avoiding intermediaries" text="Veggies prices are usually incremented by the big ammount of players along the supply chain. At ourHarvest, we get you cheaper prices by connecting you directly from the growers."/>
      <Feature icon="favorite" title="Eat healthy and ecological" text="By using ourHarvest you don't only promote local growers but you invest in yourself by eating ecological and fresh products."/>
    </div>
  );
}

export default Features;