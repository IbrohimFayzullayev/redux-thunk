import { GET_DATA, SELECT } from "../actions/action";
export const initial_state = { countries: [], name: [] };

const reducers = (state = initial_state, action) => {
  if (action.type === GET_DATA) {
    return {
      countries: [...state.countries, ...action.payload],
      name: [],
    };
  } else if (action.type === SELECT) {
    return {
      countries: [...state.countries],
      name: action.payload,
    };
  }
  return state;
};

export default reducers;
