import { configureStore } from "@reduxjs/toolkit";
import incrementDecrement from './Reducer/index'

export default configureStore({
    reducer:{
        counter: incrementDecrement,
    }
})