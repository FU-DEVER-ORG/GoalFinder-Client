import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import client from "./counterReducer";
const createStore = () =>
  configureStore({
    reducer: {
      client,
    },
  });
export const store = createStore();

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
