import {
  GET_MODULES_FAILURE,
  GET_MODULES_REQUEST,
  GET_MODULES_SUCCESS,
} from "./WL_ActionType";

const initialState = {
  isLoding: false,
  error: null,
  AllModule: null,
};

export const WL_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MODULES_REQUEST:
      return { ...state, isLoding: true, error: null, AllModule: null };
    case GET_MODULES_SUCCESS:
      return { ...state, isLoding: false, error: null, AllModule: action.payload };
    case GET_MODULES_FAILURE:
      return { ...state, isLoding: false, error: action.payload, AllModule: null };
    default:
      return state;
  }
};
