export const redirect = (page) => ({
  type: "REDIRECT",
  payload: { page: page },
});

export const setNbCounters = (nbCounters) => ({
  type: "NBCOUNTERS",
  payload: { nbCounters },
});

export const addCounter = (id = Math.random()) => ({
  type: "ADDCOUNTER",
  payload: { id },
});

export const removeCounter = (id) => ({
  type: "REMOVECOUNTER",
  payload: { id },
});

export const resetAll = () => ({
  type: "RESETALL",
});

//Initial state of store
export const initialState = {
  page: "home",
  listCounters: [],
  nbCounters: 0,
};

// Reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case "REDIRECT":
      return { ...state, page: action.payload.page };
    case "ADDCOUNTER":
      return {
        ...state,
        listCounters: [...state.listCounters, action.payload.id],
      };
    case "REMOVECOUNTER":
      const newListCounters = state.listCounters.filter(
        (oldIndex) => oldIndex !== action.payload.id
      );
      return {
        ...state,
        listCounters: newListCounters,
      };
    case "RESETALL":
      return state.listCounters.map(() => Math.random());
    case "NBCOUNTERS":
      return { ...state, nbCounters: action.payload.nbCounters };
    default:
      return state;
  }
};
