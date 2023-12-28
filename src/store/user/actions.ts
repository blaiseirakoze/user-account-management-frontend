import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helpers/dispatchHandler";
import {
    CHANGE_STATUS,
    CREATE_USER,
    ERRORS,
    FIND_ALL_USERS,
    SIGNUP,
    SIGNIN,
    FETCH_USER,
    UPDATE_USER
} from "./types";
import axios from "../helpers/axiosConfig"

// FIND ALL USERS
export const findAllUsers: any = (): AppThunk => async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch })
    try {
        const url = `/user/find`;
        const headers = {
            "Content-Type": "application/json",
        };
        const method = "get";
        const { data } = await axios({ method, headers, url });
        if (data) {
            dispatchHandler({
                type: FIND_ALL_USERS,
                data: data,
                dispatch
            });
        }
    } catch (error: any) {
        if (error) {
            const data = error || error.response;
            return dispatchHandler({
                type: ERRORS,
                data,
                dispatch
            });
        }
    }
}

// FETCH USER
export const fetchUser: any = (username:String): AppThunk => async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch })
    try {
        const url = `/user/fetch/${username}`;
        const headers = {
            "Content-Type": "application/json",
        };
        const method = "get";
        const { data } = await axios({ method, headers, url });
        if (data) {
            dispatchHandler({
                type: FETCH_USER,
                data: data,
                dispatch
            });
        }
    } catch (error: any) {
        if (error) {
            const data = error || error.response;
            return dispatchHandler({
                type: ERRORS,
                data,
                dispatch
            });
        }
    }
}

// CREATE USER
export const createUser: any = (info: any): AppThunk => async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch })
    try {
        const url = `/user`;
        const headers = {
            "Content-Type": "application/json",
        };
        const method = "post";
        const { data } = await axios({ method, headers, url, data: info });
        if (data) {
            dispatchHandler({
                type: CREATE_USER,
                data: data,
                dispatch
            });
        }
    } catch (error: any) {
        if (error) {
            const data = error.response.data;
            return dispatchHandler({
                type: ERRORS,
                data,
                dispatch
            });
        }
    }
}

// UPDATE USER
export const update: any = (info: any): AppThunk => async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch })
    try {
        const url = `/user/update`;
        const headers = {
            "Content-Type": "application/json",
        };
        const method = "put";
        const { data } = await axios({ method, headers, url, data: info });
        if (data) {
            dispatchHandler({
                type: UPDATE_USER,
                data: data,
                dispatch
            });
        }
    } catch (error: any) {
        if (error) {
            const data = error?.response;
            return dispatchHandler({
                type: ERRORS,
                data,
                dispatch
            });
        }
    }
}

// CHANGE USER STATUS
export const changeStatus: any = (info: any): AppThunk => async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch })
    try {
        const url = `/user/status`;
        const headers = {
            "Content-Type": "application/json",
        };
        const method = "post";
        const { data } = await axios({ method, headers, url, data: info });
        if (data) {
            dispatchHandler({
                type: CHANGE_STATUS,
                data: data,
                dispatch
            });
        }
    } catch (error: any) {
        if (error) {
            const data = error || error?.response;
            return dispatchHandler({
                type: ERRORS,
                data,
                dispatch
            });
        }
    }
}

// SIGNUP
export const signup: any = (info: any): AppThunk => async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch })
    try {
        const url = `/auth/signup`;
        const headers = {
            "Content-Type": "application/json",
        };
        const method = "post";
        const { data } = await axios({ method, headers, url, data: info });
        if (data) {
            dispatchHandler({
                type: SIGNUP,
                data: data,
                dispatch
            });
        }
    } catch (error: any) {
        if (error) {
            const data = error || error?.response;
            return dispatchHandler({
                type: ERRORS,
                data,
                dispatch
            });
        }
    }
}

// SIGNIN
export const signin: any = (info: any): AppThunk => async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch })
    try {
        const url = `/auth/signin`;
        const headers = {
            "Content-Type": "application/json",
        };
        const method = "post";
        const { data } = await axios({ method, headers, url, data: info });

        if (data) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.role);
            localStorage.setItem("username", data.username);
            dispatchHandler({
                type: SIGNIN,
                data: data,
                dispatch
            });
            if (data?.role === "ADMIN") {
                window.location.href = "/dashboard";
            } else {
                window.location.href = "/profile";
            }

        }
    } catch (error: any) {
        if (error) {
            const data = error || error?.response;
            return dispatchHandler({
                type: ERRORS,
                data,
                dispatch
            });
        }
    }
}