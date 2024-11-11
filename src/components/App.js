import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  // Fetch plants from the backend on component mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  const onAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants} onAddPlant={onAddPlant} />
    </div>
  );
}

export default App;