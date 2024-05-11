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

  const error = (text = 'Cập nhật thông tin thất bại!') => {
    messageApi.open({
      type: 'error',
      content: text,
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
