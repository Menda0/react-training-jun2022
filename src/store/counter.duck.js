import { createSlice } from "@reduxjs/toolkit";

export const {actions, reducer} = createSlice({
    name:"counter",
    initialState:{
        value: 0
    },
    reducers:{
        increment: (state) => {
            state.value = state.value+1
        },
        decrement: (state) => {
            state.value = state.value-1
        },
        setCounter: (state, action) => {
            state.value = action.payload
        }
    }
})