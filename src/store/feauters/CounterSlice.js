import {createSlice} from '@reduxjs/toolkit';



export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        data: null,
        loadingData: "idle",   // "loading", "failed"
        errorData: null,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        }
        ,
        decrement: (state) => {
            state.value -= 1;
        }
    },
    extraReducers: ((builder)=>{
        builder.addCase()
    })
});
export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;

