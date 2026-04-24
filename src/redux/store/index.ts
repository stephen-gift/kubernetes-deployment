import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appReducer } from "../slices/app";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

const appReducers = combineReducers({
  preferences: appReducer
});

export const store = configureStore({
  reducer: appReducers,
  devTools: process.env.NODE_ENV !== "production"
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Custom hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
