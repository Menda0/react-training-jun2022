import { createSlice } from "@reduxjs/toolkit"

export const {reducer, actions} = createSlice(
    {
        name:"message",
        initialState:{
            text: "Hello world"
        },
        reducers:{
            setMessage: (state, action) => {
                state.text = action.payload
            }
        }
    }
)