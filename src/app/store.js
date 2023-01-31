import {configureStore, createReducer} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cakeReducer from '../features/cakes/cakesSlice';
import chocolateReducer from '../features/chocolates/chocolatesSlice';
import cartReducer from '../features/cart/cartSlice';
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        chocolate:chocolateReducer,
        cart:cartReducer
    },
    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(logger)
    
})

export default store;