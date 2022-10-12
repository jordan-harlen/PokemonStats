import request from 'superagent'

export function getAllPokemonApi(pokemon) {
  return request
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
      return response.body
    })
}
