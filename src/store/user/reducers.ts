import { ERRORS, FIND_ALL_USERS, CREATE_USER, IUserType, CHANGE_STATUS, SIGNIN, FETCH_USER, UPDATE_USER } from "./types";

const initialState = {
    users: [],
    errors: null,
    createdUser: null,
};

export const userReducer = (
    state = initialState,
    { type, payload }: IUserType
) => {
    switch (type) {
        case ERRORS:
            return { ...state, errors: payload, createdUser: null };
        case FIND_ALL_USERS:
            return { ...state, users: payload, errors: null }
        case CREATE_USER:
            return { ...state, createdUser: payload, errors: null }
        case CHANGE_STATUS:
            return { ...state, changedStatus: payload, errors: null }
        case CHANGE_STATUS:
            return { ...state, signedup: payload, errors: null }
        case SIGNIN:
            return { ...state, signedin: payload, errors: null }
        case FETCH_USER:
            return { ...state, user: payload, errors: null }
        case UPDATE_USER:
                return { ...state, updatedUser: payload, errors: null }
        default:
            return state;
    }
};