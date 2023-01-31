import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    // cartItems:{
    //     name:null,
    //     qty:null,
    //     actualPrice:null,
    //     discountedPrice:null,
    //     percentageDiscount:null
    // },
    cartList:[],
    totalItems:0
    
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    extraReducers:{

        ['cake/ordered']:(state,action) => {
            console.log('cake ordered',action.payload)
            state.cartList.push(action.payload)
            state.totalItems += parseInt(action.payload.qty);
        },
        ['chocolate/ordered']:(state,action) => {
            console.log('chocolate ordered',action.payload)
            state.cartList.push(action.payload)
            state.totalItems += parseInt(action.payload.qty);
            console.log('state',state)
        }
    }
})


export default cartSlice.reducer;
//export const {ordered,restocked} = cartSlice.actions; 

// the cakeslice exports two actions called ordered and restocked 
// the action/types that are exported are cake/ordered and cake/restocked action type. 

