'use client';
import { authEndpoint, userEndpoint } from '@/services/endpoint';
import { api } from './base';
import { UserUpdateInterface } from '@/model/entites/userUpdate';

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

    getUser: build.query({
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
  useUpdateUserMutation,
  useGetUserQuery,
  //todo addition in need
} = authAPI;
