import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DataTable } from '../../helpers/interface';

export interface IInitState {
    isOpenModalProduct: boolean;
    isEditProduct: boolean;
    dataProduct: DataTable;
}

const initialState: IInitState = {
    isOpenModalProduct: false,
    isEditProduct: false,
    dataProduct: { code: '', date: '', name: '', stock: 0, description: '' }
}

export const utilsSlice = createSlice({
    name: 'utils',
    initialState,
    reducers: {
        setIsActiveModalProduct: (state, { payload }: PayloadAction<boolean>) => ({
            ...state,
            isOpenModalProduct: payload,
        }),
        setIsEditProduct: (state, { payload }: PayloadAction<boolean>) => ({
            ...state,
            isEditProduct: payload,
        }),
        setEditProduct: (state, { payload }: PayloadAction<DataTable>) => ({
            ...state,
            dataProduct: payload,
        }),
    },
})

// Action creators are generated for each case reducer function
export const { setIsActiveModalProduct, setIsEditProduct, setEditProduct } = utilsSlice.actions;

export default utilsSlice.reducer;