import { createSlice, PayloadAction, CaseReducer } from "@reduxjs/toolkit";


type State = number
const decrementAction: CaseReducer<State, PayloadAction<number>> = (state, action) =>
  state - action.payload

const testSlice = createSlice({
  name: "test",
  initialState: 1222,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
    decrement: decrementAction
  },
});

export const { increment, decrement } = testSlice.actions;

export default testSlice;
