import { constants } from '@/settings';
import webStorageClient from '@/utils/webStorageClient';
import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
} from '@reduxjs/toolkit/query/react';

// Define an interface for the custom request args
interface CustomRequestArgs {
  flashError?: boolean;
  flashSuccess?: boolean;
  [x: string]: any;
}

interface CustomRequestFunction extends BaseQueryFn {
  (args: any, api: any, extraOptions: Record<string, any>): Promise<any>;
}

const baseQuerry: BaseQueryFn = fetchBaseQuery({
  baseUrl: constants.API_SERVER,
  prepareHeaders: (headers, { endpoint }) => {
    const accessToken = webStorageClient.getToken();
    //todo addtion in need
    if (endpoint !== 'upload') {
      headers.set('Content-Type', 'application/json');
    }

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithCustomRequest: CustomRequestFunction = async (
  args: CustomRequestArgs,
  api,
  extraOptions,
) => {
  const result: any = await baseQuerry(args, api, extraOptions);
  const { flashError = false, flashSuccess = false } = args;
  if (result?.error) {
    if (flashError) {
      //todo customize error log here
      const errors = result?.error;
      // console.log(errors);
    }
    return result;
  }

  if (flashSuccess) {
    //addition in need
    console.log('success');
  }

  return result;
};

export const api = createApi({
  /**
   * `reducerPath` is optional and will not be required by most users.
   * This is useful if you have multiple API definitions,
   * e.g. where each has a different domain, with no interaction between endpoints.
   * Otherwise, a single API definition should be used in order to support tag invalidation,
   * among other features
   */
  reducerPath: '',
  /**
   * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
   */
  baseQuery: baseQueryWithCustomRequest,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: ['Levels', 'SubAccount', 'Me', 'DetailSubAccount'],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({}),
});
