import './App.css'
import Card from './components/Card';
import Details from './components/Details';
import titlePokedex from './assets/dex-title.png'
import { useState } from 'react';

function App() {
  const [printPokemon, setPrintPokemon] = useState('')
  return (
    <div className="App">
      <h1 className='title_principal'><img src={titlePokedex} alt="Pokedex" /></h1>
      <div className='container_pokedex'>
      <Details printPokemon={printPokemon}/>
      <Card setPrintPokemon={setPrintPokemon} />
      </div>

    </div>
  )
}

export default App
