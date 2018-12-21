import {
    LOGIN_SUCCESS
} from '../actions/index.js';

let cloneOject = function(obj) {
    return JSON.parse(JSON.stringify(obj))
}
let newState = { user: { loggedIn: false} , username: ''};

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
