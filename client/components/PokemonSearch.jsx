import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllPokemonThunk } from '../actions/pokemonActions'

const PokemonSearch = () => {
  const allPokemon = useSelector((redux) => redux.pokemon)
  const dispatch = useDispatch()

  const [pokemonName, setPokemonName] = useState('')
  const [pokemonChosen, setPokemonChosen] = useState(false)
  const [pokemon, setPokemon] = useState({
    name: '',
    species: '',
    img: '',
    hp: '',
  })

  useEffect(() => {
    const searchedPokemon = {
      name: pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1),
      species: allPokemon?.species?.name,
      img: allPokemon?.sprites?.front_default,
      hp: allPokemon?.stats ? allPokemon?.stats[0].base_stat : '',
      atk: allPokemon?.stats ? allPokemon?.stats[1].base_stat : '',
      def: allPokemon?.stats ? allPokemon?.stats[2].base_stat : '',
    }
    setPokemon(searchedPokemon)
  }, [allPokemon])

  function handleChange(e) {
    e.preventDefault()
    setPokemonName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getAllPokemonThunk(pokemonName))
    setPokemonChosen(true)
    document.getElementById('search').value = ''
  }

  return (
    <>
      <div className="PokemonList">
        <div className="TitleSection">
          <img
            src="https://fontmeme.com/permalink/221012/807552d58592f4c4b9f6fa4b43fd08d7.png"
            alt="title logo"
          />
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
        {!pokemonChosen ? (
          <h2>Please choose a Pokemon</h2>
        ) : (
          <>
            <h2>Choose another Pokemon!</h2>
            <img src={pokemon?.img} alt={pokemon?.name} />
            <h2>{pokemon?.name}</h2>
            <ul>
              <li>HP: {pokemon?.hp}</li>
              <li>ATK: {pokemon?.atk}</li>
              <li>DEF: {pokemon?.def}</li>
            </ul>
          </>
        )}
      </div>
    </>
  )
}

export default PokemonSearch
