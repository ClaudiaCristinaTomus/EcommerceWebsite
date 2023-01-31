import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from './CartReducer'
import {SHOW_HIDE_CART,ADD_TO_CART,REMOVE_ITEM} from '../Types';

const CartState = ({children})=>{
    const initialState ={
        showCart :false,
        cartItem :[],
    };

    const[state,dispatch] = useReducer(CartReducer,initialState);


    return (
    <CartContext.Provider value={{
        showCart:state.showCart
    }}>

    </CartContext.Provider>)
}

export default CartState;