import { combineReducers } from 'redux'

import pokemonApiReducer from './pokemonApi'

// import stuff from './stuff'

export default combineReducers({
  pokemon: pokemonApiReducer,
})
