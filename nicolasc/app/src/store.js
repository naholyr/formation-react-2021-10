import { without } from "lodash";

// Action creator = fonction qui retourne une action

export const redirect = (page) => ({
  type: "REDIRECT",
  payload: { page: page },
});

export const addCounter = (id = Math.random()) => ({
  type: "COUNTER_ADD",
  payload: { id },
});

export const removeCounter = (id) => ({
  type: "COUNTER_REMOVE",
  payload: { id },
});

export const resetCounters = () => ({
  type: "COUNTER_RESET",
});

export const resetCounter = (id) => ({
  type: "COUNTER_RESET_SINGLE",
  payload: { id },
});

export const incrementCounter = (id) => ({
  type: "COUNTER_INCREMENT",
  payload: { id },
});

// Initial state of store

export const initialState = {
  page: "home",
  counterIds: [], // CounterId[]
  counterValues: {}, // Record<CounterId, number>
};

// Reducer: mutations

export const reducer = (state, action) => {
  switch (action.type) {
    case "REDIRECT":
      // Object.assign({}, state, { page: action.payload.page })
      return { ...state, page: action.payload.page };

    case "COUNTER_ADD": {
      const newCounterIds = [action.payload.id, ...state.counterIds];
      const newCounterValues = {
        ...state.counterValues,
        [action.payload.id]: 0,
      };
      return {
        ...state,
        counterIds: newCounterIds,
        counterValues: newCounterValues,
      };
    }

    case "COUNTER_REMOVE": {
      const newCounterIds = without(state.counterIds, action.payload.id);
      const newCounterValues = { ...state.counterValues };
      delete newCounterValues[action.payload.id];
      return {
        ...state,
        counterIds: newCounterIds,
        counterValues: newCounterValues,
      };
    }

    case "COUNTER_RESET": {
      const newCounterValues = {};
      state.counterIds.forEach((id) => (newCounterValues[id] = 0));
      return { ...state, counterValues: newCounterValues };
    }

    case "COUNTER_RESET_SINGLE": {
      const newCounterValues = {
        ...state.counterValues,
        [action.payload.id]: 0,
      };
      return { ...state, counterValues: newCounterValues };
    }

    case "COUNTER_INCREMENT": {
      const newValue = state.counterValues[action.payload.id] + 1;
      const newCounterValues = {
        ...state.counterValues,
        [action.payload.id]: newValue,
      };
      return { ...state, counterValues: newCounterValues };
    }

    default:
      return state;
  }
};
