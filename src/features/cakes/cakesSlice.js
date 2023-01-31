import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    orderCart:{
        name:null,
        qty:null,
        actualPrice:null,
        discountedPrice:null,
        percentageDiscount:null
    }
    
}
const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            //console.log('slice',action.payload)
            state.orderCart.name =  action.payload.name;
            state.orderCart.qty = action.payload.qty;
            state.orderCart.actualPrice = action.payload.actualPrice;
            state.orderCart.discountedPrice = action.payload.discountedPrice;
            state.orderCart.percentageDiscount = action.payload.percentageDiscount;
        },
        restocked:(state,action)=>{
            state.noOfCakes += action.payload;
        }
    }
})


export default cakeSlice.reducer;
export const {ordered,restocked} = cakeSlice.actions; 

// the cakeslice exports two actions called ordered and restocked 
// the action/types that are exported are cake/ordered and cake/restocked action type. 

