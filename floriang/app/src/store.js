// Action creator = fonction qui retourne une action

export const redirect = (page) => ({
  type: "REDIRECT",
  payload: { page: page },
});

// Initial state of store

export const initialState = {
  page: "home",
};

// Reducer: mutations
export const reducer = (state, action) => {
  switch (action.type) {
    case "REDIRECT":
      // Object.assign({}, state, { page: action.payload.page })
      return { ...state, page: action.payload.page };

    default:
      return state;
  }
};
