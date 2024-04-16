import axiosInstance from '../base/axiosInstance';
import { RequestOptionsInterface } from '@/model/requestOptions';
import webStorageClient from '@/utils/webStorageClient';
import { message } from 'antd';

const deleteRequest = (
  url: string,
  options?: RequestOptionsInterface,
): Promise<object> => {
  const data = options?.data;
  const tokenClient = webStorageClient.getToken();

  return axiosInstance
    .delete(url, {
      data,
      headers: {
        Authorization: `Bearer ${tokenClient}`,
      },
    })
    .then((res: any) => {
      if (res?.message) {
        //todo addition in need
      }
      return res;
    })
    .catch((err) => {
      if (err?.response?.data?.errors?.length > 0) {
        err?.response?.data?.errors?.forEach((mess: string) => {
          //todo addition in need
        });
      }
      return Promise.reject(err);
    });
};

export { deleteRequest };
