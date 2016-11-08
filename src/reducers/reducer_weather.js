import { FETCH_WEATHER } from '../actions/index';

export default function(state = {}, action){
  switch(action.type){
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); below does the same thing
      return { action.payload.data, ...state };
  }
  return state;
}
