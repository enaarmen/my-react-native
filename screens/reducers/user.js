import {
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../actions/index';

let cloneOject = function(obj) {
    return JSON.parse(JSON.stringify(obj))
}

let newState = { user: { loggedIn: false, username: "", password: "" } };

export default function (state, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            newState = cloneObjet(state);
            newState.user.loggedIn = true;
            return newState;
        default:
            return state || newState;
    }
};
