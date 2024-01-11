"use client";

import { data } from "@/constants/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data,
  amount:0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      console.log('data', data);
      let product=state.data.find((item)=>item.name===payload)
      product.amount++
      console.log('son',product.amount);
      console.log('sdfg',product);
      
    },
    decrement: (state, { payload }) => {
      console.log('data', data);
      let product=state.data.find((item)=>item.name===payload)
      product.amount--
      console.log('son',product.amount);
      console.log('sdfg',product);
      
    },
  },
});

export const { increment,decrement } = cartSlice.actions;
export default cartSlice.reducer;
