import axios from 'axios';
import React, { useEffect, useState } from 'react'
import pokeicono from '../assets/pokebola.png'


const Card = ({setPrintPokemon}) => {
  
  const [user, setUser] = useState([]);
  const [idPokemon, setIdPokemon] = useState('')
  setPrintPokemon(idPokemon)
  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    axios.get(URL)
      .then(res => setUser(res.data.results))
      .catch(err => (console.log(err)))
  }, [])
const handleClick = e =>{
  setIdPokemon(e.target.id)
}

  return (
    <div className='list_pokemon'>
      <h2 className='title_list'>Pokemones</h2>
      {
        user?.map(item => (
          <li onClick={handleClick} id={item?.name} className='list_list' key={item?.name}><img src={pokeicono} alt="pokeicono" />{item?.name}</li>
        ))
      }
    </div>
  )
}
export default Card