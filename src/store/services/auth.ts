"use client";

import { authEndpoint, matchEndpoint } from "@/services/endpoint";

import { api } from "./base";

export const authAPI = api.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      //todo addition data in need
      query: (data: {
        username: string;
        password: string;
        isRemember: boolean;
      }) => ({
        //todo
        url: authEndpoint.SIGN_IN,
        method: "POST",
        body: data,
        flashError: true,
      }),
      //todo add invalidatesTags if need
    }),
    signUp: build.mutation({
      //todo addition data in need
      query: (data: {
        email: string;
        password: string;
      }) => ({
        //todo
        url: authEndpoint.SIGN_UP,
        method: "POST",
        body: data,
        flashError: true,
      }),
      //todo add invalidatesTags if need
    }),
    getMatch: build.query ({
      query: () =>({
        url: matchEndpoint.MATCH,
        method: 'GET',
        flashError: true,
      }),
    })
    //todo add more api query ....
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useGetMatchQuery,
  //todo addition in need
} = authAPI;