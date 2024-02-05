import {useEffect, useState} from 'react';
import axios from 'axios';
import Pokemon from '../../Components/Pokemon/Pokemon.jsx';
import styles from "./PokemonsPage.module.css"
import Pagination from "../../Components/Pagination/Pagination.jsx";
import PokemonInfoPage from "../PokemonInfoPage/PokemonInfoPage.jsx";


const PokemonsPage = () => {

    const [pokemonList, setPokemonList] = useState([])
    const [loading, setLoading] = useState(false)

    const getPokemons = async (limit, offset) => {
        try {
            setLoading(true)
            const {data} = await axios.get(` https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
            return data.results
        } catch (e) {
            console.log("error".e);
        } finally {
            setLoading(false)
        }
    }

    const [offset, setOffset] = useState(1)
    const [limit, setLimit] = useState(20)
    let page = Math.floor(offset / limit) + 1
    if (page <= 0) {
        page = 1
        setOffset(1)
    }

    const handlePrev = () => {
        setOffset(prev => prev - limit)
    }
    const handleNext = () => {
        setOffset(prev => prev + limit)
    }

    useEffect(() => {
        getPokemons(limit, offset).then(pokemons => setPokemonList(pokemons))
    }, [offset, limit]);

    // const [isInfoPageOpen, setIsInfoPageOpen] = useState(false)
    // const [pokemonInfo, setPokemonInfo] = useState(null)
    //
    // const handleOpenInfoPage = () => {
    //     setIsInfoPageOpen(!isInfoPageOpen)
    // }
    // const handleGetPokemonId = (pokemonInfo) => {
    //     setPokemonInfo(pokemonInfo)
    // }


    return (
        <div className="App">
            {
                !loading
                    ? <>
                        <input
                            type="number"
                            onChange={event => setLimit(event.target.value)}
                            value={limit}
                        />
                        <div className={styles.pokemonCards}>
                            {
                                pokemonList.map(pokemon => <Pokemon key={pokemon.name} pokemon={pokemon}/>)
                                // pokemonList.map(pokemon => (<Pokemon pokemon={pokemon}/>))
                            }
                        </div>
                    </>
                    : <h1>Loading!!!</h1>
            }
            <Pagination page={page} handlePrev={handlePrev} handleNext={handleNext}/>
        </div>
    );
};

export default PokemonsPage;