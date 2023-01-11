import { createSlice } from "@reduxjs/toolkit";
type StateType={
    Cart:{
       id:number  
       image:string   
       price:number 
       quantity:number
       rating:number
       title:string
       total:number
       type:string
     }[],
     User:{
        username:string
        password:string
     }[]
 }
const initialState: StateType = {
    Cart: [],
    User:[]
}

const DataSlice: any = createSlice({
    name: 'DataSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.Cart.push({ ...action.payload, total: action.payload.price });
        },
        updateQuantity: (state, action) => {
            //payload={ index:,quantity:}
            state.Cart[action.payload.index].quantity = action.payload.quantity
            state.Cart[action.payload.index].total = parseInt((action.payload.quantity * state.Cart[action.payload.index].total).toFixed())
        },
        deleteFromCart: (state, action) => {
            // payload=index
            state.Cart.splice(action.payload.index, 1)
        },
        addUser:(state,action)=>{
            state.User.push({ ...action.payload})
        }

    }

})
export default DataSlice.reducer;
export const { addToCart, updateQuantity, deleteFromCart } = DataSlice.actions