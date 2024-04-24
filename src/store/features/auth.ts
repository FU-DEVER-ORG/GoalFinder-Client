import { createSlice } from "@reduxjs/toolkit";
import { constants } from "@/settings";
import { authAPI } from "@/store/services/auth";
import webStorageClient from "@/utils/webStorageClient";

const isAuthFromClientStorage = webStorageClient.get(constants.IS_AUTH);
export interface IAuth {
  isAuth: boolean;
  //todo
}
const initialState: IAuth = {
  isAuth: isAuthFromClientStorage || false,
};
const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //todo adding reducers
  },
  extraReducers: (builder) => {
    //todo
    builder
      .addMatcher(authAPI.endpoints.signIn.matchPending, () => {
        //todo do storage action when req is pending
      })
      .addMatcher(authAPI.endpoints.signIn.matchFulfilled, (state, action) => {
        // webStorageClient.set(constants.IS_AUTH, (state.isAuth = true));
        // console.log(action);
        webStorageClient.setToken(action?.payload?.body?.accessToken, 
          {expires: new Date(Date.now() + 15*60*1000)}
        );
        webStorageClient.set(
          constants.REFRESH_TOKEN,
          action?.payload?.body?.refreshToken,
          {expires: new Date(Date.now() + 20*60*1000)}
        );
      })
      .addMatcher(authAPI.endpoints.signIn.matchRejected, (state) => {
        //todo do storage action when req rejected
        webStorageClient.removeAll();
        state.isAuth = false;
      });
  },
});
export const {
  //todo add reducer in need
} = slice.actions;
export default slice.reducer;
