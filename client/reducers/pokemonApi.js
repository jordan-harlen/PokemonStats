import { RECEIVE_ALL_POKEMON } from '../actions/pokemonActions'

function reducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_ALL_POKEMON:
      return payload
    default:
      return state
  }
}

export default reducer
