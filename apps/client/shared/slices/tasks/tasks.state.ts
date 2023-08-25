import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface ICar {
  data: any; // data stored from API
  currIndex: number; // current active car tab index
  syncing: boolean;
}

const initialState: ICar = {
  data: undefined,
  currIndex: 0,
  syncing: false,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // manage/control the currIndex value
    changeCurrIndex: (state, action: PayloadAction<number>) => {
      state.currIndex = action.payload;
    },
    setSyncing: (state, action: PayloadAction<boolean>) => {
      state.syncing = action.payload;
    },
  },
});

export const { changeCurrIndex, setSyncing } = taskSlice.actions;
export const selectComments = (state: any) => state.comments.value;
export default taskSlice.reducer;
