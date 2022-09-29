import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Details = ({printPokemon}) => {
    const [pokemon, setPokemon] = useState();
    useEffect(() => {
        let URLPokemon
        if(printPokemon){
            URLPokemon = `https://pokeapi.co/api/v2/pokemon/${printPokemon}/`
        }else{
            URLPokemon = 'https://pokeapi.co/api/v2/pokemon/bulbasaur/'
        }
        axios.get(URLPokemon)
            .then(res => setPokemon(res.data))
            .catch(err => (console.log(err)))
    }, [printPokemon])
    console.log(pokemon)
    return (
        <div className='container_inf'>
            <h2 className='title_inf'>Pokemon: <span> {pokemon?.name}</span></h2>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
            <h3 className='type_inf'> Type : <span>{pokemon?.types.map(type=>(
               <p key={type.type.name }>{ type.type.name }</p> ))}</span></h3>
            <ul className='statistics'>
                <li>{pokemon?.stats[0].stat.name} : <span>{pokemon?.stats[0].base_stat}</span></li>
                <li>{pokemon?.stats[1].stat.name} : <span>{pokemon?.stats[1].base_stat}</span></li>
                <li>{pokemon?.stats[2].stat.name} : <span>{pokemon?.stats[2].base_stat}</span></li>
                <li>{pokemon?.stats[3].stat.name} : <span>{pokemon?.stats[3].base_stat}</span></li>
                <li>{pokemon?.stats[4].stat.name} : <span>{pokemon?.stats[4].base_stat}</span></li>
                <li>{pokemon?.stats[5].stat.name} : <span>{pokemon?.stats[5].base_stat}</span></li>
            </ul>
        </div>
    )
}

export default Details
// .other['official-artwork'].front_default