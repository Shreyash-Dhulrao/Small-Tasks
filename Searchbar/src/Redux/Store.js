import { configureStore } from "@reduxjs/toolkit";
import historyReducer from './History'

export const Store = configureStore({
    reducer:{
        history: historyReducer
    }
})