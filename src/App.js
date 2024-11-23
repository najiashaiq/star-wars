import React, { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './StarshipCard';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipsData = await getAllStarships();
      setStarships(starshipsData); 
    };

    fetchStarships();
  }, []);

  return (
    <div>
      <h1>Star Wars Starships</h1> 
      <div className="starship-list">  
        {starships.map((starship) => (
          <StarshipCard key={starship.name} name={starship.name} />
        ))}
      </div>
    </div>
  );
}

export default App;