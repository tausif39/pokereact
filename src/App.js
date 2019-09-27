import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setPokemonData(data.results)
        setLoading(false);
      })
  }, [])

  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="grid-container">
          {pokemonData.map((pokemon, i) => {
            console.log('poke')
            return <Card key={i} url={pokemon.url} pokemon={pokemon} />
          })}
        </div>
      </div>
    </>
  );
}

export default App;
