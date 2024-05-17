'use client';

import { userProfile } from '@/services/endpoint';
import { api } from './base';
import { get } from 'lodash';

export const userAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: (nickname: string) => ({
        url: userProfile.PROFILE_DETAL.replace('{nickname}', nickname),
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetProfileQuery } = userAPI;
