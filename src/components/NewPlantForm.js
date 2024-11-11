import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(null); // For error handling

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = { name, image, price: parseFloat(price) };

    // Send new plant data to the backend
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPlant),
    })
      .then(response => response.json())
      .then(addedPlant => {
        onAddPlant(addedPlant);
        setName('');
        setImage('');
        setPrice('');
        setError(null); // Clear any previous error
      })
      .catch((error) => {
        console.error("Error adding plant:", error);
        setError("Failed to add plant. Please try again.");
      });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      {error && <p className="error">{error}</p>} {/* Display error message if any */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;