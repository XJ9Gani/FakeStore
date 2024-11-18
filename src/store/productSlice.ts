import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProductState, Product } from "@/types/Product";
import axios from "axios";

export const fetchProductByCotegory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category: string) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );

      const data = response.data;
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

const initialState: ProductState = {
  products: [],
  status: "idle",
  category: "men's clothing",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductByCotegory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProductByCotegory.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = "success";
          state.products = action.payload;
        }
      );
  },
});

export const { setCategory } = productSlice.actions;

export default productSlice.reducer;
