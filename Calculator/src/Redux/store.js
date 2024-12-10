import { configureStore } from "@reduxjs/toolkit";
import newReducer from './Files/Calculator'

export default configureStore ({
    reducer:{
        calculator: newReducer
    }
})