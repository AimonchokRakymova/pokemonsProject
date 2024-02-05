import React, {useEffect, useState} from 'react';
import styles from "./Pokemon.module.css"
import axios from "axios";
import {Link, useLocation, useNavigate} from "react-router-dom";

const Pokemon = ({pokemon}) => {
    const [pokemonData, setPokemonData] = useState({})

    const getPokemon = async () => {
        try {
            const {data} = await axios.get(pokemon.url)
            return setPokemonData(data)
        } catch (e) {
            console.log("error".e);
        } finally {
            console.log('final');
        }
    }
    useEffect(()=>{
        getPokemon()
    }, [])


    return (
        <div className={styles.pokemonCard}>

            <p>{pokemonData.name}</p>
            {/*<p>{pokemonData.abilities}</p>*/}
            <img src={pokemonData.sprites?.other?.dream_world?.front_default} alt=""/>
            <Link to="pokemon-info" state={pokemon}>
                <button>подробнее</button>
            </Link>
        </div>
    )
}

export default Pokemon;