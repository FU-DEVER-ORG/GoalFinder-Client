//edit prefixBase here
const prefixBase:string = '/api';

const authEndpoint = {
    SIGN_IN: `${prefixBase}/Auth/sign-in`,
    SIGN_UP: `${prefixBase}/Auth/sign-up`
}
//export endpoint
export {
    authEndpoint
};