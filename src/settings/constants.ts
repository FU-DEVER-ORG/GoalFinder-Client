const API_SERVER = 'https://goalfinder.fudeverwebapi.io.vn';  
import { TIME_FORMAT } from './formatDateTime';

//cookie keys storage
const ACCESS_TOKEN = '_access_token';
const REFRESH_TOKEN = '_refresh_token';
const IS_AUTH = '_is_auth';
const USER_INFO = "_user_info";
const ASSETS_URL = "https://api.cloudinary.com/v1_1/dmeetnppd/image/upload";


//...more in need
//addition in here
const constants = {
    API_SERVER,
    ACCESS_TOKEN,
    REFRESH_TOKEN,
    IS_AUTH,
    USER_INFO,
    TIME_FORMAT,
    ASSETS_URL
}
export default constants;