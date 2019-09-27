import React, { useState, useEffect } from 'react';
import t from '../../helpers/pokemonTypes'
import './style.css';

function Card(props) {
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(props.url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPokemonData(data)
                setLoading(false);
            })
    }, [])

    return (
        <div className="Card">
            {loading ? <span>Loading</span> : (
                <>
                    <div className="Card__img">
                        <img src={pokemonData.sprites.front_default} alt="" />
                    </div>
                    <div className="Card__name">
                        {pokemonData.name}
                    </div>
                    <div className="Card__types">
                        {
                            pokemonData.types.map(type => {
                                return (
                                    <div className="Card__type" style={{ backgroundColor: t[type.type.name] }}>
                                        {type.type.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;
