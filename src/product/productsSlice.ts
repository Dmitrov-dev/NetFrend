import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './InitialState';

export type Movie = {
  name: string;
  image: string;
  rating: number;
  trailerRutubeId: string;
  id: 1;
};
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct:(state, action) => {
            state.push(action.payload);
        },
        removeProduct: (state, action) => {
            return state.filter(product => product.trailerRutubeId !== action.payload)
        }
    }
})

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;