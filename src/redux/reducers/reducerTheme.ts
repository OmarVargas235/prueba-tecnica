import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IInitState {
    isDark:boolean;
}

const initialState: IInitState = {
    isDark: false,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setActiveDark: (state, { payload }: PayloadAction<boolean>) => ({
            ...state,
            isDark: payload,
        }),
    },
})

// Action creators are generated for each case reducer function
export const { setActiveDark } = themeSlice.actions;

export default themeSlice.reducer;