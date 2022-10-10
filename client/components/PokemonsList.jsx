import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllPokemonThunk } from '../actions/pokemonActions'
import { getAllPokemonApi } from '../apis/pokemonApi'

const PokemonsList = () => {
  const allPokemon = useSelector((redux) => redux.pokemon)
  const dispatch = useDispatch()
  const [pokemons, setPokemons] = useState([])

  useEffect(async () => {
    const pokemonApi = await dispatch(getAllPokemonThunk())
    setPokemons(pokemonApi)
  }, [])

  console.log(allPokemon)

  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>

      <div>
        <p>{allPokemon?.name}</p>
        <img src={allPokemon?.sprites?.front_default} />
      </div>
    </div>
  )
}

export default PokemonsList
