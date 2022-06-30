import { configureStore } from "@reduxjs/toolkit"
import * as message from "./message.duck"
import * as counter from "./counter.duck"
import * as collections from "./collections.duck"
import { setupListeners } from "@reduxjs/toolkit/query"

// Creating a store
const store = configureStore({
    reducer:{
        collections: collections.reducer,
        message: message.reducer,
        counter: counter.reducer
    },
    middleware:(getDefaultMidleware) => getDefaultMidleware().concat(collections.middleware)
})

setupListeners(store.dispatch)
export default store