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
        method: 'POST',
        body: data,
        flashError: true,
      }),
      //todo add invalidatesTags if need
    }),

    signUp: build.mutation({
      //todo addition data in need
      query: (data: { email: string; password: string }) => ({
        //todo
        url: authEndpoint.SIGN_UP,
        method: 'POST',
        body: data,
        flashError: true,
      }),
      //todo add invalidatesTags if need
    }),
    updateUser: build.mutation({
      //todo addition data in need
      query: (data: UserUpdateInterface) => ({
        //todo
        url: userEndpoint.UPDATE_USER,
        method: 'PATCH',
        body: data,
        flashError: true,
      }),
      //todo add invalidatesTags if need
    }),
    getMatch: build.query<any, void> ({
      query: (data) =>({
        url: matchEndpoint.MATCH,
        method: 'GET',
        body: data,
        flashError: true,
      }),
    }),
    forgotPassword: build.mutation({
      query: (data: { userName: string }) => ({
        url: authEndpoint.FORGOT_PASSWORD,
        method: 'POST',
        body: data,
      }),
    }),
    resetPassword: build.mutation({
      query: (data: {
        otpCode: string;
        newPassword: string;
        confirmPassword: string;
      }) => ({
        url: authEndpoint.RESET_PASSWORD,
        method: 'PATCH',
        body: data,
      }),
    }),
    //mutation for post put patch, param for get delete

    getProfile: build.query({
      //todo addition data in need
      query: (userName: string) => ({
        //todo
        url: `${userEndpoint.USER}/${userName}`,
        method: 'GET',
        flashError: true,
      }),
      //todo add invalidatesTags if need
    }),

    //todo add more api query ....
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useGetMatchQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useUpdateUserMutation,
  useGetProfileQuery,
  //todo addition in need
} = authAPI;