import React, { useState, useEffect } from 'react';
import t from '../../helpers/pokemonTypes'
import './style.css';

function Card(props) {
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch(props.url)
    //         .then(res => res.json())
    //         .then(data => {
    //             setPokemonData(data);
    //             setLoading(false);
    //         })
    // }, [])

    return (
        <div className="Card">


            <div className="Card__img">
                <img src={props.pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                {props.pokemon.name}
            </div>
            <div className="Card__types">
                {
                    props.pokemon.types.map(type => {
                        return (
                            <div className="Card__type" style={{ backgroundColor: t[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">Weight</p>
                    <p>{props.pokemon.weight}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Height</p>
                    <p>{props.pokemon.height}</p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Ability</p>
                    <p>{props.pokemon.abilities[0].ability.name}</p>
                </div>
            </div>

        </div>
    );
}

export default Card;
