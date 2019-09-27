import React, { useState, useEffect } from 'react';
import './style.css';

function Navbar() {
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        <div className="Navbar">
            Pokemon API
        </div>
    );
}

export default Navbar;
