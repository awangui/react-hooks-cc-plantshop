import React, { useState } from "react";

function PlantCard({ plant }) {
  const [soldOut, setSoldOut] = useState(false);

  const toggleSoldOut = () => setSoldOut(!soldOut);

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button
        className={soldOut ? "" : "primary"}
        onClick={toggleSoldOut}
      >
        {soldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;