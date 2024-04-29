'use client';
import { authEndpoint } from '@/services/endpoint';
import { api } from './base';

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
    //todo add more api query ....
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  //todo addition in need
} = authAPI;
