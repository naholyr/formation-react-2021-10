import { createStore } from "redux";

export const redirect = (page) => ({
  type: "REDIRECT",
  payload: { page: page },
});

export const addCounterBelow = (id = Math.random()) => ({
  type: "COUNTER_ADD_BELOW",
  payload: { id },
});

export const addCounterAbove = (id = Math.random()) => ({
  type: "COUNTER_ADD_ABOVE",
  payload: { id },
});
export const removeCounter = (id) => ({
  type: "COUNTER_REMOVE",
  payload: { id },
});
export const removeAllCounters = (id) => ({
  type: "COUNTER_REMOVE_ALL",
  payload: { id },
});
export const resetAllCounters = (id) => ({
  type: "COUNTER_RESET_ALL",
  payload: { id },
});

export const initialState = {
  page: "home",
  counterIds: [],
};
// Reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case "REDIRECT":
      return { ...state, page: action.payload.page };
    case "COUNTER_ADD_BELOW":
      //return { ...state, countersIds: [...action.payLoad.countersId, Math.random()] };
      const newCounterBIds = [...state.counterIds, action.payload.id];
      return { ...state, counterIds: newCounterBIds };
    case "COUNTER_ADD_ABOVE":
      //return { ...state, countersIds: [...action.payLoad.countersId, Math.random()] };
      const newCounterAIds = [action.payload.id, ...state.counterIds];
      return { ...state, counterIds: newCounterAIds };
    case "COUNTER_RESET_ALL":
      // TO BE DONE
      const newCounterRIds = [Math.random(), ...state.counterIds];
      return { ...state, counterIds: newCounterRIds };
    case "COUNTER_REMOVE":
      const newIndices = state.counterIds.filter(
        (oldIndex) => oldIndex !== action.payload.id
      );
      return { ...state, counterIds: newIndices };
    case "COUNTER_REMOVE_ALL":
      return { ...state, counterIds: [] };
    default:
      return state;
  }
};
//npm install redux
export const myStore = createStore(reducer, initialState);
window.store = myStore;
