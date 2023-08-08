import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { taskSlice } from "../slices/tasks/tasks.state";
import { rootApi } from "../slices/root-api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const makeStore = () =>
  configureStore({
    reducer: {
      [taskSlice.name]: taskSlice.reducer,
      [rootApi.reducerPath]: rootApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([rootApi.middleware]),
    devTools: true,
  });

type Store = ReturnType<typeof makeStore>;
export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const wrapper = createWrapper(makeStore);
