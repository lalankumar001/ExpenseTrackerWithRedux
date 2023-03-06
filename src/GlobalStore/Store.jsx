// this file is index file wher all the slice are stored like counter and auth

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Reducer/Counter'; 
import authReducer from './Reducer/Auth';


export default configureStore({
    reducer:{
        counter:counterReducer,auth:authReducer},
    }

);

