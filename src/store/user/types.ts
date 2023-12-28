export const FIND_ALL_USERS = "FIND_ALL_USERS";
export const CREATE_USER = "CREATE_USER";
export const ERRORS = "ERRORS";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN";
export const FETCH_USER = "FETCH_USRE";
export const UPDATE_USER = "UPDATE_USER";

export interface IErrors {
    status: string;
    timestamp: string;
    message: string;
    error: string;
}

interface IUserErrors {
    type: typeof ERRORS;
    payload: {
        errors: IErrors;
    };
}

export interface IUser {
    id:string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    gender: string;
    maritalStatus: string;
    status: string;
    dateOfBirth: string;
}

interface IAllUsers {
    type: typeof FIND_ALL_USERS;
    payload: {
        data: IUser;
    };
}

interface ICreateUser {
    type: typeof CREATE_USER;
    payload: {
        data: IUser;
    };
}

interface IChangeStatus{
    type: typeof CHANGE_STATUS;
    payload: {
        data: IUser;
    };
}

interface ISignup{
    type: typeof SIGNUP;
    payload: {
        data: IUser;
    };
}

interface ISignin{
    type: typeof SIGNIN;
    payload: {
        data: IUser;
    };
}

interface IFetchUser{
    type: typeof FETCH_USER;
    payload: {
        data: IUser;
    };
}

interface IUpdateUser{
    type: typeof UPDATE_USER;
    payload: {
        data: IUser;
    };
}

export type IUserType = IAllUsers | IUserErrors | ICreateUser | IChangeStatus | ISignup | ISignin | IFetchUser | IUpdateUser