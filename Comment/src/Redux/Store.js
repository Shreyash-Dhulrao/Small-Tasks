import { configureStore } from "@reduxjs/toolkit";
import commentReducer from './Files/Comment'

const newReducer  = configureStore({
    reducer:{
        comment: commentReducer
    }
}
)

export default newReducer
