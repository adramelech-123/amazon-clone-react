import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    productsNumber: 0
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      //Check if product is already in products array
      const addProductExists = state.products.find((product) => product.id === action.payload.id)

      if(addProductExists) {
        addProductExists.quantity += parseInt(action.payload.quantity)
      } else {
        state.products.push({...action.payload, quantity: parseInt(action.payload.quantity)})
      }

      state.productsNumber = state.productsNumber + parseInt(action.payload.quantity)
    },
    removeFromCart: (state, action) => {
      // Find product to remove from array
      const productToRemove = state.products.find(
        (product) => product.id === action.payload
      );

      // remove quantity from product number
        state.productsNumber = state.productsNumber - productToRemove.quantity
      // find index of product
        const index = state.products.findIndex((product) => product.id === action.payload)
      // Use index to remove product from array
      state.products.splice(index, 1)
    }
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer