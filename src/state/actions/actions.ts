export interface Action<T = undefined> {
    type: string;
    payload?: T;
    error?: boolean;
    meta?: boolean;
}

export const ActionPromise = (action: string) => {
    return {
        pending: `${action}_PENDING`,
        fulfilled: `${action}_FULFILLED`,
        rejected: `${action}_REJECTED`,
    };
};

export const Actions = {
    GET_CHARACTERS: "GET_CHARACTERS",
    GET_CHARACTERS_PENDING: "GET_CHARACTERS_PENDING",
    GET_CHARACTERS_FULFILLED: "GET_CHARACTERS_FULFILLED",
    GET_CHARACTERS_REJECTED: "GET_CHARACTERS_REJECTED",

    GET_USER: "GET_USER",
    GET_USER_PENDING: "GET_USER_PENDING",
    GET_USER_FULFILLED: "GET_USER_FULFILLED",
    GET_USER_REJECTED: "GET_USER_REJECTED",

    CREATE_USER: "CREATE_USER",
    LOG_OUT: "LOG_OUT",
    LOG_IN: "LOG_IN",
    LOGIN_STATUS: "LOGIN_STATUS",

    LOGIN_USER: "LOGIN_USER",
    TOKEN_AUTH: "TOKEN_AUTH",

    CLEAR_MESSAGE: "CLEAR_MESSAGE",
    SET_MESSAGE: "SET_MESSAGE",

    UPDATE_EDIT_STATUS: "UPDATE_EDIT_STATUS",
    UPDATE_EDIT_TYPE: "UPDATE_EDIT_TYPE",
    UPDATE_TARGET: "UPDATE_TARGET",
}