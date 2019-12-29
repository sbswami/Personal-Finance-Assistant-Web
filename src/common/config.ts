const API_URL = 'http://0.0.0.0:3000';
export const SOCKET_URL = 'http://0.0.0.0:3000';

const USER_API = API_URL + '/users';

export const CREATE_USER_API = USER_API + '/create';
export const LOGIN_USER = USER_API + '/login';
export const READ_USER = USER_API + '/read';
export const SEARCH_USER = USER_API + '/search';



// Localstorage Key

export const TOKEN_KEY = 'token';
export const HEADERS = {
  Authorization: localStorage.getItem(TOKEN_KEY),
  'Content-Type': 'application/json',
        mode: 'no-cors',
};