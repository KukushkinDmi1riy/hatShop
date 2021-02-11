import {UserAction} from './user.types.js';

export const setCurrentUser = user => ({
    type: UserAction.SET_CURRENT_USER,
    payload: user
});