import request from 'superagent'

export function getAllPokemonApi() {
  return request
    .get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => {
      return response.body
    })
}
