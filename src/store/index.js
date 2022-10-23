import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import cartSlice from './cart-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;

// we can't send an HTTP request inside the reducers.
// we can't use any fetch and the send request from the one reducer function to fetch the request.
// instead, we have 2 options to put the asynchronous code.
// 1. use the use effect hook to send the data to the backend
// 2. create an action creator which would allow us to run the asynchronous code
