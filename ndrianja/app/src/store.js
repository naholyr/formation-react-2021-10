// Action creator = fonction qui retourne une action

export const redirect = (page) => ({
  type: "REDIRECT",
  payload: { page: page },
});

export const resetArray = (myArray) => ({
  type: "RESET",
  payload: { counterArray: myArray },
});

export const initialState = {
  page: "home",
  counterArray: [],
};

// Reducer: mutations
export const reducer = (state, action) => {
  switch (action.type) {
    case "REDIRECT":
      return { ...state, page: action.payload.page };
    case "RESET":
      return { ...state, counterArray: action.payload.counterArray };
    default:
      return state;
  }
};
