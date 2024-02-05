const formatList = (info, pokemonInfo, index) => {
    return (<span key={index}>{info.name}{pokemonInfo.length - 1 === index ? "" : ", "}</span>)
}

import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

function PokemonInfoPage() {
    const navigate = useNavigate()
    const location = useLocation()

    const [pokemonData, setPokemonData] = useState({})
    const [loading, setLoading] = useState(false)

    const getPokemon = async () => {
        try {
            setLoading(true)
            const {data} = await axios.get(location.state.url)
            return setPokemonData(data)
        } catch (e) {
            console.log("error".e);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <div>
            <button onClick={() => navigate(-1)}>back</button>
            {
                !loading
                    ? <div>
                        <img src={pokemonData.sprites?.other?.dream_world?.front_default} alt="image"/>
                        <h1>Name: {pokemonData.name}</h1>
                        <p>Type: {pokemonData.types?.map((type, index) => (
                            formatList(type.type, pokemonData.types, index)
                        ))}</p>
                        <p>Stats: {pokemonData.stats?.map((stat, index) => (
                            formatList(stat.stat, pokemonData.stats, index)
                        ))}</p>
                        <p>Abilities: {pokemonData.abilities?.map((ability, index) => (
                            formatList(ability.ability, pokemonData.abilities, index)
                        ))}</p>
                        <p>Some-moves: {pokemonData.moves?.slice(0, 4).map((move, index) => (
                            formatList(move.move, pokemonData.moves.slice(0, 4), index)
                        ))}</p>
                    </div>
                    : <h1>Loading!</h1>
            }
        </div>
    );
}

export default PokemonInfoPage;