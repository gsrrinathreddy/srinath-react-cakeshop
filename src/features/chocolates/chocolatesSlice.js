import {createSlice} from '@reduxjs/toolkit';



const initialState = {
    noOfChocolates : 75,
    orderCart:{
        name:null,
        qty:null,
        actualPrice:null,
        discountedPrice:null,
        percentageDiscount:null
    }
}
const chocolatesSlice = createSlice({
    name:'chocolate',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            console.log("chokolate slice",action.payload)
            state.noOfChocolates -= action.payload.qty;
            state.orderCart.name =  action.payload.name;
            state.orderCart.qty = action.payload.qty;
            state.orderCart.actualPrice = action.payload.actualPrice;
            state.orderCart.discountedPrice = action.payload.discountedPrice;
            state.orderCart.percentageDiscount = action.payload.percentageDiscount;
        },
        restocked:(state,action)=>{
            state.noOfChocolates += action.payload;
        }
    }
})


export default chocolatesSlice.reducer;
export const {ordered,restocked} = chocolatesSlice.actions; 
