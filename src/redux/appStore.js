import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice';

const appStore = configureStore({
    //here reducer word is used, because we are combining all small reducer in one reducer.
    
    reducer: {
        cart: cartReducer,
        //add other reducers
    }
});

export default appStore;

