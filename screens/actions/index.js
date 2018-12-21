export const LOGIN_SUCCES = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function login(userCredentials) {
    if (userCredentials.username === 'enaarmen' && userCredentials.password === 'acka') {
        return {
            type: LOGIN_SUCCESS
        }
    } else {
        return {
            type: LOGIN_ERROR
        }
    }
}