//edit prefixBase here
const prefixBase: string = '/api';

const authEndpoint = {
  SIGN_IN: `/auth/sign-in`,
  SIGN_UP: `/auth/sign-up`,
  FORGOT_PASSWORD: `/auth/forgot-password`,
  RESET_PASSWORD: `/auth/reset-password-with-otp-code`,
};

const userEndpoint = {
  UPDATE_USER: `/user/update`,
  USER: `/user/profile`,
};

const editProfileEndpoint = {
  PROVINCE: `${prefixBase}/province`,
  DISTRICT: `${prefixBase}/province/district`,
  WARD: `${prefixBase}/province/ward`,
};
const matchEndpoint = {
  MATCH: `/match`,
};
export { authEndpoint, editProfileEndpoint, matchEndpoint };
