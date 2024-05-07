import { errorMessage } from '@/services/errorMessage';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';
import { message } from 'antd';

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action: any) => {
    if (isRejectedWithValue(action)) {
      console.log(action?.payload?.data?.appCode);

      message.error(errorMessage?.[action?.payload?.data?.appCode]);
    }
    return next(action);
  };
