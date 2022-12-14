import { getAllPokemonApi } from '../apis/pokemonApi'

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON'

export function receiveAllPokemon(pokemon) {
  return {
    type: RECEIVE_ALL_POKEMON,
    payload: pokemon,
  }
}

export function getAllPokemonThunk(pokemon) {
  return (dispatch) => {
    getAllPokemonApi(pokemon)
      .then((res) => {
        dispatch(receiveAllPokemon(res))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
