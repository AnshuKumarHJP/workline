import axios from "axios";
import { GET_ALLUSER_FAILURE, GET_ALLUSER_REQUEST, GET_ALLUSER_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType.js";
import { toast } from "react-toastify";

const registerRequest = () => ({ type: REGISTER_REQUEST })
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user })
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error })

export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        const res = await axios.post('/api/auth/signup', userData);
        const user = res.data;
        dispatch(registerSuccess(user));

    } catch (error) {
        dispatch(registerFailure(error.message));

    }
};

const loginRequest = () => ({ type: LOGIN_REQUEST })
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user })
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error })

export const login = (userData,navigate) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const res = await axios.post('/api/auth/login', userData);
        const userD = res.data;
        if (userD.Jwt) {
            localStorage.setItem('token', userD.Jwt)
        };
        toast.success(userD.message)
        dispatch(loginSuccess(userD))
        setTimeout(() => {
            navigate("/home");
        }, 1000);
    } catch (error) {
        toast.error(error.response.data.message)
        dispatch(loginFailure(error.response.data.message));

    }
};

const getuserRequest = () => ({ type: GET_USER_REQUEST })
const getuserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user })
const getuserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error })

export const getcurrentUserProfile = (naviagte) => async (dispatch) => {
    dispatch(getuserRequest());
    try {
        const res = await axios.get('/api/auth/currentUserProfile');
        const user = res.data;
        dispatch(getuserSuccess(user));
    } catch (error) {
        console.log(error)
        if (error.response && error.response.status === 401) {
           // alert(error.response.data.error)
          // naviagte('/session-out')
            dispatch(getuserFailure("Session expired. Please log in again."));
        } else {
            dispatch(getuserFailure(error.message));
        }
    }
};


const getAll_userRequest = () => ({ type: GET_ALLUSER_REQUEST })
const getAll_userSuccess = (user) => ({ type: GET_ALLUSER_SUCCESS, payload: user })
const getAll_userFailure = (error) => ({ type: GET_ALLUSER_FAILURE, payload: error })


export const getAllUserProfile = () => async (dispatch) => {
    dispatch(getAll_userRequest());
    try {
        const res = await axios.get('/api/user/alluser');
        const user = res.data;
        dispatch(getAll_userSuccess(user));
    } catch (error) {
            dispatch(getAll_userFailure(error.message));
    }
};

export const logout = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/auth/logout');
        const data = res.data;
        toast.success(data.message);
        localStorage.removeItem("token")
        dispatch({ type: LOGOUT, payload: null });

    } catch (error) {

    }
}