import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface ICar {
  data: any; // data stored from API
  currIndex: number; // current active car tab index
}

const initialState: ICar = {
  data: undefined,
  currIndex: 0,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // manage/control the currIndex value
    changeCurrIndex: (state, action: PayloadAction<number>) => {
      state.currIndex = action.payload;
    },
  },
});

export const { changeCurrIndex } = taskSlice.actions;
export const selectComments = (state: any) => state.comments.value;
export default taskSlice.reducer;
