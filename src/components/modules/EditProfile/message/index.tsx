import React from 'react';
import { message } from 'antd';

const Config = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Cập nhật thông tin thành công!',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Cập nhật thông tin thất bại!',
    });
  };
  const loading = () => {
    messageApi.open({
      type: 'loading',
      content: 'Đang cập nhật!',
      duration: 200,
    });
  };
  const close = () => {
    messageApi.destroy();
  };
  return {
    success,
    error,
    loading,
    contextHolder,
    close,
  };
};
export default Config;
