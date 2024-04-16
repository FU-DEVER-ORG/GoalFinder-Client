const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;  

//cookie keys storage
const ACCESS_TOKEN = '_access_token';
const REFRESH_TOKEN = '_refresh_token';
const IS_AUTH = '_is_auth';
const USER_INFO = "_user_info";

//...more in need
//addition in here
const constants = {
    API_SERVER,
    ACCESS_TOKEN,
    REFRESH_TOKEN,
    IS_AUTH,
    USER_INFO
}
export default constants;