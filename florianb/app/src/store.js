// Action creator = fonction qui retourne une action
import { without } from "lodash";

export const redirect = (page) => ({
  type: "REDIRECT",
  payload: { page },
});

export const addCounter = (id = Math.random()) => ({
  type: "ADD_COUNTER",
  payload: { id },
});

export const removeCounter = (id) => ({
  type: "REMOVE_COUNTER",
  payload: { id },
});

export const resetCounters = () => ({
  type: "RESET_COUNTERS",
});

// Initial state of store

export const initialState = {
  page: "home",
  counterIds: [], // CounterId[]
};

// Reducer: mutations

export const reducer = (state, action) => {
  switch (action.type) {
    case "REDIRECT":
      // Object.assign({}, state, { page: action.payload.page })
      return { ...state, page: action.payload.page };
    case "ADD_COUNTER":
      // state = { page: 'counters', counterIds: ['b', 'a'] }
      // action { type: 'ADD_COUNTER', payload: { id: 'c' } }
      // return { page: 'counters', counterIds: [ 'c', 'b', 'a' ] }
      return { ...state, counterIds: [action.payload.id, ...state.counterIds] };
    case "REMOVE_COUNTER":
      return {
        ...state,
        counterIds: without(state.counterIds, action.payload.id),
      };
    case "RESET_COUNTERS":
      return { ...state, counterIds: [] };
    default:
      return state;
  }
};
