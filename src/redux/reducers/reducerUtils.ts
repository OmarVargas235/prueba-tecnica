import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IInitState {
    isOpenModalProduct: boolean;
    isEditProduct: boolean;
}

const initialState: IInitState = {
    isOpenModalProduct: false,
    isEditProduct: false,
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
    },
})

// Action creators are generated for each case reducer function
export const { setIsActiveModalProduct, setIsEditProduct } = utilsSlice.actions;

export default utilsSlice.reducer;