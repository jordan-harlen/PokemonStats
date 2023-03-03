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
      normalImg: allPokemon?.sprites?.front_default,
      shinyImg: allPokemon?.sprites?.front_shiny,
      type1: allPokemon?.types
        ? allPokemon?.types[0]?.type?.name.charAt(0).toUpperCase() +
          allPokemon?.types[0]?.type?.name.slice(1)
        : '',
      type2: allPokemon?.types
        ? allPokemon?.types[1]?.type?.name.charAt(0).toUpperCase() +
          allPokemon?.types[1]?.type?.name.slice(1)
        : '',
      hp: allPokemon?.stats ? allPokemon?.stats[0].base_stat : '',
      atk: allPokemon?.stats ? allPokemon?.stats[1].base_stat : '',
      def: allPokemon?.stats ? allPokemon?.stats[2].base_stat : '',
      spcAtk: allPokemon?.stats ? allPokemon?.stats[3].base_stat : '',
      spcDef: allPokemon?.stats ? allPokemon?.stats[4].base_stat : '',
      spd: allPokemon?.stats ? allPokemon?.stats[5].base_stat : '',
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

  const sprite = document.getElementById('pokemonSprite')

  function normalSprite() {
    sprite.src = pokemon?.normalImg
  }

  function shinySprite() {
    sprite.src = pokemon?.shinyImg
  }

  console.log(pokemon.type1, pokemon.type2)

  return (
    <>
      <div className="PokemonList">
        <div className="TitleSection">
          <img
            src="https://fontmeme.com/permalink/221012/807552d58592f4c4b9f6fa4b43fd08d7.png"
            alt="title logo"
          />
          <form
            onSubmit={(e) => {
              handleSubmit(e)
            }}
          >
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
          </form>
        </div>
      </div>

      {!pokemonChosen ? (
        <div className="ChosenStatus">
          <h1>Please choose a Pokemon!</h1>
        </div>
      ) : (
        <div className="ChosenStatus">
          <h1>Choose another Pokemon!</h1>
        </div>
      )}

      {pokemonChosen && (
        <div className="Pokemon">
          <h2>{pokemon?.name}</h2>
          <img
            id="pokemonSprite"
            src={pokemon?.normalImg}
            alt={pokemon?.name}
          />

          <div className="ImgChanger">
            <button
              onClick={() => {
                normalSprite()
              }}
            >
              Normal
            </button>
            <button
              onClick={() => {
                shinySprite()
              }}
            >
              Shiny
            </button>
          </div>

          {!pokemon.type2 ? (
            <div className="types">
              <h3 className={pokemon.type1}>{pokemon.type1}</h3>
            </div>
          ) : (
            <div className="types">
              <h3 className={pokemon.type1}>{pokemon.type1}</h3>
              <h3 className={pokemon.type2}>{pokemon.type2}</h3>
            </div>
          )}
          <h3 className="hp">HP: {pokemon?.hp}</h3>
          <h3 className="atk">ATK: {pokemon?.atk}</h3>
          <h3 className="def">DEF: {pokemon?.def}</h3>
          <h3 className="spc-atk">SPC-ATK: {pokemon?.spcAtk}</h3>
          <h3 className="spc-def">SPC-DEF: {pokemon?.spcDef}</h3>
          <h3 className="spd">SPD: {pokemon?.spd}</h3>
        </div>
      )}
    </>
  )
}

export default PokemonSearch
