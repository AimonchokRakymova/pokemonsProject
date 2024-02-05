import './App.css'
import PokemonsPage from "./Pages/PokemonsPage/PokemonsPage.jsx";
import {Route, Routes} from "react-router-dom";
import AnotherPage from "./Pages/AnotherPage.jsx";
import PokemonInfoPage from "./Pages/PokemonInfoPage/PokemonInfoPage.jsx";

function App() {

  return (
    <>
        <Routes>
           <Route path="/" element={<PokemonsPage/>}/>
           <Route path="pokemon-info" element={<PokemonInfoPage/>}/>
        </Routes>
    </>
  )
}

export default App
