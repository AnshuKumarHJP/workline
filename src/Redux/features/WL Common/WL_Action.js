import axios from "axios";
import { GET_MODULES_FAILURE, GET_MODULES_REQUEST, GET_MODULES_SUCCESS } from "./WL_ActionType";




const getAll_ModuleRequest = () => ({ type: GET_MODULES_REQUEST })
const getAll_ModuleSuccess = (AllModule) => ({ type: GET_MODULES_SUCCESS, payload: AllModule })
const getAll_ModuleFailure = (error) => ({ type: GET_MODULES_FAILURE, payload: error })


export const getAllModule = () => async (dispatch) => {
    dispatch(getAll_ModuleRequest());
    try {
        const res = await axios.get('/api/Sec_Modules');
        const user = res.data;
        console.log(user);
        
        dispatch(getAll_ModuleSuccess(user));
    } catch (error) {
            dispatch(getAll_ModuleFailure(error.message));
    }
};