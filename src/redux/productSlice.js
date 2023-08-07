import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/Status";



const initialState ={
    products:[],
    productsStatus:STATUS.IDLE,
    ProductDetail:[],
    ProductDetailStatus: STATUS.IDLE
}


export const getProducts = createAsyncThunk('getProducts', async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    return data
})

export const getDetailProduct = createAsyncThunk('getDetailProduct', async(id)=>{
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json();
    return data
})






const productSlice = createSlice({
name: "products",
initialState,
extraReducers: (builder)=>{
    builder
    .addCase(getProducts.pending,(state)=>{
        state.productsStatus = STATUS.LOADING

    })
    .addCase(getProducts.fulfilled,(state,action)=>{
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload
    })
    .addCase(getProducts.rejected,(state)=>{
        state.productsStatus = STATUS.FAIL

    })
    .addCase(getDetailProduct.pending,(state)=>{
        state.ProductDetailStatus = STATUS.LOADING

    })
    .addCase(getDetailProduct.fulfilled,(state,action)=>{
        state.ProductDetailStatus = STATUS.SUCCESS;
        state.ProductDetail = action.payload
    })
    .addCase(getDetailProduct.rejected,(state)=>{
        state.ProductDetailStatus = STATUS.FAIL

    })

}

})

export default productSlice.reducer