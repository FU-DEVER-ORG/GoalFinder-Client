'use client';
import { authEndpoint, userEndpoint } from '@/services/endpoint';
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

    updateUser: build.mutation({
      //todo addition data in need
      query: (data: {
        userName: string;
        lastName: string;
        firstName: string;
        description: string;
        address: string;
        backgroundUrl: string;
        avatarUrl: string;
        experienceId: string;
        positionIds: Array<string>;
        competitionLevelId: string;
      }) => ({
        //todo
        url: userEndpoint.UPDATE_USER,
        method: 'PATCH',
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
  useUpdateUserMutation,
  //todo addition in need
} = authAPI;
