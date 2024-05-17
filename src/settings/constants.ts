const API_SERVER = 'https://goalfinder.fudeverwebapi.io.vn';
import { TIME_FORMAT } from './formatDateTime';

//cookie keys storage
const ACCESS_TOKEN = '_access_token';
const REFRESH_TOKEN = '_refresh_token';
const IS_AUTH = '_is_auth';
const USER_INFO = '_user_info';
const USER_NAME = '_user_name';
const ASSETS_URL = 'https://api.cloudinary.com/v1_1/dmeetnppd/image/upload';
const FUNNY = '02569b52-d331-4b39-a89b-737cc0c55b13';
const MEDIUM = '0a0a9174-e2ab-49ca-943f-dc62c26eb032';
const SERIOUSLY = '67c22803-9fef-45e4-9f93-184db1a15458';
const NULLVALUE = 'aa403b53-5ae7-4e50-8b02-92dce06ed1a9';
const PROFESSIONAL = '8e9bd942-4472-4c19-bdd4-8bab0d6346e2';
const AMATEUR = 'c99b2f00-cf5a-468f-a0ae-31cd95fecce6';
const STRIKER = '126aad71-81e0-4e56-8d74-c1d3f3e9b8c0';
const DEFENDER = '7bfadb87-4950-4627-aa93-c0312ff492a5';
const GOALDER = '697ed101-07cb-4745-a80f-488e695c830a';
const BACKGROUND_DEFAULT =
  'https://res.cloudinary.com/dmeetnppd/image/upload/v1715528947/background_default.png';
const AVATAR_DEFAULT =
  'https://res.cloudinary.com/dmeetnppd/image/upload/v1715528950/avatar_default.png';

//...more in need
//addition in here
const constants = {
  API_SERVER,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  IS_AUTH,
  USER_INFO,
  TIME_FORMAT,
  ASSETS_URL,
  USER_NAME,
  FUNNY,
  MEDIUM,
  SERIOUSLY,
  NULLVALUE,
  PROFESSIONAL,
  AMATEUR,
  STRIKER,
  DEFENDER,
  GOALDER,
  BACKGROUND_DEFAULT,
  AVATAR_DEFAULT,
};
export default constants;
