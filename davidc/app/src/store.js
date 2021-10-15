// Action creator
export const redirect = (page) => ({
  type: "REDIRECT",
  payload: { page },
});

export const initialState = {
  page: "home",
  countersIds: [0, 1],
};

export const addCounter = (id = Math.random()) => ({
  type: "COUNTER_ADD",
  payload: { id },
});

// Reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case "REDIRECT":
      return { ...state, page: action.payload.page };

    case "COUNTER_ADD": {
      const newCounterIds = [...state.counterIds, action.payload.id];
      return { ...state, counterIds: newCounterIds };
    }
    default:
      return state;
  }
};
