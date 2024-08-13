import { createSlice } from "@reduxjs/toolkit";


const counterSlice= createSlice({
    name:'counter',
    initialState:{
        value:0,
        OprationType:''
    },
    reducers:{
        addCounter:(state)=>{
            state.value +=1;
                state.OprationType='Addition'
        },
        subCounter:(state)=>{
            state.value -=1;
                state.OprationType='Subtration'
        }

    }
});

export const {addCounter,subCounter} = counterSlice.actions
export default counterSlice.reducer;