import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice.js';
import { userReducer } from '../features/user/userSlice.js';
import { WL_Reducer } from '../features/WL Common/WL_Slice.js';


export const store = configureStore({
  reducer: {
    //counter: counterReducer,
    auth:userReducer,
    WLComm:WL_Reducer
  },
});