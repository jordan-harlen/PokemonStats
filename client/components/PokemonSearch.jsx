import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllPokemonThunk } from '../actions/pokemonActions'

const PokemonSearch = () => {
  const allPokemon = useSelector((redux) => redux.pokemon)
  const dispatch = useDispatch()
  const [pokemonName, setPokemonName] = useState('')

  function handleChange(e) {
    e.preventDefault()
    setPokemonName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getAllPokemonThunk(pokemonName))
    document.getElementById('search').value = ''
    console.log('submitted ' + pokemonName)
  }

  return (
    <>
      <div className="PokemonList">
        <div className="TitleSection">
          <h2>Pokemon!</h2>
          <input
            id="search"
            type="text"
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <button
            type="submit"
            onClick={(e) => {
              handleSubmit(e)
            }}
          >
            Search Pokemon
          </button>
        </div>
      </div>

      <div className="Pokemon">
        <img src={allPokemon?.sprites?.front_default} alt={allPokemon?.name} />
        <h2>{allPokemon?.name}</h2>
        <p>allPokemon?.stats[0]</p>
      </div>
    </>
  )
}

export default PokemonSearch
