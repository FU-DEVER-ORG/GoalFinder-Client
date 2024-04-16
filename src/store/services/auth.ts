"use client";
import { authEndpoint } from "@/services/endpoint";
import { api } from "./base";

export const authAPI = api.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      //todo addition data in need
      query: (data: {
        username: string;
        password: string;
        rememberMe: boolean;
      }) => ({
        //todo
        url: authEndpoint.SIGN_IN,
        method: "POST",
        body: data,
        flashError: true,
      }),
      //todo add invalidatesTags if need
    }),
    //todo add more api query ....
  }),
});

export const {
  useSignInMutation,
  //todo addition in need
} = authAPI;
