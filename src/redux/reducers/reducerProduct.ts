import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataTable } from '../../helpers/interface';

export interface IInitState {
    products: DataTable[]
}

const initialState: IInitState = {
    products: JSON.parse(window.localStorage.getItem('product') ?? '[]'),
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        saveProduct: (state, { payload }: PayloadAction<DataTable>): IInitState => {

            const products = [...state.products, payload];

            window.localStorage.setItem('product', JSON.stringify(products));

            return {
                ...state,
                products,
            }
        },
        setEditProduct: (state, { payload }: PayloadAction<DataTable>): IInitState => {

            const products = JSON.parse(JSON.stringify(state.products));
            const index = state.products.findIndex(v => v.code === payload.code);
            products[index] = payload;

            window.localStorage.setItem('product', JSON.stringify(products));

            return {
                ...state,
                products,
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { saveProduct, setEditProduct } = productsSlice.actions;

export default productsSlice.reducer;