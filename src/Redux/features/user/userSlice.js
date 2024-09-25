import {
  GET_ALLUSER_FAILURE,
  GET_ALLUSER_REQUEST,
  GET_ALLUSER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";

const initialState = {
  user: null,
  isLoding: false,
  error: null,
  jwt: null,
  AllUser: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
    case GET_ALLUSER_REQUEST:
      return { ...state, isLoding: true, error: null,user:null,AllUser:null };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoding: false,
        error: null,
        jwt: action.payload.Jwt,
        user: null,
      };
    case GET_USER_SUCCESS:
      return { ...state, isLoding: false, error: null, user: action.payload };
    case GET_ALLUSER_SUCCESS:
      return {
        ...state,
        isLoding: false,
        error: null,
        AllUser: action.payload,
      };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER_FAILURE:
    case GET_ALLUSER_FAILURE:
      return { ...state, isLoding: false, error: action.payload };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
