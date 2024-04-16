import axiosInstance from '../base/axiosInstance';
import { RequestOptionsInterface } from '@/model/requestOptions';
import webStorageClient from '@/utils/webStorageClient';
import { message } from 'antd';

const updateRequest = (
  url: string,
  options?: RequestOptionsInterface,
  fomrData?: boolean,
): Promise<object> => {
  const data = options?.data;
  const tokenClient = webStorageClient.getToken();

  if (tokenClient) {
    return axiosInstance
      .put(url, data, {
        headers: {
          Authorization: `Bearer ${tokenClient}`,
          'Content-Type': fomrData ? 'multipart/form-data' : 'application/json',
        },
      })
      .then((res: any) => {
        if (res?.message) {
          //todo addtion in need
        }
        return res;
      })
      .catch((err) => {
        if (
          err?.response?.data?.errors?.length > 0
        ) {
          err?.response?.data?.errors?.forEach((mess: string) => {
            //todo addition in need
          });
        }
        return Promise.reject(err);
      });
  }

  return axiosInstance
    .put(url, data, {
      headers: {},
    })
    .then((res: any) => {
      if (res?.message) {
        //todo addtion in need
      }
      return res;
    })
    .catch((err) => {
      if (err?.response?.data?.errors?.length > 0) {
        err?.response?.data?.errors?.forEach((mess: string) => {
          //todo addtion in need
        });
      }
      return Promise.reject(err);
    });
};

export { updateRequest };
