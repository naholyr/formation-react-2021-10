import { reducer, redirect } from "./store";

test("action 'REDIRECT'", () => {
  const initialState = { page: "toto" };
  const action = redirect("tutu");
  const state = reducer(initialState, action);
  expect(state).toEqual({ page: "tutu" });
});
