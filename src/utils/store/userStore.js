import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from "./moviesSlice";
import gptReducer from './gptSlice';
import lagnSlice from "./lagnSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        lang: lagnSlice
    }
})

export default appStore;