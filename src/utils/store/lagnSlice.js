import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: "lang",
    initialState: { currentLang: "english" },
    reducers: {
        changeLanguage: (state, action) => {
            state.currentLang = action.payload
        }
    }

})

export const { changeLanguage } = langSlice.actions;
export default langSlice.reducer; 