import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        GPTSearchView: false,
        recommendedMovies: [],
        key: null
    },
    reducers: {
        changeGPTSearchView: (state, action) => {
            state.GPTSearchView = !state.GPTSearchView;
        },
        addRecommendedMovies: (state, action) => {
            state.recommendedMovies = action.payload;
        },
        addKey: (state, action) => {
            state.key = action.payload
        }
    }
})

export default gptSlice.reducer;
export const { changeGPTSearchView, addRecommendedMovies, addKey } = gptSlice.actions;