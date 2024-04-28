//edit prefixBase here
const prefixBase: string = '/api';

const authEndpoint = {
  SIGN_IN: `/auth/sign-in`,
  SIGN_UP: `/auth/sign-up`,
};
const editProfileEndpoint = {
  PROVINCE: `${prefixBase}/province`,
  DISTRICT: `${prefixBase}/province/district`,
  WARD: `${prefixBase}/province/ward`,
};
//export endpoint
export { authEndpoint, editProfileEndpoint };
